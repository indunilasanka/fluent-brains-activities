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
    "q4",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "q9",
    "q40",
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
    let score = Number(sessionStorage.getItem("ptns1-q1"));
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
    window.location.replace("/maths/si/ptns1/q3/index.html");
}

function calculateScore() {
    let score = (starCount * scoreFactor) / (second + minute * 60 + hour * 3600);
    score = score.toFixed(2);
    sessionStorage.setItem("ptns1-q2", score);

    let newScore = Number(sessionStorage.getItem("ptns1-q1")) + Number(score);
    newScore = newScore.toFixed(2);
    document.getElementById("current-score").innerHTML = newScore;
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

// q4 functions start --------------------------------------------

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

function submitAnswerq4() {
    let isCorrect = true;

    const p3block7 = document.getElementById("p3block7").children;
    if (p3block7[0].getAttribute("canswer") !== "p3-2") {
        isCorrect = false;
    }

    const p3block8 = document.getElementById("p3block8").children;
    if (p3block8[0].getAttribute("canswer") !== "p3-1") {
        isCorrect = false;
    }

    const p4block7 = document.getElementById("p4block7").children;
    if (p4block7[0].getAttribute("canswer") !== "p4-4") {
        isCorrect = false;
    }

    const p4block8 = document.getElementById("p4block8").children;
    if (p4block8[0].getAttribute("canswer") !== "p4-3") {
        isCorrect = false;
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

// q4 functions end --------------------------------------------
