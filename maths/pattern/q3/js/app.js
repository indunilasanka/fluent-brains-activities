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

// Q3 functions start --------------------------------------------
var x = 0;

function dragQ3(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
    if (event.target.parentElement.parentElement.id === "imgCnt") {
        x = x + 1;
    }
}

function allowDropQ3(event) {
    event.preventDefault();
}

function dropQ3(event) {
    event.preventDefault();
    var drop_target = event.target;
    var drag_target_id = event.dataTransfer.getData("target_id");
    var drag_target = document.getElementById(drag_target_id);

    if (drop_target !== null && drag_target !== null) {
        var DropParent = document.getElementById(event.target.id).parentElement;
        var DragParent = document.getElementById(drag_target_id).parentElement;

        DropParent.appendChild(drag_target);

        if (event.target.getAttribute("canswer") === "q2-gs" && x > 0) {
            document.getElementById("greenCnt").appendChild(drop_target);
        } else if (event.target.getAttribute("canswer") === "q2-bc" && x > 0) {
            document.getElementById("redCnt").appendChild(drop_target);
        } else {
            DragParent.appendChild(drop_target);
        }
    }
    x = 0;
}

function submitAnswerQ3() {
    let isCorrect = true;
    const block1 = document.getElementById("q3block1");
    const block2 = document.getElementById("q3block2");
    const block3 = document.getElementById("q3block3");
    const block4 = document.getElementById("q3block4");
    const block5 = document.getElementById("q3block5");

    if (block1.firstElementChild.getAttribute("canswer") !== "q2-gs") {
        isCorrect = false;
    }

    if (block2.firstElementChild.getAttribute("canswer") !== "q2-gs") {
        isCorrect = false;
    }

    if (block3.firstElementChild.getAttribute("canswer") !== "q2-gs") {
        isCorrect = false;
    }

    if (block4.firstElementChild.getAttribute("canswer") !== "q2-gs") {
        isCorrect = false;
    }

    if (block5.firstElementChild.getAttribute("canswer") !== "q2-bc") {
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

// Q3 functions end --------------------------------------------
