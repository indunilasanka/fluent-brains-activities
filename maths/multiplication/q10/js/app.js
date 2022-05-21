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
    "q11",
    "q12",
    "q13",
    "q14",
    "q15",
    "q16",
    "q17",
    "q18",
    "q19",
    "q20",
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

// Q10 functions start --------------------------------------------

function drag(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    if (
        event.target.parentElement.className !== "q10-letter-container" ||
        (event.target.parentElement.className === "q10-letter-container" &&
            event.target.className === "q10-answer-box-drop-div")
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

function submitAnswerQ10() {
    let isCorrect = true;

    let ansTrack2 = "Two";
    let cansdiv;
    let c = [];
    let a;
    let b;

    a = document.getElementById("two");
    b = document.getElementById("six");
    e = document.getElementById("twelve");

    c.push(a);
    c.push(b);
    c.push(e);

    for (var i = 0; i < c.length; i++) {
        if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
            cansdiv = document.getElementById("q4" + ansTrack2);

            setTimeout(() => {
                console.log(c[i].children[0].innerHTML);
                if (c[i].children[0].innerHTML !== "") {
                    c[i].children[0].className = "q10-check-answer";
                } else {
                    c[i].children[0].className = "q10-check-back-answer";
                }

                cansdiv.className = "q10-answer-drop-div";
            }, 1000);

            c[i].children[0].className = "q10-red-ball";
            cansdiv.className = "q10-answer-drop-div-green";

            isCorrect = false;

            reduceStarCount();

            return;
        } else {
            if (ansTrack2 == "Two") {
                ansTrack2 = "Six";
            } else if (ansTrack2 == "Six") {
                ansTrack2 = "Twelve";
            }
        }
    }

    if (isCorrect) {
        openPopup();
    } else {
        reduceStarCount();
    }
}

// Q10 functions ends --------------------------------------------
