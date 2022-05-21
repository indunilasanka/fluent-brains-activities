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

// q12

var q12Clickedletter1 = "";
var q12Clickedletter2 = "";
var q12Clickedletter3 = "";
var q12Clickedletter4 = "";
var q12Clickedletter5 = "";

var container = document.getElementById("q12-letter-container1");
if (container != null) {
  var btns = container.getElementsByClassName("q12-letter");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q12Clickedletter1 = this.innerHTML;

      var current = document.getElementsByClassName("q12-letter-clicked");

      if (current.length === 0) {
        this.className += " q12-letter-clicked";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked",
            ""
          );
          q12Clickedletter1 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked",
            ""
          );

          this.className += " q12-letter-clicked";
        }
      }
    });
  }
}

var container2 = document.getElementById("q12-letter-container2");
if (container2 != null) {
  var btns = container2.getElementsByClassName("q12-letter");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q12Clickedletter2 = this.innerHTML;

      var current = document.getElementsByClassName("q12-letter-clicked1");

      if (current.length === 0) {
        this.className += " q12-letter-clicked1";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked1",
            ""
          );
          q12Clickedletter2 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked1",
            ""
          );

          this.className += " q12-letter-clicked1";
        }
      }
    });
  }
}

var container3 = document.getElementById("q12-letter-container3");
if (container3 != null) {
  var btns = container3.getElementsByClassName("q12-letter");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q12Clickedletter3 = this.innerHTML;

      var current = document.getElementsByClassName("q12-letter-clicked2");

      if (current.length === 0) {
        this.className += " q12-letter-clicked2";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked2",
            ""
          );
          q12Clickedletter3 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked2",
            ""
          );

          this.className += " q12-letter-clicked2";
        }
      }
    });
  }
}

var container4 = document.getElementById("q12-letter-container4");
if (container4 != null) {
  var btns = container4.getElementsByClassName("q12-letter");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q12Clickedletter4 = this.innerHTML;

      var current = document.getElementsByClassName("q12-letter-clicked3");

      if (current.length === 0) {
        this.className += " q12-letter-clicked3";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked3",
            ""
          );
          q12Clickedletter4 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked3",
            ""
          );

          this.className += " q12-letter-clicked3";
        }
      }
    });
  }
}

var container5 = document.getElementById("q12-letter-container5");
if (container5 != null) {
  var btns = container5.getElementsByClassName("q12-letter");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q12Clickedletter5 = this.innerHTML;

      var current = document.getElementsByClassName("q12-letter-clicked4");

      if (current.length === 0) {
        this.className += " q12-letter-clicked4";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked4",
            ""
          );
          q12Clickedletter5 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q12-letter-clicked4",
            ""
          );

          this.className += " q12-letter-clicked4";
        }
      }
    });
  }
}

function q12SubmitAnswer() {
  if (
    q12Clickedletter1 === "i" &&
    q12Clickedletter2 === "o" &&
    q12Clickedletter3 === "t" &&
    q12Clickedletter4 === "p" &&
    q12Clickedletter5 === "g"
  ) {
    openPopup();
  } else {
    reduceStarCount();
  }
}
