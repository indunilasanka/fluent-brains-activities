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
function q7checkTotalValue(id, actual) {
    const input = document.getElementById(id);
    if (input.value == actual) {
        input.style.color = '#46cd46';
        dogclap = true;
        setTimeout(() => {
            dogclap = false;
        }, 3000)
    } else {
        input.style.color = '#FF0000A8';
        setTimeout(() => {
            input.style.color = 'black';
        }, 1500);
    }
}

function q66CheckMissingValuesAll(qId) {
    let isCorrect = true;
    if (qId === 'q66') {
        const input3 = document.getElementById('q7input3');
        const input4 = document.getElementById('q7input4');
        const input5 = document.getElementById('q7input5');
        const input6 = document.getElementById('q7input6');
        const input7 = document.getElementById('q7input7');

        if (input3.value != '45') {
            input3.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = "black";
            }, 2000);
        }
        if (input4.value != '19') {
            input4.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = "black";
            }, 2000);
        }
        if (input5.value != '50') {
            input5.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input5.style.color = "black";
            }, 2000);
        }
        if (input6.value != '26') {
            input6.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input6.style.color = "black";
            }, 2000);
        }
        if (input7.value != '24') {
            input7.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input7.style.color = "black";
            }, 2000);
        }

        if (isCorrect) {
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
