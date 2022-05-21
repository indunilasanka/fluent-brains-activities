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
function q1Checked(event) {
    if (event.target.id == "q1Circle3Cnt") {
        if (event.target.firstElementChild.id == "q1Circle3") {
            event.target.style.backgroundColor = "#2d7eda";
            event.target.firstElementChild.id = "q1Circle3Checked";
        } else {
            event.target.style.backgroundColor = "#99cefc";
            event.target.firstElementChild.id = "q1Circle3";
        }
    } else if (
        event.target.id == "q1Circle3" ||
        event.target.id == "q1Circle3Checked"
    ) {
        if (event.target.id == "q1Circle3") {
            event.target.parentElement.style.backgroundColor = "#2d7eda";
            event.target.id = "q1Circle3Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#99cefc";
            event.target.id = "q1Circle3";
        }
    }

    if (event.target.id == "q1Hexagon1Cnt") {
        if (event.target.firstElementChild.id == "q1Hexagon1") {
            event.target.style.backgroundColor = "#2d7eda";
            event.target.firstElementChild.id = "q1Hexagon1Checked";
        } else {
            event.target.style.backgroundColor = "#99cefc";
            event.target.firstElementChild.id = "q1Hexagon1";
        }
    } else if (
        event.target.id == "q1Hexagon1" ||
        event.target.id == "q1Hexagon1Checked"
    ) {
        if (event.target.id == "q1Hexagon1") {
            event.target.parentElement.style.backgroundColor = "#2d7eda";
            event.target.id = "q1Hexagon1Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#99cefc";
            event.target.id = "q1Hexagon1";
        }
    }

    if (event.target.id == "q1SquareCnt") {
        if (event.target.firstElementChild.id == "q1Square") {
            event.target.style.backgroundColor = "#2d7eda";
            event.target.firstElementChild.id = "q1SquareChecked";
        } else {
            event.target.style.backgroundColor = "#99cefc";
            event.target.firstElementChild.id = "q1Square";
        }
    } else if (
        event.target.id == "q1Square" ||
        event.target.id == "q1SquareChecked"
    ) {
        if (event.target.id == "q1Square") {
            event.target.parentElement.style.backgroundColor = "#2d7eda";
            event.target.id = "q1SquareChecked";
        } else {
            event.target.parentElement.style.backgroundColor = "#99cefc";
            event.target.id = "q1Square";
        }
    }


    if (event.target.id == "q1Square1Cnt") {
        if (event.target.firstElementChild.id == "q1Square1") {
            event.target.style.backgroundColor = "#2d7eda";
            event.target.firstElementChild.id = "q1Square1Checked";
        } else {
            event.target.style.backgroundColor = "#99cefc";
            event.target.firstElementChild.id = "q1Square1";
        }
    } else if (
        event.target.id == "q1Square1" ||
        event.target.id == "q1Square1Checked"
    ) {
        if (event.target.id == "q1Square1") {
            event.target.parentElement.style.backgroundColor = "#2d7eda";
            event.target.id = "q1Square1Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#99cefc";
            event.target.id = "q1Square1";
        }
    }

    if (event.target.id == "q1Hexagon5Cnt") {
        if (event.target.firstElementChild.id == "q1Hexagon5") {
            event.target.style.backgroundColor = "#2d7eda";
            event.target.firstElementChild.id = "q1Hexagon5Checked";
        } else {
            event.target.style.backgroundColor = "#99cefc";
            event.target.firstElementChild.id = "q1Hexagon5";
        }
    } else if (
        event.target.id == "q1Hexagon5" ||
        event.target.id == "q1Hexagon5Checked"
    ) {
        if (event.target.id == "q1Hexagon5") {
            event.target.parentElement.style.backgroundColor = "#2d7eda";
            event.target.id = "q1Hexagon5Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#99cefc";
            event.target.id = "q1Hexagon5";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Hexagon2Cnt") {
        if (event.target.firstElementChild.id == "q1Hexagon2") {
            event.target.style.backgroundColor = "#2d7eda";
            event.target.firstElementChild.id = "q1Hexagon2Checked";
        } else {
            event.target.style.backgroundColor = "#99cefc";
            event.target.firstElementChild.id = "q1Hexagon2";
        }
    } else if (
        event.target.id == "q1Hexagon2" ||
        event.target.id == "q1Hexagon2Checked"
    ) {
        if (event.target.id == "q1Hexagon2") {
            event.target.parentElement.style.backgroundColor = "#2d7eda";
            event.target.id = "q1Hexagon2Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#99cefc";
            event.target.id = "q1Hexagon2";
        }
    }

    if (event.target.id == "q1Hexagon3Cnt") {
        if (event.target.firstElementChild.id == "q1Hexagon3") {
            event.target.style.backgroundColor = "#2d7eda";
            event.target.firstElementChild.id = "q1Hexagon3Checked";
        } else {
            event.target.style.backgroundColor = "#99cefc";
            event.target.firstElementChild.id = "q1Hexagon3";
        }
    } else if (
        event.target.id == "q1Hexagon3" ||
        event.target.id == "q1Hexagon3Checked"
    ) {
        if (event.target.id == "q1Hexagon3") {
            event.target.parentElement.style.backgroundColor = "#2d7eda";
            event.target.id = "q1Hexagon3Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#99cefc";
            event.target.id = "q1Hexagon3";
        }
    }

    if (event.target.id == "q1Star2Cnt") {
        if (event.target.firstElementChild.id == "q1Star2") {
            event.target.style.backgroundColor = "#2d7eda";
            event.target.firstElementChild.id = "q1Star2Checked";
        } else {
            event.target.style.backgroundColor = "#99cefc";
            event.target.firstElementChild.id = "q1Star2";
        }
    } else if (
        event.target.id == "q1Star2" ||
        event.target.id == "q1Star2Checked"
    ) {
        if (event.target.id == "q1Star2") {
            event.target.parentElement.style.backgroundColor = "#2d7eda";
            event.target.id = "q1Star2Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#99cefc";
            event.target.id = "q1Star2";
        }
    }
}
function submitQ1() {
    var Circle3 = document.getElementById("q1Circle3Cnt").firstElementChild.id;
    var Hexagon1 = document.getElementById("q1Hexagon1Cnt").firstElementChild.id;
    var Square = document.getElementById("q1SquareCnt").firstElementChild.id;
    var Square1 = document.getElementById("q1Square1Cnt").firstElementChild.id;

    var Hexagon5 = document.getElementById("q1Hexagon5Cnt").firstElementChild.id;
    var Hexagon2 = document.getElementById("q1Hexagon2Cnt").firstElementChild.id;
    var Hexagon3 = document.getElementById("q1Hexagon3Cnt").firstElementChild.id;
    var Star2 = document.getElementById("q1Star2Cnt").firstElementChild.id;

    if (
        Circle3 !== "q1Circle3Checked" &&
        Hexagon1 == "q1Hexagon1Checked" &&
        Square != "q1SquareChecked" &&
        Square1 == "q1Square1Checked" &&
        Hexagon5 == "q1Hexagon5Checked" &&
        Hexagon2 != "q1Hexagon2Checked" &&
        Hexagon3 == "q1Hexagon3Checked" &&
        Star2 == "q1Star2Checked"
    ) {
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
