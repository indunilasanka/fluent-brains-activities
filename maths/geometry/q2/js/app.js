// global variables start-------------------------------------------

// let ctx;
// let fps = 4;
// let button = document.getElementById("clapbtn");
// const CANVAS_WIDTH = 1920;
// const CANVAS_HEIGHT = 350;
// let dogclap = false;

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

/* timer */
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

// global variables end-------------------------------------------

// Timer functions start ----------------------------------------

window.addEventListener("load", startTimer);

function startTimer() {
    pauseTimer();
    cron = setInterval(() => {
        timer();
    }, 10);
}

/* -- start the timer -- */
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

/* -- stop the timer -- */
function pauseTimer() {
    clearInterval(cron);
}

function resetTime() {
    second = 0;
    minute = 0;
    hour = 0;
}

// Timer functions end -------------------------------------------

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

// sound functions start -------------------------------------------

function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
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

// sound functions end -------------------------------------------

// Q2 functions start --------------------------------------------

let array = [];
var q2Answer1 = "";
var q2Answer2 = "";
var q2Answer3 = "";
var q2Answer4 = "";
var q2Answer5 = "";

var q2container1 = document.getElementById("q1-block-1");
var q2buttons1 = q2container1.getElementsByClassName("q2-button");
for (var i = 0; i < q2buttons1.length; i++) {
    q2buttons1[i].addEventListener("click", function () {
        q2Answer1 = this.innerHTML;
        // console.log(q2Answer1);
        array.push(q2Answer1);
        var current1 = document.getElementsByClassName("answer-check1");
        if (current1.length === 0) {
            this.className += " answer-check1";
        } else {
            current1[0].className = current1[0].className.replace(
                " answer-check1",
                " "
            );
            this.className += " answer-check1";
        }
    });
}
// second block ---------------------------------------
var q2container2 = document.getElementById("q1-block-2");
var q2buttons2 = q2container2.getElementsByClassName("q2-button");
for (var i = 0; i < q2buttons2.length; i++) {
    q2buttons2[i].addEventListener("click", function () {
        q2Answer2 = this.innerHTML;
        // console.log(q2Answer2);
        array.push(q2Answer2);
        var current1 = document.getElementsByClassName("answer-check2");
        if (current1.length === 0) {
            this.className += " answer-check2";
        } else {
            current1[0].className = current1[0].className.replace(
                " answer-check2",
                " "
            );
            this.className += " answer-check2";
        }
    });
}

// third block ------------------------------------
var q2container3 = document.getElementById("q1-block-3");
var q2buttons3 = q2container3.getElementsByClassName("q2-button");
for (var i = 0; i < q2buttons3.length; i++) {
    q2buttons3[i].addEventListener("click", function () {
        q2Answer3 = this.innerHTML;
        // console.log(q2Answer3);
        array.push(q2Answer3);
        var current1 = document.getElementsByClassName("answer-check3");
        if (current1.length === 0) {
            this.className += " answer-check3";
        } else {
            current1[0].className = current1[0].className.replace(
                " answer-check3",
                " "
            );
            this.className += " answer-check3";
        }
    });
}

// fourth block -------------------------------------
var q2container4 = document.getElementById("q1-block-4");
var q2buttons4 = q2container4.getElementsByClassName("q2-button");
for (var i = 0; i < q2buttons4.length; i++) {
    q2buttons4[i].addEventListener("click", function () {
        q2Answer4 = this.innerHTML;
        // console.log(q2Answer4);
        array.push(q2Answer4);
        var current1 = document.getElementsByClassName("answer-check4");
        if (current1.length === 0) {
            this.className += " answer-check4";
        } else {
            current1[0].className = current1[0].className.replace(
                " answer-check4",
                " "
            );
            this.className += " answer-check4";
        }
    });
}

//fifth block --------------------------------------
var q2container5 = document.getElementById("q1-block-5");
var q2buttons5 = q2container5.getElementsByClassName("q2-button");
for (var i = 0; i < q2buttons5.length; i++) {
    q2buttons5[i].addEventListener("click", function () {
        q2Answer5 = this.innerHTML;
        // console.log(q2Answer5);
        array.push(q2Answer5);
        var current1 = document.getElementsByClassName("answer-check5");
        if (current1.length === 0) {
            this.className += " answer-check5";
        } else {
            current1[0].className = current1[0].className.replace(
                " answer-check5",
                " "
            );
            this.className += " answer-check5";
        }
    });
}

function submitAnswerQ2() {
    const input1 = document.getElementById("q2input2");
    const input2 = document.getElementById("q2input3");
    const input3 = document.getElementById("q2input6");
    const input4 = document.getElementById("q2input7");
    const input5 = document.getElementById("q2input10");
    let isCorrect = false;

    if (q2Answer1 !== "True" && q2Answer1 !== "") {
        input1.style.backgroundColor = "#FF0000A8";

        setTimeout(() => {
            input1.removeAttribute("style");
        }, 2000);
    } else if (q2Answer2 !== "False" && q2Answer2 !== "") {
        input2.style.backgroundColor = "#FF0000A8";

        setTimeout(() => {
            input2.removeAttribute("style");
        }, 2000);
    } else if (q2Answer3 !== "True" && q2Answer3 !== "") {
        input3.style.backgroundColor = "#FF0000A8";

        setTimeout(() => {
            input3.removeAttribute("style");
        }, 2000);
    } else if (q2Answer4 !== "False" && q2Answer4 !== "") {
        input4.style.backgroundColor = "#FF0000A8";

        setTimeout(() => {
            input4.removeAttribute("style");
        }, 2000);
    } else if (q2Answer5 !== "True" && q2Answer5 !== "") {
        input5.style.backgroundColor = "#FF0000A8";

        setTimeout(() => {
            input5.removeAttribute("style");
        }, 2000);
    } else {
        if (
            q2Answer1 === "True" &&
            q2Answer2 === "False" &&
            q2Answer3 === "True" &&
            q2Answer4 === "False" &&
            q2Answer5 === "True"
        ) {
            isCorrect = true;
        }
    }

    if (isCorrect) {
        openPopup();
    } else {
        reduceStarCount();
    }
}

// Q2 functions end --------------------------------------------
