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

// q1

function checkMissingLetter(id, actual) {
  const input = document.getElementById(id);
  if (
    input.value.toUpperCase() !== actual.toUpperCase() &&
    input.value !== ""
  ) {
    setTimeout(() => {
      input.style.color = "black";
    }, 2000);
    input.style.color = "#FF0000A8";
  } else if (input.value !== "") {
    input.style.color = "#46cd46";
  }
}

function checkMissingLetter2(id, actual, actual2) {
  const input = document.getElementById(id);
  if (
    input.value.toUpperCase() !== actual.toUpperCase() &&
    input.value.toUpperCase() !== actual2.toUpperCase() &&
    input.value !== ""
  ) {
    setTimeout(() => {
      input.style.color = "black";
    }, 2000);
    input.style.color = "#FF0000A8";
  } else if (input.value !== "") {
    input.style.color = "#46cd46";
  }
}

function checkMissingLetter3(id, actual, actual2, actual3) {
  const input = document.getElementById(id);
  if (
    input.value.toUpperCase() !== actual.toUpperCase() &&
    input.value.toUpperCase() !== actual2.toUpperCase() &&
    input.value.toUpperCase() !== actual3.toUpperCase() &&
    input.value !== ""
  ) {
    setTimeout(() => {
      input.style.color = "black";
    }, 2000);
    input.style.color = "#FF0000A8";
  } else if (input.value !== "") {
    input.style.color = "#46cd46";
  }
}
function q2SubmitAnswer(qId) {
  let isCorrect = true;

  if (qId === "q2") {
    const input6 = document.getElementById("q2input6");
    const input7 = document.getElementById("q2input7");
    const input8 = document.getElementById("q2input8");
    const input9 = document.getElementById("q2input9");

    if (
      input6.value.toUpperCase() !== "Well".toUpperCase() &&
      input6.value.toUpperCase() !== "Fast".toUpperCase()
    ) {
      isCorrect = false;
      setTimeout(() => {
        input6.style.color = "black";
      }, 2000);
      input6.style.color = "#FF0000A8";
    }
    if (input6.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input6.value = "";
        input6.style.color = "black";
      }, 2000);
      input6.style.color = "#FF0000A8";
      input6.value = "✖";
    }
    if (
      input7.value.toUpperCase() !== "Well".toUpperCase() &&
      input7.value.toUpperCase() !== "Fast".toUpperCase()
    ) {
      isCorrect = false;
      setTimeout(() => {
        input7.style.color = "black";
      }, 2000);
      input7.style.color = "#FF0000A8";
    }
    if (input7.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input7.value = "";
        input7.style.color = "black";
      }, 2000);
      input7.style.color = "#FF0000A8";
      input7.value = "✖";
    }
    if (input6.value == input7.value) {
      isCorrect = false;
      setTimeout(() => {
        input7.style.color = "black";
      }, 2000);
      input7.style.color = "#FF0000A8";
    }
    if (
      input8.value.toUpperCase() !== "However".toUpperCase() &&
      input8.value.toUpperCase() !== "Besides".toUpperCase()
    ) {
      isCorrect = false;
      setTimeout(() => {
        input8.style.color = "black";
      }, 2000);
      input8.style.color = "#FF0000A8";
    }
    if (input8.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input8.value = "";
        input8.style.color = "black";
      }, 2000);
      input8.style.color = "#FF0000A8";
      input8.value = "✖";
    }
    if (
      input9.value.toUpperCase() !== "However".toUpperCase() &&
      input9.value.toUpperCase() !== "Besides".toUpperCase()
    ) {
      isCorrect = false;
      setTimeout(() => {
        input9.style.color = "black";
      }, 2000);
      input9.style.color = "#FF0000A8";
    }
    if (input9.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input9.value = "";
        input9.style.color = "black";
      }, 2000);
      input9.style.color = "#FF0000A8";
      input9.value = "✖";
    }

    if (input8.value == input9.value) {
      isCorrect = false;
      setTimeout(() => {
        input9.style.color = "black";
      }, 2000);
      input9.style.color = "#FF0000A8";
    }
  }

  if (isCorrect) {
    openPopup();
  } else {
    reduceStarCount();
  }
}
