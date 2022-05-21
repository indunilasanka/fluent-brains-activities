//global variables
let ctx;
let fps = 4;
let button = document.getElementById("clapbtn");
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 350;
let dogclap = false;

let isSwapQuestion = false;
const questionsArray = ["q3", "q14", "q4", "q5", "q15", "q13", "q6", "q12"];
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
    document.getElementById("timerhrs").innerText = returnData(hour);
    document.getElementById("timermin").innerText = returnData(minute);
    document.getElementById("timersec").innerText = returnData(second);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`;
}

/* stop the timer */
function pauseTimer() {
    clearInterval(cron);
}

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

function playTitleSin(text) {
    responsiveVoice.speak(text, "Sinhala", {volume: 2, rate: 1, pitch: 1});
}

// popup functions start-------------------------------------------

function setScore(){
    document.getElementById("current-score").innerHTML = 0;
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
    window.location.replace("/maths/en/ptns1/q4/index.html");
}

function calculateScore() {
    let score = (starCount * scoreFactor) / (second + minute * 60 + hour * 3600);
    score = score.toFixed(2);
    sessionStorage.setItem("ptns1-q1", score);
    document.getElementById("current-score").innerHTML = score;
}

function clearSession() {
    sessionStorage.clear();
}

// popup functions end ---------------------------------------------


// LOGIC

function drag(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    var drop_target = event.target;
    var drag_target_id = event.dataTransfer.getData("target_id");
    var drag_target = document.getElementById(drag_target_id);

    if (drop_target !== null && drag_target !== null) {
        var tmp = document.createElement("span");
        tmp.className = "hide";
        drop_target.before(tmp);
        drag_target.before(drop_target);
        tmp.replaceWith(drag_target);
    }
}

// q2

var q2Clickedword1 = "";
var container = document.getElementById("q2-word-container1");
if (container != null) {
    var btns = container.getElementsByClassName("q2-word1");
    console.log(btns);

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            q2Clickedword1 = this.innerHTML;

            // console.log(q2Clickedword1);

            var current = document.getElementsByClassName("q2-word-clicked");

            if (current.length === 0) {
                this.className += " q2-word-clicked";
            } else {
                if (this == current[0]) {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked",
                        ""
                    );
                    q2Clickedword1 = "";
                } else {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked",
                        ""
                    );

                    this.className += " q2-word-clicked";
                }
            }
        });
    }
}

var q2Clickedword2 = "";
var container = document.getElementById("q2-word-container2");
if (container != null) {
    var btns = container.getElementsByClassName("q2-word1");
    console.log(btns);

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            q2Clickedword2 = this.innerHTML;

            // console.log(q2Clickedword2);

            var current = document.getElementsByClassName("q2-word-clicked1");

            if (current.length === 0) {
                this.className += " q2-word-clicked1";
            } else {
                if (this == current[0]) {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked1",
                        ""
                    );
                    q2Clickedword2 = "";
                } else {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked1",
                        ""
                    );

                    this.className += " q2-word-clicked1";
                }
            }
        });
    }
}

var q2Clickedword3 = "";
var container = document.getElementById("q2-word-container3");
if (container != null) {
    var btns = container.getElementsByClassName("q2-word1");
    console.log(btns);

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            q2Clickedword3 = this.innerHTML;

            // console.log(q2Clickedword3);

            var current = document.getElementsByClassName("q2-word-clicked2");

            if (current.length === 0) {
                this.className += " q2-word-clicked2";
            } else {
                if (this == current[0]) {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked2",
                        ""
                    );
                    q2Clickedword3 = "";
                } else {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked2",
                        ""
                    );

                    this.className += " q2-word-clicked2";
                }
            }
        });
    }
}

var q2Clickedword4 = "";
var container = document.getElementById("q2-word-container4");
if (container != null) {
    var btns = container.getElementsByClassName("q2-word1");
    console.log(btns);

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            q2Clickedword4 = this.innerHTML;

            // console.log(q2Clickedword4);

            var current = document.getElementsByClassName("q2-word-clicked3");

            if (current.length === 0) {
                this.className += " q2-word-clicked3";
            } else {
                if (this == current[0]) {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked3",
                        ""
                    );
                    q2Clickedword4 = "";
                } else {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked3",
                        ""
                    );

                    this.className += " q2-word-clicked3";
                }
            }
        });
    }
}

var q2Clickedword5 = "";
var container = document.getElementById("q2-word-container5");
if (container != null) {
    var btns = container.getElementsByClassName("q2-word1");
    console.log(btns);

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            q2Clickedword5 = this.innerHTML;

            var current = document.getElementsByClassName("q2-word-clicked4");

            if (current.length === 0) {
                this.className += " q2-word-clicked4";
            } else {
                if (this == current[0]) {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked4",
                        ""
                    );
                    q2Clickedword5 = "";
                } else {
                    current[0].className = current[0].className.replace(
                        " q2-word-clicked4",
                        ""
                    );

                    this.className += " q2-word-clicked4";
                }
            }
        });
    }
}

function q2SubmitAnswer() {
    if (
        q2Clickedword1 === "fat" &&
        q2Clickedword2 === "pretty" &&
        q2Clickedword3 === "sharp" &&
        q2Clickedword4 === "wild" &&
        q2Clickedword5 === "long"
    ) {
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
