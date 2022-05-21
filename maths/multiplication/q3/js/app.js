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

function drag(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function dropQ3(event) {
    event.preventDefault();

    console.log(event.target);

    if (
        event.target.parentElement.className !== "q3-letter-container" ||
        (event.target.parentElement.className === "q3-letter-container" &&
            event.target.className === "q3-answer-box-drop-div")
    ) {
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
}

function q3SubmitAnswer() {
    let isCorrect = true;
    let c, d;

    c = document.getElementsByClassName("q3-dd-grid-ans-box-column-six");
    d = document.getElementsByClassName("q3-dd-grid-ans-box-column-seven");

    for (var i = 0; i < c.length; i++) {
        console.log(c[i].children[0]);
        if (c[i].children[0].getAttribute("canswer") != "6") {
            cansdivs = document.getElementsByClassName("num-6");

            setTimeout(() => {
                if (
                    c[i].children[0].className == "q3-answer-drop-div num-7" ||
                    c[i].children[0].className == "q3-answer-drop-div num-6"
                ) {
                    c[i].children[0].style.backgroundColor = "#38a9ff";
                } else {
                    c[i].children[0].style.backgroundColor = "transparent";
                }

                for (var j = 0; j < cansdivs.length; j++) {
                    cansdivs[j].style.backgroundColor = "#38a9ff";
                }
            }, 1000);

            c[i].children[0].style.backgroundColor = "#FF0000A8";

            for (var j = 0; j < cansdivs.length; j++) {
                if (
                    cansdivs[j].parentElement.className !==
                    "q3-dd-grid-ans-box-column-six"
                ) {
                    cansdivs[j].style.backgroundColor = "#46cd46";
                }
            }
            return;
        }
    }

    for (var i = 0; i < c.length; i++) {
        if (d[i].children[0].getAttribute("canswer") != "7") {
            cansdivs = document.getElementsByClassName("num-7");

            setTimeout(() => {
                d[i].children[0].style.backgroundColor = "white";

                for (var j = 0; j < cansdivs.length; j++) {
                    cansdivs[j].style.backgroundColor = "#38a9ff";
                }
            }, 1000);

            d[i].children[0].style.backgroundColor = "#FF0000A8";

            for (var j = 0; j < cansdivs.length; j++) {
                if (
                    cansdivs[j].parentElement.className !==
                    "q3-dd-grid-ans-box-column-seven"
                ) {
                    cansdivs[j].style.backgroundColor = "#46cd46";
                }
            }
            return;
        }
    }

    if (isCorrect) {
        openPopup();
    } else {
        reduceStarCount();
    }
}

// Q3 functions ends --------------------------------------------
