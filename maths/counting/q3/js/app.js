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
function handleCountAnswerClick(txt, id, aid) {
    let currentQNumber;
    const answerButton = document.getElementById(aid);
    const answer = document.getElementById(id);
    if (id.length === 3) {
        currentQNumber = parseInt(id.substr(2, 1));
    } else {
        currentQNumber = parseInt(id.substr(2, 2));
    }

    const nextQnumber = currentQNumber + 1;
    const nextQ = "cq" + nextQnumber;

    if (
        (currentQNumber === 1 && txt === "one") ||
        (currentQNumber === 2 && txt === "two") ||
        (currentQNumber === 3 && txt === "three") ||
        (currentQNumber === 4 && txt === "four") ||
        (currentQNumber === 5 && txt === "five") ||
        (currentQNumber === 6 && txt === "six") ||
        (currentQNumber === 7 && txt === "seven") ||
        (currentQNumber === 8 && txt === "eight") ||
        (currentQNumber === 9 && txt === "nine")
    ) {
        answer.className = "count-question-hide";
        const nextQElement = document.getElementById(nextQ);
        nextQElement.className = "count-question-display";
        setTimeout(() => {
            playSound(nextQnumber);
        }, 500);
    } else if (currentQNumber === 10 && txt === "ten") {
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
