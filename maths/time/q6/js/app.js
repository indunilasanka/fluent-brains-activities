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
    const answer = input.value.toLowerCase();
    var isCorrect = checkQ6(id, answer);

    if (isCorrect == true) {
        input.style.color = "#46cd46";

        return true;
    } else if (answer == "") {
        input.style.color = "#FF0000A8";
        input.value = "✖";

        setTimeout(() => {
            input.style.color = "black";
            input.value = "";
        }, 2000);

        return false;
    } else {
        input.style.color = "#FF0000A8";

        setTimeout(() => {
            input.style.color = "black";
        }, 2000);

        return false;
    }
}

function checkQ6(id, answer) {
    if (id == "q6input1") {
        if (answer == "february") {
            return true;
        }
    }

    if (id == "q6input2") {
        if (answer == "29" || answer == "twenty nine") {
            return true;
        }
    }

    if (id == "q6input3") {
        if (answer == "28" || answer == "twenty eight") {
            return true;
        }
    }

    if (id == "q6input4") {
        if (answer == "leap day") {
            return true;
        }
    }

    if (id == "q6input5") {
        if (answer == "7" || answer == "07" || answer == "seven") {
            return true;
        }
    }

    if (id == "q6input6") {
        if (answer == "tuesday") {
            return true;
        }
    }

    if (id == "q6input7") {
        if (answer == "5" || answer == "05" || answer == "five") {
            return true;
        }
    }

    return false;
}

function submitAnswerQ6() {
    var correctCount = 0;
    var isCorrect;
    let ansCorrect = false;

    for (var i = 1; i < 8; i++) {
        isCorrect = checkAnswerQ6("q6input" + i);
        if (isCorrect == true) {
            correctCount++;
        }
    }

    if (correctCount == 7) {
        ansCorrect = true;
    }

    if (ansCorrect) {
        openPopup();
    } else {
        reduceStarCount();
    }
}

// Q6 functions end --------------------------------------------
