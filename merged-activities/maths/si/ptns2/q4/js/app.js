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
    let score = Number(sessionStorage.getItem("ptns2-q1"))
        + Number(sessionStorage.getItem("ptns2-q2"))
        + Number(sessionStorage.getItem("ptns2-q3"));
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
    window.location.replace("/maths/si/ptns2/q5/index.html");
}

function calculateScore() {
    let score = (starCount * scoreFactor) / (second + minute * 60 + hour * 3600);
    score = score.toFixed(2);
    sessionStorage.setItem("ptns2-q4", score);

    let newScore = Number(score)
        + Number(sessionStorage.getItem("ptns2-q1"))
        + Number(sessionStorage.getItem("ptns2-q2"))
        + Number(sessionStorage.getItem("ptns2-q3"));
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

// q6 -------------------------------------------------------------------

function submitQ6() {
    const ans1 = document.getElementById("b2h2");
    const ans2 = document.getElementById("b4h4");

    var att1 = ans1.getAttribute("selected");
    var att2 = ans2.getAttribute("selected");

    if (att1 == "true" && att2 == "true") {
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

function setHeight(bar, height) {
    for (var i = 1; i < 7; i++) {
        var barSelect = document.getElementById("b" + bar + "h" + i);
        barSelect.setAttribute("selected", "false");
    }

    const h = document.getElementById("b" + bar + "h" + height);
    h.style.background = "#40af40";
    h.style.border = "1px solid #3B95E0FF";
    h.style.borderBottem = "none";
    h.style.borderTop = "none";
    h.setAttribute("selected", "true");
}

function unsetHeight(bar, height) {
    for (var i = 1; i < 7; i++) {
        var barSelect = document.getElementById("b" + bar + "h" + i);
        barSelect.setAttribute("selected", "false");
    }

    var height2 = height - 1;

    const r = document.getElementById("b" + bar + "h" + height2);
    r.style.background = "transparent";
    r.style.border = "none";

    var height3 = height2 - 1;
    if (height3 > 0) {
        const h = document.getElementById("b" + bar + "h" + height3);
        h.style.background = "#40af40";
        h.style.border = "1px solid #3B95E0FF";
        h.style.borderBottem = "none";
        h.style.borderTop = "none";
        h.setAttribute("selected", "true");
    }
}

var bar2Height = 1;
var bar4Height = 1;

function increaseHeight(bar) {
    if (bar == "bar2" && bar2Height < 7) {
        setHeight("2", bar2Height);
        bar2Height++;
    } else if (bar == "bar4" && bar4Height < 7) {
        setHeight("4", bar4Height);
        bar4Height++;
    }
}

function decreaseHeight(bar) {
    if (bar == "bar2" && bar2Height > 1) {
        unsetHeight("2", bar2Height);
        bar2Height--;
    } else if (bar == "bar4" && bar4Height > 1) {
        unsetHeight("4", bar4Height);
        bar4Height--;
    }
}
