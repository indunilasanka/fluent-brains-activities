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

// q15
function dropQ15(event) {
  event.preventDefault();

  if (
    event.target.parentElement.className !== "q1-letter-container" ||
    (event.target.parentElement.className === "q1-letter-container" &&
      event.target.className === "q4-answer-box-drop-div")
  ) {
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
}

function q15SubmitAnswer() {
  let isCorrect = true;

  let ansTrack2 = "Began";
  let cansdiv;
  let c;

  c = document.getElementsByClassName("q15-dd-grid-ans-box-column-six");
  d = document.getElementsByClassName("q15-dd-grid-ans-box-column-seven");
  for (var i = 0; i < c.length; i++) {
    if (c[i].children[0].getAttribute("canswer") != "6") {
      reduceStarCount();
      cansdivs = document.getElementsByClassName("num-6");
      setTimeout(() => {
        if (
          c[i].children[0].className == "q15-answer-drop-div num-7" ||
          c[i].children[0].className == "q15-answer-drop-div num-6"
        ) {
          c[i].children[0].style.backgroundColor = "#3b95e0ff";
        } else {
          c[i].children[0].style.backgroundColor = "transparent";
        }

        // cansdiv.style.backgroundColor = "transparent";
        for (var j = 0; j < cansdivs.length; j++) {
          cansdivs[j].style.backgroundColor = "#3b95e0ff";
        }
      }, 1000);

      c[i].children[0].style.backgroundColor = "#FF0000A8";

      // cansdiv.style.backgroundColor = "#46cd46";
      for (var j = 0; j < cansdivs.length; j++) {
        if (
          cansdivs[j].parentElement.className !==
          "q15-dd-grid-ans-box-column-six"
        ) {
          cansdivs[j].style.backgroundColor = "#46cd46";
        }
      }
      return;
    }
  }

  for (var i = 0; i < d.length; i++) {
    if (d[i].children[0].getAttribute("canswer") != "7") {
      reduceStarCount();
      cansdivs = document.getElementsByClassName("num-7");
      setTimeout(() => {
        d[i].children[0].style.backgroundColor = "transparent";

        // cansdiv.style.backgroundColor = "white";
        for (var j = 0; j < cansdivs.length; j++) {
          cansdivs[j].style.backgroundColor = "#3b95e0ff";
        }
      }, 1000);

      d[i].children[0].style.backgroundColor = "#FF0000A8";

      // cansdiv.style.backgroundColor = "#46cd46";
      for (var j = 0; j < cansdivs.length; j++) {
        if (
          cansdivs[j].parentElement.className !==
          "q15-dd-grid-ans-box-column-seven"
        ) {
          cansdivs[j].style.backgroundColor = "#46cd46";
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
