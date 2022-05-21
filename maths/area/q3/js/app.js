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

function q3CheckAnswer(id, actual) {
    let input = document.getElementById(id);
    if (input.value === actual) {
      input.style.color = "#46cd46";
    } else {
      input.style.color = "#FF0000A8";
      setTimeout(() => {
        input.style.color = "black";
      }, 2000);
    }
}

function q3CheckMissingValues() {
    let isCorrect = true;
    const input1 = document.getElementById("q3input1");
    const input2 = document.getElementById("q3input2");
    const input3 = document.getElementById("q3input3");
    if (input1.value != "400") {
        if (input1.value === "") {
            input1.style.color = "#FF0000A8";
            input1.value = "✖";
          isCorrect = false;
          setTimeout(() => {
            input1.style.color = "black";
            input1.value = "";
          }, 2000);
        }
        input1.style.color = "#FF0000A8";
        isCorrect = false;
        setTimeout(() => {
            input1.style.color = "black";
        }, 2000);
    }
    if (input2.value != "20") {
        if (input2.value === "") {
            input2.style.color = "#FF0000A8";
            input2.value = "✖";
          isCorrect = false;
          setTimeout(() => {
            input2.style.color = "black";
            input2.value = "";
          }, 2000);
        }
        input2.style.color = "#FF0000A8";
        isCorrect = false;
        setTimeout(() => {
            input2.style.color = "black";
        }, 2000);
    }
    if (input3.value != "420") {
        if (input3.value === "") {
            input3.style.color = "#FF0000A8";
            input3.value = "✖";
          isCorrect = false;
          setTimeout(() => {
            input3.style.color = "black";
            input3.value = "";
          }, 2000);
        }
        input3.style.color = "#FF0000A8";
        isCorrect = false;
        setTimeout(() => {
            input3.style.color = "black";
        }, 2000);
    }
    if (isCorrect) {
        //print alert
        alert("Well done");
      }
}