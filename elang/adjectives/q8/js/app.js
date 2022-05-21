//global variables
let ctx;
let fps = 4;
let button = document.getElementById("clapbtn");
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 350;
let dogclap = false;

let isSwapQuestion = false;
const questionsArray = ["q3", "q14", "q4", "q5", "q15", "q13", "q6", "q12"];
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
    document.getElementById("timerhrs").innerText = returnData(hour);
    document.getElementById("timermin").innerText = returnData(minute);
    document.getElementById("timersec").innerText = returnData(second);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`;
}

/* stop the timer */
function pauseTimer() {
    clearInterval(cron);
}

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

function playTitleSin(text) {
    responsiveVoice.speak(text, "Sinhala", {volume: 2, rate: 1, pitch: 1});
}

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


// LOGIC

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

// q8

var q8ClickedWord_1 = "";
var q8ClickedWord_2 = "";
var q8ClickedWord_3 = "";
var q8ClickedWord_4 = "";
var q8ClickedWord_5 = "";
var q8ClickedWord_6 = "";
var q8ClickedWord_8 = "";
var q8ClickedWord_9 = "";

var q8ShouldNotClicked = "";

function q8_clicked_1(event) {
    if (event.target.className == "q8-letter-box") {
        event.target.className = "q8-letter-box q8-word-clicked1";
        q8ClickedWord_1 = event.target.innerText;
    } else if (event.target.className == "q8-letter-box q8-word-clicked1") {
        event.target.className = "q8-letter-box";
        q8ClickedWord_1 = "";
    }
}

function q8_clicked_2(event) {
    if (event.target.className == "q8-letter-box") {
        event.target.className = "q8-letter-box q8-word-clicked2";
        q8ClickedWord_2 = event.target.innerText;
    } else if (event.target.className == "q8-letter-box q8-word-clicked2") {
        event.target.className = "q8-letter-box";
        q8ClickedWord_2 = "";
    }
}

function q8_clicked_3(event) {
    if (event.target.className == "q8-letter-box") {
        event.target.className = "q8-letter-box q8-word-clicked3";
        q8ClickedWord_3 = event.target.innerText;
    } else if (event.target.className == "q8-letter-box q8-word-clicked3") {
        event.target.className = "q8-letter-box";
        q8ClickedWord_3 = "";
    }
}

function q8_clicked_4(event) {
    if (event.target.className == "q8-letter-box") {
        event.target.className = "q8-letter-box q8-word-clicked4";
        q8ClickedWord_4 = event.target.innerText;
    } else if (event.target.className == "q8-letter-box q8-word-clicked4") {
        event.target.className = "q8-letter-box";
        q8ClickedWord_4 = "";
    }
}

function q8_clicked_5(event) {
    if (event.target.className == "q8-letter-box") {
        event.target.className = "q8-letter-box q8-word-clicked5";
        q8ClickedWord_5 = event.target.innerText;
    } else if (event.target.className == "q8-letter-box q8-word-clicked5") {
        event.target.className = "q8-letter-box";
        q8ClickedWord_5 = "";
    }
}

function q8_clicked_6(event) {
    if (event.target.className == "q8-letter-box") {
        event.target.className = "q8-letter-box q8-word-clicked6";
        q8ClickedWord_6 = event.target.innerText;
    } else if (event.target.className == "q8-letter-box q8-word-clicked6") {
        event.target.className = "q8-letter-box";
        q8ClickedWord_6 = "";
    }
}

function q8_clicked_7(event) {
    if (event.target.className == "q8-letter-box") {
        event.target.className = "q8-letter-box q8-word-clicked7";
        q8ClickedWord_7 = event.target.innerText;
    } else if (event.target.className == "q8-letter-box q8-word-clicked7") {
        event.target.className = "q8-letter-box";
        q8ClickedWord_7 = "";
    }
}

function q8_clicked_8(event) {
    if (event.target.className == "q8-letter-box") {
        event.target.className = "q8-letter-box q8-word-clicked8";
        q8ClickedWord_8 = event.target.innerText;
    } else if (event.target.className == "q8-letter-box q8-word-clicked8") {
        event.target.className = "q8-letter-box";
        q8ClickedWord_8 = "";
    }
}

function clickedQ8(event) {
    if (event.target.className == "q8-letter-box") {
        event.target.className = "q8-letter-box q8-word-clicked kt";
        q8ShouldNotClicked = event.target.innerText;
    } else if (event.target.className == "q8-letter-box q8-word-clicked kt") {
        event.target.className = "q8-letter-box";
        q8ShouldNotClicked = "";
    }
}

function q8SubmitAnswer() {
    let state = true;
    let block1 = document.getElementById("q8-letter-cnt").children;

    if (
        q8ClickedWord_1 === "r" &&
        q8ClickedWord_2 === "e" &&
        q8ClickedWord_3 === "d" &&
        q8ClickedWord_4 === "b" &&
        q8ClickedWord_5 === "l" &&
        q8ClickedWord_6 === "a" &&
        q8ClickedWord_7 === "c" &&
        q8ClickedWord_8 === "k" &&
        q8ShouldNotClicked == ""
    ) {
        state = true;
    } else {
        state = false;
    }

    for (let i = 0; i < block1.length; i++) {
        if (block1[i].className == "q8-letter-box q8-word-clicked kt") {
            state = false;
        }
    }

    if (state == true) {
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
