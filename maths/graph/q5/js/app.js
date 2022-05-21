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

function checkAnswerQ5(id) {
    const input = document.getElementById(id);
    var answer = input.value.toLowerCase();
    answer = answer.replace(/\s/g, "");

    var isCorrect = checkQ5(id, answer);

    if (isCorrect == true) {
        return true;
    } else if (answer == "") {
        return false;
    } else {
        return false;
    }
}

function checkQ5(id, answer) {
    if (id == "q5input1") {
        if (answer == "cloudy") {
            return true;
        }
    }

    if (id == "q5input2") {
        if (answer == "stormy") {
            return true;
        }
    }

    if (id == "q5input3") {
        if (
            answer == "4" ||
            answer == "04" ||
            answer == "4days" ||
            answer == "04days" ||
            answer == "four" ||
            answer == "fourdays"
        ) {
            return true;
        }
    }

    if (id == "q5input4") {
        if (
            answer == "9" ||
            answer == "09" ||
            answer == "9days" ||
            answer == "09days" ||
            answer == "nine" ||
            answer == "ninedays"
        ) {
            return true;
        }
    }

    if (id == "q5input5") {
        if (
            answer == "2" ||
            answer == "02" ||
            answer == "2days" ||
            answer == "02days" ||
            answer == "two" ||
            answer == "twodays"
        ) {
            return true;
        }
    }

    if (id == "q5input6") {
        if (
            answer == "18" ||
            answer == "18days" ||
            answer == "eighteen" ||
            answer == "eighteendays"
        ) {
            return true;
        }
    }

    if (id == "q5input7") {
        if (answer == "yes" || answer == "right") {
            return true;
        }
    }

    if (id == "q5input8") {
        if (
            answer == "31" ||
            answer == "31days" ||
            answer == "thirtyone" ||
            answer == "thirtyonedays"
        ) {
            return true;
        }
    }

    return false;
}

function submitAnswerQ5() {
    var correctCount = 0;
    var isCorrect;
    var mainCorrect = false;

    for (var i = 1; i < 9; i++) {
        isCorrect = checkAnswerQ5("q5input" + i);
        if (isCorrect == true) {
            correctCount++;
        }
    }

    if (correctCount == 8) {
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

// Q5 functions end --------------------------------------------
