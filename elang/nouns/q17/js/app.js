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

// function checkMissingLetter(id, actual) {
//   const input = document.getElementById(id);
//   if (
//     input.value.toUpperCase() !== actual.toUpperCase() &&
//     input.value !== ""
//   ) {
//     setTimeout(() => {
//       input.style.color = "black";
//     }, 2000);
//     input.style.color = "#FF0000A8";
//   } else if (input.value !== "") {
//     input.style.color = "#46cd46";
//   }
// }

// function q14SubmitAnswer(qId) {
//   let isCorrect = true;

//   const input1 = document.getElementById("q14input1");
//   const input2 = document.getElementById("q14input2");
//   const input3 = document.getElementById("q14input3");

//   if (input1.value.toUpperCase() !== "who".toUpperCase()) {
//     isCorrect = false;
//     setTimeout(() => {
//       input1.style.color = "black";
//     }, 2000);
//     input1.style.color = "#FF0000A8";
//   }
//   if (input1.value == "") {
//     isCorrect = false;

//     setTimeout(() => {
//       input1.value = "";
//       input1.style.color = "black";
//     }, 2000);
//     input1.style.color = "#FF0000A8";
//     input1.value = "✖";
//   }

//   if (input2.value.toUpperCase() !== "which".toUpperCase()) {
//     isCorrect = false;
//     setTimeout(() => {
//       input2.style.color = "black";
//     }, 2000);
//     input2.style.color = "#FF0000A8";
//   }
//   if (input2.value == "") {
//     isCorrect = false;

//     setTimeout(() => {
//       input2.value = "";
//       input2.style.color = "black";
//     }, 2000);
//     input2.style.color = "#FF0000A8";
//     input2.value = "✖";
//   }

//   if (input3.value.toUpperCase() !== "whose".toUpperCase()) {
//     isCorrect = false;
//     setTimeout(() => {
//       input3.style.color = "black";
//     }, 2000);
//     input3.style.color = "#FF0000A8";
//   }
//   if (input3.value == "") {
//     isCorrect = false;

//     setTimeout(() => {
//       input3.value = "";
//       input3.style.color = "black";
//     }, 2000);
//     input3.style.color = "#FF0000A8";
//     input3.value = "✖";
//   }

//   if (isCorrect) {
//     openPopup();
//   }
// }

function q17SubmitAnswer() {
  if (
    q17Clickedword1 === "Tom" &&
    q17Clickedword2 === "Girl" &&
    q17Clickedword3 === "Aunt"
  ) {
    openPopup();
  } else {
    reduceStarCount();
  }
}

// q17

var q17Clickedword1 = "";
var container = document.getElementById("q17-word-container1");
if (container != null) {
  var btns = container.getElementsByClassName("q17-word1");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q17Clickedword1 = this.innerHTML;

      var current = document.getElementsByClassName("q17-word-clicked");

      if (current.length === 0) {
        this.className += " q17-word-clicked";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q17-word-clicked",
            ""
          );
          q17Clickedword1 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q17-word-clicked",
            ""
          );

          this.className += " q17-word-clicked";
        }
      }
    });
  }
}

var q17Clickedword2 = "";
var container = document.getElementById("q17-word-container2");
if (container != null) {
  var btns = container.getElementsByClassName("q17-word1");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q17Clickedword2 = this.innerHTML;

      var current = document.getElementsByClassName("q17-word-clicked1");

      if (current.length === 0) {
        this.className += " q17-word-clicked1";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q17-word-clicked1",
            ""
          );
          q17Clickedword2 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q17-word-clicked1",
            ""
          );

          this.className += " q17-word-clicked1";
        }
      }
    });
  }
}

var q17Clickedword3 = "";
var container = document.getElementById("q17-word-container3");
if (container != null) {
  var btns = container.getElementsByClassName("q17-word1");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q17Clickedword3 = this.innerHTML;

      var current = document.getElementsByClassName("q17-word-clicked2");

      if (current.length === 0) {
        this.className += " q17-word-clicked2";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q17-word-clicked2",
            ""
          );
          q17Clickedword3 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q17-word-clicked2",
            ""
          );

          this.className += " q17-word-clicked2";
        }
      }
    });
  }
}
