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

// Q2

var q3ClickedWord_1 = "";
var q3ClickedWord_2 = "";
var q3ClickedWord_3 = "";
var q3ClickedWord_4 = "";
var q3ShouldNotClicked = "";

function q3_clicked_1(event) {
  if (event.target.className == "q3-word1") {
    event.target.className = "q3-word1 q3-word-clicked1";
    q3ClickedWord_1 = event.target.innerText;
  } else if (event.target.className == "q3-word1 q3-word-clicked1") {
    event.target.className = "q3-word1";
    q3ClickedWord_1 = "";
  }
}

function q3_clicked_2(event) {
  if (event.target.className == "q3-word1") {
    event.target.className = "q3-word1 q3-word-clicked1";
    q3ClickedWord_2 = event.target.innerText;
  } else if (event.target.className == "q3-word1 q3-word-clicked1") {
    event.target.className = "q3-word1";
    q3ClickedWord_2 = "";
  }
}

function q3_clicked_3(event) {
  if (event.target.className == "q3-word1") {
    event.target.className = "q3-word1 q3-word-clicked1";
    q3ClickedWord_3 = event.target.innerText;
  } else if (event.target.className == "q3-word1 q3-word-clicked1") {
    event.target.className = "q3-word1";
    q3ClickedWord_3 = "";
  }
}

function q3_clicked_4(event) {
  if (event.target.className == "q3-word1") {
    event.target.className = "q3-word1 q3-word-clicked1";
    q3ClickedWord_4 = event.target.innerText;
  } else if (event.target.className == "q3-word1 q3-word-clicked1") {
    event.target.className = "q3-word1";
    q3ClickedWord_4 = "";
  }
}

function clickedQ3(event) {
  if (event.target.className == "q3-word1") {
    event.target.className = "q3-word1 q3-word-clicked1 kt";
    q3ShouldNotClicked = event.target.innerText;
  } else if (event.target.className == "q3-word1 q3-word-clicked1 kt") {
    event.target.className = "q3-word1";
    q3ShouldNotClicked = "";
  }
}

function q3SubmitAnswer() {
  let state = true;
  let block1 = document.getElementById("q3-word-container1").children;
  let block2 = document.getElementById("q3-word-container2").children;
  let block3 = document.getElementById("q3-word-container3").children;
  let block4 = document.getElementById("q3-word-container4").children;

  if (
    q3ClickedWord_1 === "slowly" &&
    q3ClickedWord_2 === "fast" &&
    q3ClickedWord_3 === "angrily" &&
    q3ClickedWord_4 === "beautifully" &&
    q3ShouldNotClicked == ""
  ) {
    state = true;
  } else {
    state = false;
  }

  for (let i = 0; i < block1.length; i++) {
    if (block1[i].className == "q3-word1 q3-word-clicked1 kt") {
      state = false;
    }
  }
  for (let i = 0; i < block2.length; i++) {
    if (block2[i].className == "q3-word1 q3-word-clicked1 kt") {
      state = false;
    }
  }
  for (let i = 0; i < block3.length; i++) {
    if (block3[i].className == "q3-word1 q3-word-clicked1 kt") {
      state = false;
    }
  }
  for (let i = 0; i < block4.length; i++) {
    if (block4[i].className == "q3-word1 q3-word-clicked1 kt") {
      state = false;
    }
  }

  if (state == true) {
    openPopup();
  } else {
    reduceStarCount();
  }
}
