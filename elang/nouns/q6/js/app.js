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

function dropQ5(event) {
  event.preventDefault();

  if (
    (event.target.parentElement.className !== "q5-img-box" &&
      event.target.parentElement.className !== "q5-answer-drop-div") ||
    (event.target.parentElement.className === "q5-img-box" &&
      event.target.className === "q5-answer-box-drop-div") ||
    (event.target.parentElement.parentElement.className ===
      "q5-dd-grid-ans-box-column" &&
      event.target.className === "p-text")
  ) {
    var drop_target;
    if (event.target.className == "p-text") {
      drop_target = event.target.parentElement;
    } else {
      drop_target = event.target;
    }

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

// q6

function q6SubmitAnswer() {
  let isCorrect = true;

  let d;
  let c;

  c = document.getElementsByClassName("q6-dd-grid-ans-box-column-living");
  d = document.getElementsByClassName("q6-dd-grid-ans-box-column-bath");
  for (var i = 0; i < c.length; i++) {
    if (c[i].children[0].getAttribute("canswer") != "Living") {
      reduceStarCount();
      cansdivs = document.getElementsByClassName("Living");
      setTimeout(() => {
        if (
          c[i].children[0].className == "q6-answer-drop-div Bath" ||
          c[i].children[0].className == "q6-answer-drop-div Living"
        ) {
          c[i].style.backgroundColor = "transparent";
        } else {
          c[i].style.backgroundColor = "transparent";
        }

        for (var j = 0; j < cansdivs.length; j++) {
          cansdivs[j].parentElement.style.backgroundColor = "transparent";
        }
      }, 1000);

      c[i].style.backgroundColor = "#FF0000A8";

      // cansdiv.style.backgroundColor = "#46cd46";
      for (var j = 0; j < cansdivs.length; j++) {
        if (
          cansdivs[j].parentElement.className !==
          "q6-dd-grid-ans-box-column-living"
        ) {
          cansdivs[j].parentElement.style.backgroundColor = "#46cd46";
        }
      }
      return;
    }
  }

  for (var i = 0; i < c.length; i++) {
    if (d[i].children[0].getAttribute("canswer") != "Bath") {
      reduceStarCount();
      cansdivs = document.getElementsByClassName("Bath");
      setTimeout(() => {
        d[i].style.backgroundColor = "transparent";

        for (var j = 0; j < cansdivs.length; j++) {
          cansdivs[j].parentElement.style.backgroundColor = "transparent";
        }
      }, 1000);

      d[i].style.backgroundColor = "#FF0000A8";

      // cansdiv.style.backgroundColor = "#46cd46";
      for (var j = 0; j < cansdivs.length; j++) {
        if (
          cansdivs[j].parentElement.className !==
          "q6-dd-grid-ans-box-column-bath"
        ) {
          cansdivs[j].parentElement.style.backgroundColor = "#46cd46";
        }
      }
      return;
    }
  }

  if (isCorrect) {
    openPopup();
    // swapNextQuestion();
  }
}
