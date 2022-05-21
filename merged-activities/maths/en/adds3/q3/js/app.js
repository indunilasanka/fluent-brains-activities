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
function q13checkBox(id) {
    let x = document.getElementById(id);
    if (x.firstElementChild.id === "check") {
        x.firstElementChild.innerHTML = "";
        x.firstElementChild.id = "";
        x.style.color = "";
        x.style.fontWeight = "bold";
        x.style.backgroundColor = '#77c0ff';
    } else {
        x.firstElementChild.innerHTML = "✓";
        x.firstElementChild.id = "check";
        x.style.color = "white";
        x.style.fontWeight = "bold";
        x.style.backgroundColor = '#3B95E0FF';
    }
}

function q13checkAllCheckBoxes() {
    var input1 = document.getElementById('q13input2');
    var input2 = document.getElementById('q13input4');
    var input3 = document.getElementById('q13input1');
    var input4 = document.getElementById('q13input3');

    if (input2.firstElementChild.id === "check" && input1.firstElementChild.id === "check") {
        if (input3.firstElementChild.id === "" && input4.firstElementChild.id === "") {
            openPopup();
        } else {
            let styleClasses = document.getElementById("qpanel").classList;
            styleClasses.add("incorrect-answer");

            setTimeout(() => {
                styleClasses.remove("incorrect-answer");
            }, 1000);
            reduceStarCount();
        }
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
    let score = Number(sessionStorage.getItem("adds3-q1"))
        + Number(sessionStorage.getItem("adds3-q2"));
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
    window.location.replace("/maths/en/adds3/q4/index.html");
}

function calculateScore() {
    let score = (starCount * scoreFactor) / (second + minute * 60 + hour * 3600);
    score = score.toFixed(2);
    sessionStorage.setItem("adds3-q3", score);

    let newScore = Number(sessionStorage.getItem("adds3-q1"))
        + Number(sessionStorage.getItem("adds3-q2")) + Number(score);
    newScore = newScore.toFixed(2);
    document.getElementById("current-score").innerHTML = newScore;
}

function clearSession() {
    sessionStorage.clear();
}

// popup functions end ---------------------------------------------

