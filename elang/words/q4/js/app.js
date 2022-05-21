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

// function q2SubmitAnswer(qId) {
//   let isCorrect = true;

//   const input1 = document.getElementById("q2input1");
//   const input2 = document.getElementById("q2input2");
//   const input3 = document.getElementById("q2input3");
//   const input4 = document.getElementById("q2input4");
//   const input5 = document.getElementById("q2input5");
//   const input6 = document.getElementById("q2input6");
//   const input7 = document.getElementById("q2input7");
//   const input8 = document.getElementById("q2input8");
//   const input9 = document.getElementById("q2input9");

//   console.log(input1.value);

//   if (input1.value !== "O") {
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

//   if (input2.value !== "C") {
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

//   if (input3.value !== "C") {
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

//   if (input4.value !== "R") {
//     isCorrect = false;
//     setTimeout(() => {
//       input4.style.color = "black";
//     }, 2000);
//     input4.style.color = "#FF0000A8";
//   }
//   if (input4.value == "") {
//     isCorrect = false;

//     setTimeout(() => {
//       input4.value = "";
//       input4.style.color = "black";
//     }, 2000);
//     input4.style.color = "#FF0000A8";
//     input4.value = "✖";
//   }

//   if (input5.value !== "N") {
//     isCorrect = false;
//     setTimeout(() => {
//       input5.style.color = "black";
//     }, 2000);
//     input5.style.color = "#FF0000A8";
//   }
//   if (input5.value == "") {
//     isCorrect = false;

//     setTimeout(() => {
//       input5.value = "";
//       input5.style.color = "black";
//     }, 2000);
//     input5.style.color = "#FF0000A8";
//     input5.value = "✖";
//   }

//   if (input6.value !== "E") {
//     isCorrect = false;
//     setTimeout(() => {
//       input6.style.color = "black";
//     }, 2000);
//     input6.style.color = "#FF0000A8";
//   }
//   if (input6.value == "") {
//     isCorrect = false;

//     setTimeout(() => {
//       input6.value = "";
//       input6.style.color = "black";
//     }, 2000);
//     input6.style.color = "#FF0000A8";
//     input6.value = "✖";
//   }

//   if (input7.value !== "E") {
//     isCorrect = false;
//     setTimeout(() => {
//       input7.style.color = "black";
//     }, 2000);
//     input7.style.color = "#FF0000A8";
//   }
//   if (input7.value == "") {
//     isCorrect = false;

//     setTimeout(() => {
//       input7.value = "";
//       input7.style.color = "black";
//     }, 2000);
//     input7.style.color = "#FF0000A8";
//     input7.value = "✖";
//   }

//   if (input8.value !== "R") {
//     isCorrect = false;
//     setTimeout(() => {
//       input8.style.color = "black";
//     }, 2000);
//     input8.style.color = "#FF0000A8";
//   }
//   if (input8.value == "") {
//     isCorrect = false;

//     setTimeout(() => {
//       input8.value = "";
//       input8.style.color = "black";
//     }, 2000);
//     input8.style.color = "#FF0000A8";
//     input8.value = "✖";
//   }

//   if (input9.value !== "R") {
//     isCorrect = false;
//     setTimeout(() => {
//       input9.style.color = "black";
//     }, 2000);
//     input9.style.color = "#FF0000A8";
//   }
//   if (input9.value == "") {
//     isCorrect = false;

//     setTimeout(() => {
//       input9.value = "";
//       input9.style.color = "black";
//     }, 2000);
//     input9.style.color = "#FF0000A8";
//     input9.value = "✖";
//   }

//   if (isCorrect) {
//     openPopup();
//   }
// }

// q4
function q4Checked(event) {
  if (event.target.id == "q4EyeCnt") {
    if (event.target.firstElementChild.id == "q4Eye") {
      event.target.style.backgroundColor = "#3b95e0ff";
      event.target.firstElementChild.id = "q4EyeChecked";
    } else {
      event.target.style.backgroundColor = "#77c0ff";
      event.target.firstElementChild.id = "q4Eye";
    }
  } else if (event.target.id == "q4Eye" || event.target.id == "q4EyeChecked") {
    if (event.target.id == "q4Eye") {
      event.target.parentElement.style.backgroundColor = "#3b95e0ff";
      event.target.id = "q4EyeChecked";
    } else {
      event.target.parentElement.style.backgroundColor = "#77c0ff";
      event.target.id = "q4Eye";
    }
  }

  // khksdjfh

  if (event.target.id == "q4BusCnt") {
    if (event.target.firstElementChild.id == "q4Bus") {
      event.target.style.backgroundColor = "#3b95e0ff";
      event.target.firstElementChild.id = "q4BusChecked";
    } else {
      event.target.style.backgroundColor = "#77c0ff";
      event.target.firstElementChild.id = "q4Bus";
    }
  } else if (event.target.id == "q4Bus" || event.target.id == "q4BusChecked") {
    if (event.target.id == "q4Bus") {
      event.target.parentElement.style.backgroundColor = "#3b95e0ff";
      event.target.id = "q4BusChecked";
    } else {
      event.target.parentElement.style.backgroundColor = "#77c0ff";
      event.target.id = "q4Bus";
    }
  }

  // khksdjfh

  if (event.target.id == "q4ElephantCnt") {
    if (event.target.firstElementChild.id == "q4Elephant") {
      event.target.style.backgroundColor = "#3b95e0ff";
      event.target.firstElementChild.id = "q4ElephantChecked";
    } else {
      event.target.style.backgroundColor = "#77c0ff";
      event.target.firstElementChild.id = "q4Elephant";
    }
  } else if (
    event.target.id == "q4Elephant" ||
    event.target.id == "q4ElephantChecked"
  ) {
    if (event.target.id == "q4Elephant") {
      event.target.parentElement.style.backgroundColor = "#3b95e0ff";
      event.target.id = "q4ElephantChecked";
    } else {
      event.target.parentElement.style.backgroundColor = "#77c0ff";
      event.target.id = "q4Elephant";
    }
  }

  // sdfkhksdhf

  if (event.target.id == "q4BookCnt") {
    if (event.target.firstElementChild.id == "q4Book") {
      event.target.style.backgroundColor = "#3b95e0ff";
      event.target.firstElementChild.id = "q4BookChecked";
    } else {
      event.target.style.backgroundColor = "#77c0ff";
      event.target.firstElementChild.id = "q4Book";
    }
  } else if (
    event.target.id == "q4Book" ||
    event.target.id == "q4BookChecked"
  ) {
    if (event.target.id == "q4Book") {
      event.target.parentElement.style.backgroundColor = "#3b95e0ff";
      event.target.id = "q4BookChecked";
    } else {
      event.target.parentElement.style.backgroundColor = "#77c0ff";
      event.target.id = "q4Book";
    }
  }

  // khksdjfh

  if (event.target.id == "q4ChairCnt") {
    if (event.target.firstElementChild.id == "q4Chair") {
      event.target.style.backgroundColor = "#3b95e0ff";
      event.target.firstElementChild.id = "q4ChairChecked";
    } else {
      event.target.style.backgroundColor = "#77c0ff";
      event.target.firstElementChild.id = "q4Chair";
    }
  } else if (
    event.target.id == "q4Chair" ||
    event.target.id == "q4ChairChecked"
  ) {
    if (event.target.id == "q4Chair") {
      event.target.parentElement.style.backgroundColor = "#3b95e0ff";
      event.target.id = "q4ChairChecked";
    } else {
      event.target.parentElement.style.backgroundColor = "#77c0ff";
      event.target.id = "q4Chair";
    }
  }

  // khksdjfh

  if (event.target.id == "q4EagleCnt") {
    if (event.target.firstElementChild.id == "q4Eagle") {
      event.target.style.backgroundColor = "#3b95e0ff";
      event.target.firstElementChild.id = "q4EagleChecked";
    } else {
      event.target.style.backgroundColor = "#77c0ff";
      event.target.firstElementChild.id = "q4Eagle";
    }
  } else if (
    event.target.id == "q4Eagle" ||
    event.target.id == "q4EagleChecked"
  ) {
    if (event.target.id == "q4Eagle") {
      event.target.parentElement.style.backgroundColor = "#3b95e0ff";
      event.target.id = "q4EagleChecked";
    } else {
      event.target.parentElement.style.backgroundColor = "#77c0ff";
      event.target.id = "q4Eagle";
    }
  }
}

function q4SubmitAnswer() {
  var Eye = document.getElementById("q4EyeCnt").firstElementChild.id;
  var Eagle = document.getElementById("q4EagleCnt").firstElementChild.id;
  var Elephant = document.getElementById("q4ElephantCnt").firstElementChild.id;
  var Bus = document.getElementById("q4BusCnt").firstElementChild.id;
  var Chair = document.getElementById("q4ChairCnt").firstElementChild.id;
  var Book = document.getElementById("q4BookCnt").firstElementChild.id;

  if (
    Eye == "q4EyeChecked" &&
    Eagle == "q4EagleChecked" &&
    Elephant == "q4ElephantChecked" &&
    Bus != "q4BusChecked" &&
    Chair != "q4ChairChecked" &&
    Book != "q4BookChecked"
  ) {
    openPopup();
  } else {
    reduceStarCount();
  }
}
