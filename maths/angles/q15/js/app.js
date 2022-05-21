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
function drag(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
}
  
function allowDrop(event) {
    event.preventDefault();
}
  
function drop(event) {
    event.preventDefault();
  
    if (
      event.target.parentElement.className !== "q4-letter-container" ||
      (event.target.parentElement.className === "q4-letter-container" &&
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

function submitQ15() {
    let isCorrect = true;
  
    let ansTrack2 = "Acute";
    let cansdiv;
    let block;
    let c;
  
    block = document.getElementById("q15-answer-drop-box-container");
    c = block.children;
  
    for (var i = 0; i < c.length; i++) {
      console.log(c[i].children);
      if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
        cansdiv = document.getElementById("q15" + ansTrack2);
        setTimeout(() => {
          if (c[i].children[0].className === "q15-answer-box-drop-div") {
            c[i].children[0].style.borderBottomColor = "#419ae2";
          } else {
            c[i].children[0].style.backgroundColor = "#419ae2";
          }
  
          cansdiv.style.backgroundColor = "#419ae2";
        }, 1000);
  
        if (c[i].children[0].className === "q15-answer-box-drop-div") {
          c[i].children[0].style.borderBottomColor = "#FF0000A8";
        } else {
          c[i].children[0].style.backgroundColor = "#FF0000A8";
        }
  
        cansdiv.style.backgroundColor = "#46cd46";
        return;
      } else {
        if (ansTrack2 == "Acute") {
          ansTrack2 = "Right";
        } else if (ansTrack2 == "Right") {
          ansTrack2 = "Straight";
        }
      }
    }
  
    if (isCorrect) {
      alert("welldone");
    }
  }