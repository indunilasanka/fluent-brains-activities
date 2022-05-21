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

// Q6 functions start --------------------------------------------

function checkAnswerQ6(id) {
    const input = document.getElementById(id);
    var answer = input.value.toLowerCase();
    answer = answer.replace(/\s/g, "");

    var isCorrect = checkQ6(id, answer);

    if (isCorrect == true) {
        return true;
    } else if (answer == "") {
        return false;
    } else {
        return false;
    }
}

function checkQ6(id, answer) {
    if (id == "q6input1") {
        if (
            answer == "80" ||
            answer == "80cupcakes" ||
            answer == "eighty" ||
            answer == "eightycupcakes"
        ) {
            return true;
        }
    }

    if (id == "q6input2") {
        if (answer == "saturday") {
            return true;
        }
    }

    if (id == "q6input3") {
        if (
            answer == "140" ||
            answer == "140cupcakes" ||
            answer == "onehundredforty" ||
            answer == "onehundredfortycupcakes"
        ) {
            return true;
        }
    }

    if (id == "q6input4") {
        if (
            answer == "60" ||
            answer == "60cupcakes" ||
            answer == "sixty" ||
            answer == "sixtycupcakes"
        ) {
            return true;
        }
    }

    if (id == "q6input5") {
        if (answer == "false") {
            return true;
        }
    }

    if (id == "q6input6") {
        if (
            answer == "540" ||
            answer == "540cupcakes" ||
            answer == "fivehundredforty" ||
            answer == "fivehundredfortycupcakes"
        ) {
            return true;
        }
    }

    return false;
}

function submitAnswerQ6() {
    var correctCount = 0;
    var isCorrect;
    var mainCorrect = false;

    for (var i = 1; i < 7; i++) {
        isCorrect = checkAnswerQ6("q6input" + i);
        if (isCorrect == true) {
            correctCount++;
        }
    }

    if (correctCount == 6) {
        mainCorrect = true;
    }

    if (mainCorrect) {
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

// Q6 functions end --------------------------------------------
