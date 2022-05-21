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

// q2

var q4Row1ClickedWord = "";
var q4Row2ClickedWord = "";
var q4Row3ClickedWord = "";
var q4Row4ClickedWord = "";
var container1 = document.getElementById("q4-row1");
if (container1 != null) {
  var btns1 = container1.getElementsByClassName("q4-row1-word-container");
}

var container2 = document.getElementById("q4-row2");
if (container2 != null) {
  console.log("i am in the container 2");
  var btns2 = container2.getElementsByClassName("q4-row2-word-container");
}

var container3 = document.getElementById("q4-row3");
if (container3 != null) {
  var btns3 = container3.getElementsByClassName("q4-row3-word-container");
}

var container4 = document.getElementById("q4-row4");
if (container4 !== null) {
  var btns4 = container4.getElementsByClassName("q4-row4-word-container");
}

//

if (btns1 != null) {
  console.log("i am in the btn 1");

  for (var i = 0; i < btns1.length; i++) {
    console.log(btns1[i]);

    btns1[i].addEventListener("click", function () {
      q4Row1ClickedWord = this.id;


        var current = document.getElementsByClassName(
        "q4-row1-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q4-row1-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q4-row1-word-container-clicked",
          ""
        );

        this.className += " q4-row1-word-container-clicked";
      }
    });
    //
    btns2[i].addEventListener("click", function () {
      q4Row2ClickedWord = this.id;


        var current = document.getElementsByClassName(
        "q4-row2-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q4-row2-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q4-row2-word-container-clicked",
          ""
        );

        this.className += " q4-row2-word-container-clicked";
      }
    });
    //

    // btns3[i].addEventListener("click", function () {
    //   console.log("btns 3 event");
      //   q4Row3ClickedWord = this.id;
      //
      //   var current = document.getElementsByClassName(
    //     "q4-row3-word-container-clicked"
    //   );
    //   if (current.length === 0) {
    //     this.className += " q4-row3-word-container-clicked";
    //   } else {
    //     current[0].className = current[0].className.replace(
    //       " q4-row3-word-container-clicked",
    //       ""
    //     );

    //     this.className += " q4-row3-word-container-clicked";
    //   }
    // });

    //

    // if (container4 !== null) {
    //   btns4[i].addEventListener("click", function () {
    //     console.log("btns 4 event");
      //     q4Row4ClickedWord = this.id;
      //
      //     var current = document.getElementsByClassName(
    //       "q4-row4-word-container-clicked"
    //     );
    //     if (current.length === 0) {
    //       this.className += " q4-row4-word-container-clicked";
    //     } else {
    //       current[0].className = current[0].className.replace(
    //         " q4-row4-word-container-clicked",
    //         ""
    //       );

    //       this.className += " q4-row4-word-container-clicked";
    //     }
    //   });
    // }
  }
}

function q4SubmitAnswer() {
  if (q4Row1ClickedWord === "That" && q4Row2ClickedWord === "This") {
    openPopup();
  } else {
    reduceStarCount();
  }
}

// q1Row3ClickedWord === "These" &&
//     q1Row4ClickedWord === "Those"
