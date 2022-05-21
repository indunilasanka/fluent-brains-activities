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

function q3SubmitAnswer(qId) {
  let isCorrect = true;

  if (qId === "q3") {
    const input1 = document.getElementById("q3input1");
    const input2 = document.getElementById("q3input2");
    const input3 = document.getElementById("q3input3");
    const input4 = document.getElementById("q3input4");
    const input5 = document.getElementById("q3input5");
    const input6 = document.getElementById("q3input6");
    const input7 = document.getElementById("q3input7");
    const input8 = document.getElementById("q3input8");
    const input9 = document.getElementById("q3input9");
    const input10 = document.getElementById("q3input10");
    const input11 = document.getElementById("q3input11");
    const input12 = document.getElementById("q3input12");
    const input13 = document.getElementById("q3input13");
    const input14 = document.getElementById("q3input14");
    const input15 = document.getElementById("q3input15");
    const input16 = document.getElementById("q3input16");
    const input17 = document.getElementById("q3input17");
    console.log(input1.value);

    if (input1.value !== "b") {
      isCorrect = false;
      setTimeout(() => {
        input1.style.color = "black";
      }, 2000);
      input1.style.color = "#FF0000A8";
    }
    if (input1.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input1.value = "";
        input1.style.color = "black";
      }, 2000);
      input1.style.color = "#FF0000A8";
      input1.value = "✖";
    }

    if (input2.value !== "c") {
      isCorrect = false;
      setTimeout(() => {
        input2.style.color = "black";
      }, 2000);
      input2.style.color = "#FF0000A8";
    }
    if (input2.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input2.value = "";
        input2.style.color = "black";
      }, 2000);
      input2.style.color = "#FF0000A8";
      input2.value = "✖";
    }

    if (input3.value !== "d") {
      isCorrect = false;
      setTimeout(() => {
        input3.style.color = "black";
      }, 2000);
      input3.style.color = "#FF0000A8";
    }
    if (input3.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input3.value = "";
        input3.style.color = "black";
      }, 2000);
      input3.style.color = "#FF0000A8";
      input3.value = "✖";
    }

    if (input4.value !== "e") {
      isCorrect = false;
      setTimeout(() => {
        input4.style.color = "black";
      }, 2000);
      input4.style.color = "#FF0000A8";
    }
    if (input4.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input4.value = "";
        input4.style.color = "black";
      }, 2000);
      input4.style.color = "#FF0000A8";
      input4.value = "✖";
    }

    if (input5.value !== "h") {
      isCorrect = false;
      setTimeout(() => {
        input5.style.color = "black";
      }, 2000);
      input5.style.color = "#FF0000A8";
    }
    if (input5.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input5.value = "";
        input5.style.color = "black";
      }, 2000);
      input5.style.color = "#FF0000A8";
      input5.value = "✖";
    }

    if (input6.value !== "i") {
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

    if (input7.value !== "j") {
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

    if (input8.value !== "k") {
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

    if (input9.value !== "n") {
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

    if (input10.value !== "o") {
      isCorrect = false;
      setTimeout(() => {
        input10.style.color = "black";
      }, 2000);
      input10.style.color = "#FF0000A8";
    }
    if (input10.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input10.value = "";
        input10.style.color = "black";
      }, 2000);
      input10.style.color = "#FF0000A8";
      input10.value = "✖";
    }

    if (input11.value !== "p") {
      isCorrect = false;
      setTimeout(() => {
        input11.style.color = "black";
      }, 2000);
      input11.style.color = "#FF0000A8";
    }
    if (input11.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input11.value = "";
        input11.style.color = "black";
      }, 2000);
      input11.style.color = "#FF0000A8";
      input11.value = "✖";
    }

    if (input12.value !== "q") {
      isCorrect = false;
      setTimeout(() => {
        input12.style.color = "black";
      }, 2000);
      input12.style.color = "#FF0000A8";
    }
    if (input12.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input12.value = "";
        input12.style.color = "black";
      }, 2000);
      input12.style.color = "#FF0000A8";
      input12.value = "✖";
    }

    if (input13.value !== "t") {
      isCorrect = false;
      setTimeout(() => {
        input13.style.color = "black";
      }, 2000);
      input13.style.color = "#FF0000A8";
    }
    if (input13.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input13.value = "";
        input13.style.color = "black";
      }, 2000);
      input13.style.color = "#FF0000A8";
      input13.value = "✖";
    }

    if (input14.value !== "u") {
      isCorrect = false;
      setTimeout(() => {
        input14.style.color = "black";
      }, 2000);
      input14.style.color = "#FF0000A8";
    }
    if (input14.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input14.value = "";
        input14.style.color = "black";
      }, 2000);
      input14.style.color = "#FF0000A8";
      input14.value = "✖";
    }

    if (input15.value !== "v") {
      isCorrect = false;
      setTimeout(() => {
        input15.style.color = "black";
      }, 2000);
      input15.style.color = "#FF0000A8";
    }
    if (input15.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input15.value = "";
        input15.style.color = "black";
      }, 2000);
      input15.style.color = "#FF0000A8";
      input15.value = "✖";
    }

    if (input16.value !== "w") {
      isCorrect = false;
      setTimeout(() => {
        input16.style.color = "black";
      }, 2000);
      input16.style.color = "#FF0000A8";
    }
    if (input16.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input16.value = "";
        input16.style.color = "black";
      }, 2000);
      input16.style.color = "#FF0000A8";
      input16.value = "✖";
    }

    if (input17.value !== "y") {
      isCorrect = false;
      setTimeout(() => {
        input17.style.color = "black";
      }, 2000);
      input17.style.color = "#FF0000A8";
    }
    if (input17.value == "") {
      isCorrect = false;

      setTimeout(() => {
        input17.value = "";
        input17.style.color = "black";
      }, 2000);
      input17.style.color = "#FF0000A8";
      input17.value = "✖";
    }
  }
  if (isCorrect) {
    openPopup();
  } else {
    reduceStarCount();
  }
}

function checkMissingLetter(id, actual) {
  const input = document.getElementById(id);
  if (input.value !== actual && input.value !== "") {
    setTimeout(() => {
      input.style.color = "black";
    }, 2000);
    input.style.color = "#FF0000A8";
  } else if (input.value !== "") {
    input.style.color = "#46cd46";
  }
}
