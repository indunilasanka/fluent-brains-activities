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
var q2Answer1 = "";
var q2Answer2 = "";
var q2Answer3 = "";
var q2container1 = document.getElementById("q3-shapes-container1");
var q2buttons1 = q2container1.getElementsByClassName("q3-answer-name");
for (var i = 0; i < q2buttons1.length; i++) {
    q2buttons1[i].addEventListener("click", function () {
        q2Answer1 = this.innerHTML;
        //console.log(q2Answer1);

        var current1 = document.getElementsByClassName("q3-answer-check1");
        //console.log(current1);
        if (current1.length === 0) {
            this.className += " q3-answer-check1";
            //console.log("not found");
        } else {
            //console.log("found");
            //console.log(current1[0].className);
            current1[0].className = current1[0].className.replace(
                " q3-answer-check1",
                " "
            );
            this.className += " q3-answer-check1";
        }
    });
}
var q2container2 = document.getElementById("q3-shapes-container2");
var q2buttons2 = q2container2.getElementsByClassName("q3-answer-name");

for (let j = 0; j < q2buttons2.length; j++) {
    q2buttons2[j].addEventListener("click", function () {
        q2Answer2 = this.innerHTML;

        var current = document.getElementsByClassName("q3-answer-check2");
        if (current.length === 0) {
            this.className += " q3-answer-check2";
        } else {
            current[0].className = current[0].className.replace(
                " q3-answer-check2",
                " "
            );
            this.className += " q3-answer-check2";
        }
    });
}

function q3HandleSubmit() {
    if (
        q2Answer1 === "Ellipse" &&
        q2Answer2 === "Pentagon"
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
