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

// Q5 functions start --------------------------------------------

function q5CheckAnswer(id, actual) {
    const input = document.getElementById(id);
    if (input.value !== actual && input.value !== "") {
        setTimeout(() => {
            input.style.color = "black";
        }, 2000);
        input.style.color = "#FF0000A8";
    } else if (input.value !== "") {
        input.style.color = "#46cd46";
    }
}

function q5SubmitAnswer() {
    let isCorrect = true;

    const input1 = document.getElementById("q5input1");
    const input2 = document.getElementById("q5input2");
    const input3 = document.getElementById("q5input3");
    const input4 = document.getElementById("q5input4");
    const input5 = document.getElementById("q5input5");

    // input1 -------------------
    if (input1.value !== "1") {
        isCorrect = false;
        setTimeout(() => {
            input1.style.color = "black";
        }, 2000);
        input1.style.color = "#FF0000A8";
    }
    if (input1.value == "") {
        isCorrect = false;

        setTimeout(() => {
            input1.value = "";
            input1.style.color = "black";
        }, 2000);
        input1.style.color = "#FF0000A8";
        input1.value = "✖";
    }

    // input2 -------------------
    if (input2.value !== "6") {
        isCorrect = false;
        setTimeout(() => {
            input2.style.color = "black";
        }, 2000);
        input2.style.color = "#FF0000A8";
    }
    if (input2.value == "") {
        isCorrect = false;

        setTimeout(() => {
            input2.value = "";
            input2.style.color = "black";
        }, 2000);
        input2.style.color = "#FF0000A8";
        input2.value = "✖";
    }

    // input3 -------------------
    if (input3.value !== "15") {
        isCorrect = false;
        setTimeout(() => {
            input3.style.color = "black";
        }, 2000);
        input3.style.color = "#FF0000A8";
    }
    if (input3.value == "") {
        isCorrect = false;

        setTimeout(() => {
            input3.value = "";
            input3.style.color = "black";
        }, 2000);
        input3.style.color = "#FF0000A8";
        input3.value = "✖";
    }

    // input4 -------------------
    if (input4.value !== "16") {
        isCorrect = false;
        setTimeout(() => {
            input4.style.color = "black";
        }, 2000);
        input4.style.color = "#FF0000A8";
    }
    if (input4.value == "") {
        isCorrect = false;

        setTimeout(() => {
            input4.value = "";
            input4.style.color = "black";
        }, 2000);
        input4.style.color = "#FF0000A8";
        input4.value = "✖";
    }

    // input5 -------------------
    if (input5.value !== "10") {
        isCorrect = false;
        setTimeout(() => {
            input5.style.color = "black";
        }, 2000);
        input5.style.color = "#FF0000A8";
    }
    if (input5.value == "") {
        isCorrect = false;

        setTimeout(() => {
            input5.value = "";
            input5.style.color = "black";
        }, 2000);
        input5.style.color = "#FF0000A8";
        input5.value = "✖";
    }

    if (isCorrect) {
        openPopup();
    } else {
        reduceStarCount();
    }
}

// Q5 functions ends --------------------------------------------
