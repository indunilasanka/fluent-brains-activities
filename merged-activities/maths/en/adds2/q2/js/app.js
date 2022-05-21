/* popup */
let isSwapQuestion = false;
const questionsArray = [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "q9",
    "q10",
];
let currentQuestionNumber = 1;
let starCount = 3;
let score = 0;
let finalScore = 0;
let scoreFactor = 10;
let salutations = [
    "Great",
    "Well Done",
    "Awesome",
    "Good Job",
    "Congratulations",
    "Superb",
    "Felicitations",
    "Kudos",
];

function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 2;
    msg.rate = 0.8;
    msg.pitch = 1.25;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);

    //sinhala
    // const msg = new SpeechSynthesisUtterance();
    // msg.volume = 1;
    // msg.rate = 1;
    // msg.pitch = 1;
    // msg.text = text;
    // msg.lang = 'pt-BR';
    // speechSynthesis.speak(msg);
}

/* timer */
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

window.addEventListener("load", startTimer);

function startTimer() {
    pauseTimer();
    cron = setInterval(() => {
        timer();
    }, 10);
}

/* start the timer */
function timer() {
    if ((millisecond += 10) === 1000) {
        millisecond = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    if (minute === 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('timerhrs').innerText = returnData(hour);
    document.getElementById('timermin').innerText = returnData(minute);
    document.getElementById('timersec').innerText = returnData(second);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

/* stop the timer */
function pauseTimer() {
    clearInterval(cron);
}

function resetTime() {
    second = 0;
    minute = 0;
    hour = 0;
}

/* LOGIC */
function q1checkTotalValue(id, actual) {
    const input = document.getElementById(id);
    if (input.value == actual) {
        input.style.color = '#46cd46';
        dogclap = true;
        setTimeout(() => {
            dogclap = false;
        }, 3000)
    } else {
        input.style.color = '#FF0000A8';
        setTimeout(() => {
            input.style.color = 'black';
        }, 1500);
    }
}

function q1checkMissingValuesAll(qId) {
    let isCorrect = true;
    if (qId === 'q1') {
        const input1 = document.getElementById('q1input1');
        const input2 = document.getElementById('q1input2');
        const input3 = document.getElementById('q1input3');

        if (input1.value != '8') {
            input1.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = "black";
            }, 2000);
        }

        if (input2.value != '4') {
            input2.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = "black";
            }, 2000);
        }

        if (input3.value != '10') {
            input3.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = "black";
            }, 2000);
        }

        if (isCorrect) {
            openPopup();
        } else {
            let styleClasses = document.getElementById("qpanel").classList;
            styleClasses.add("incorrect-answer");

            setTimeout(() => {
                styleClasses.remove("incorrect-answer");
            }, 1000);
            reduceStarCount();
        }
    }
}

function openHelpAction(id) {
    const helpModal = document.getElementById(id);
    helpModal.style.display = "block";
}

function closeHelpAction(id) {
    const helpModal = document.getElementById(id);
    helpModal.style.display = "none";
}

function displayHelpAction(qId) {
    let id = "explanation-action-" + qId;
    const action = document.getElementById(id);
    action.style.display = "flex";
}

var helpAnswer1 = "";
var helpContainer1 = document.getElementById('step4-btn-con1');
if (helpContainer1 !== null) {
    let children1 = helpContainer1.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help4-input3") {
                document.getElementById('step4-wrong-row1').style.display = "none";
                document.getElementById('step4-right-row1').style.display = "block";
            } else {
                document.getElementById('step4-wrong-row1').style.display = "block";
                document.getElementById('step4-right-row1').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked",
                    ""
                );
                this.className += " q1-step3-btn-clicked";

            }
        });
    }
}

var helpContainer2 = document.getElementById('step3-btn-con1');
if (helpContainer2 !== null) {
    let children1 = helpContainer2.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help3") {
                document.getElementById('step3-wrong').style.display = "none";
                document.getElementById('step3-right').style.display = "block";
            } else {
                document.getElementById('step3-wrong').style.display = "block";
                document.getElementById('step3-right').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked1");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked1";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked1",
                    ""
                );
                this.className += " q1-step3-btn-clicked1";

            }
        });
    }
}
var helpContainer3 = document.getElementById('step3-btn-con2');
if (helpContainer3 !== null) {
    let children1 = helpContainer3.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help3-input2") {
                document.getElementById('step3-wrong-row2').style.display = "none";
                document.getElementById('step3-right-row2').style.display = "block";
            } else {
                document.getElementById('step3-wrong-row2').style.display = "block";
                document.getElementById('step3-right-row2').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked2");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked2";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked2",
                    ""
                );
                this.className += " q1-step3-btn-clicked2";
            }
        });
    }
}
var helpContainer4 = document.getElementById('step4-btn-con2');
if (helpContainer4 !== null) {
    let children1 = helpContainer4.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help4-input5") {
                document.getElementById('step4-wrong-row2').style.display = "none";
                document.getElementById('step4-right-row2').style.display = "block";
            } else {
                document.getElementById('step4-wrong-row2').style.display = "block";
                document.getElementById('step4-right-row2').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked3");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked3";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked3",
                    ""
                );
                this.className += " q1-step3-btn-clicked3";

            }
        });
    }
}

var helpContainer5 = document.getElementById('step4-btn-con3');
if (helpContainer5 !== null) {
    let children1 = helpContainer5.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help4-input11") {
                document.getElementById('step4-wrong-row3').style.display = "none";
                document.getElementById('step4-right-row3').style.display = "block";
            } else {
                document.getElementById('step4-wrong-row3').style.display = "block";
                document.getElementById('step4-right-row3').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked4");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked4";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked4",
                    ""
                );
                this.className += " q1-step3-btn-clicked4";

            }
        });
    }
}
var helpContainer6 = document.getElementById('step6-btn-con1');
if (helpContainer6 !== null) {
    let children1 = helpContainer6.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help6-input2") {
                document.getElementById('step6-wrong-row1').style.display = "none";
                document.getElementById('step6-right-row1').style.display = "block";
            } else {
                document.getElementById('step6-wrong-row1').style.display = "block";
                document.getElementById('step6-right-row1').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked5");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked5";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked5",
                    ""
                );
                this.className += " q1-step3-btn-clicked5";

            }
        });
    }
}

var helpContainer7 = document.getElementById('step6-btn-con2');
if (helpContainer7 !== null) {
    let children1 = helpContainer7.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help6-input7") {
                document.getElementById('step6-wrong-row2').style.display = "none";
                document.getElementById('step6-right-row2').style.display = "block";
            } else {
                document.getElementById('step6-wrong-row2').style.display = "block";
                document.getElementById('step6-right-row2').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked6");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked6";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked6",
                    ""
                );
                this.className += " q1-step3-btn-clicked6";

            }
        });
    }
}

var helpContainer8 = document.getElementById('step6-btn-con3');
if (helpContainer8 !== null) {
    let children1 = helpContainer8.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help6-input11") {
                document.getElementById('step6-wrong-row3').style.display = "none";
                document.getElementById('step6-right-row3').style.display = "block";
            } else {
                document.getElementById('step6-wrong-row3').style.display = "block";
                document.getElementById('step6-right-row3').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked7");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked7";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked7",
                    ""
                );
                this.className += " q1-step3-btn-clicked7";

            }
        });
    }
}

// popup functions start-------------------------------------------

function setScore(){
    let score = Number(sessionStorage.getItem("adds2-q1"));
    score = score.toFixed(2);
    document.getElementById("current-score").innerHTML = score;
}

function reduceStarCount() {
    if (starCount !== 1) {
        starCount--;
    }
}

function closePopup() {
    document.querySelector(".popup-container").style.display = "none";
    switchQuestion();
}

function openPopup() {
    calculateScore();
    pauseTimer();
    document.querySelector(".popup-container").style.display = "flex";
}

function switchQuestion(){
    window.location.replace("/maths/en/adds2/q3/index.html");
}

function calculateScore() {
    let score = (starCount * scoreFactor) / (second + minute * 60 + hour * 3600);
    score = score.toFixed(2);
    sessionStorage.setItem("adds2-q2", score);

    let newScore = Number(sessionStorage.getItem("adds2-q1")) + Number(score);
    newScore = newScore.toFixed(2);
    document.getElementById("current-score").innerHTML = newScore;
}

function clearSession() {
    sessionStorage.clear();
}

// popup functions end ---------------------------------------------
