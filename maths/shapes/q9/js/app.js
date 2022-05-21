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
function drag(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    //console.log(event.target);
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

function handleSubmitQ9() {
    let isCorrect = false;
    let block;
    let element;
    let items;
    block = document.getElementById("q9-answer-drop-grid");
    items = block.getElementsByClassName("q9-input-container");
    if (items[0].children[0].getAttribute("canswer") !== "ellipse") {
        //console.log("not found");
        if (items[0].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "ellipse");
            element.style.backgroundColor = "#46cd46";
            items[0].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "transparent";
                items[0].children[0].style.backgroundColor = "transparent";
            }, 2000);
        }
    } else if (items[1].children[0].getAttribute("canswer") !== "pentagon") {
        //console.log("not found");
        if (items[1].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "pentagon");
            element.style.backgroundColor = "#46cd46";
            items[1].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "transparent";
                items[1].children[0].style.backgroundColor = "transparent";
            }, 2000);
        }
    } else if (items[2].children[0].getAttribute("canswer") !== "square") {
        //console.log("not found");
        if (items[2].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "square");
            element.style.backgroundColor = "#46cd46";
            items[2].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "transparent";
                items[2].children[0].style.backgroundColor = "transparent";
            }, 2000);
        }
    } else if (items[3].children[0].getAttribute("canswer") !== "rectangle") {
        //console.log("not found");
        if (items[3].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "rectangle");
            element.style.backgroundColor = "#46cd46";
            items[3].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "transparent";
                items[3].children[0].style.backgroundColor = "transparent";
            }, 2000);
        }
    } else if (items[4].children[0].getAttribute("canswer") !== "triangle") {
        if (items[4].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "triangle");
            element.style.backgroundColor = "#46cd46";
            items[4].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "transparent";
                items[4].children[0].style.backgroundColor = "transparent";
            }, 2000);
        }
    } else {
        isCorrect = true;
    }
    if (isCorrect) {
        alert("well done");
    }
}

function checkTotalValue(id, actual) {
    const input = document.getElementById(id);
    if (input.value == actual) {
        input.style.color = "#46cd46";
        dogclap = true;
    } else {
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
        }, 1500);
    }
}

// popup functions start-------------------------------------------

function setScore() {
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

function switchQuestion() {
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
