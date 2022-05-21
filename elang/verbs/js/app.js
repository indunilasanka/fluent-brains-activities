//global variables
let ctx;
let fps = 4;
let button = document.getElementById("clapbtn");
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 350;
let dogclap = false;
let mySound;
const questionsArray = [
  "q1",
  "q3",
  "q10",
  "q2",
  "q4",
  "q6",
  "q5",
  "q7",
  "q11",
  "q9",
  "q8",
];
let currentQuestionNumber = 1;
let currentQuestionId = "q1";

//start function
function startAll() {
  gameArea.start();
  if (window.innerWidth > 1300) {
    dog = new spriteImage(
      0,
      0,
      10212,
      1565,
      5,
      10,
      50,
      150,
      100,
      "../img/walksprite.png"
    );
    dogClapping = new spriteImage(
      0,
      0,
      2000,
      1500,
      2,
      10,
      40,
      100,
      120,
      "../img/clapping.png"
    );
    background = new imageBuilder(
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
      "../img/road-bg.png"
    );
  } else if (window.innerWidth > 1000) {
    dog = new spriteImage(
      0,
      0,
      10212,
      1565,
      5,
      10,
      50,
      220,
      100,
      "../img/walksprite.png"
    );
    dogClapping = new spriteImage(
      0,
      0,
      2000,
      1500,
      2,
      10,
      40,
      120,
      120,
      "../img/clapping.png"
    );
    background = new imageBuilder(
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
      "../img/road-bg-l.png"
    );
  } else if (window.innerWidth > 750) {
    dog = new spriteImage(
      0,
      0,
      10212,
      1565,
      5,
      10,
      50,
      220,
      100,
      "../img/walksprite.png"
    );
    dogClapping = new spriteImage(
      0,
      0,
      2000,
      1500,
      2,
      10,
      40,
      120,
      120,
      "../img/clapping.png"
    );
    background = new imageBuilder(
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
      "../img/road-bg-m.png"
    );
  } else {
    dog = new spriteImage(
      0,
      0,
      10212,
      1565,
      5,
      10,
      50,
      300,
      100,
      "../img/walksprite.png"
    );
    dogClapping = new spriteImage(
      0,
      0,
      2000,
      1500,
      2,
      10,
      40,
      180,
      120,
      "../img/clapping.png"
    );
    background = new imageBuilder(
      0,
      0,
      CANVAS_WIDTH,
      CANVAS_HEIGHT,
      "../img/road-bg-s.png"
    );
  }

  // button.addEventListener('click',()=>{
  //     dogclap=true;
  //     setTimeout(()=>{
  //         dogclap=false;
  //     },4000)
  // })

  // mySound = new Sound("../img/aaaa.wav");
}

function playBackground() {
  mySound.play();
}

function playSound(text) {
  const msg = new SpeechSynthesisUtterance();
  msg.volume = 1;
  msg.rate = 0.9;
  msg.pitch = 1;
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
  responsiveVoice.speak(text, "Sinhala", { volume: 2, rate: 1, pitch: 1 });
}

//gameArea object
const gameArea = {
  canvas: document.getElementById("gameCanvas"),

  start: function () {
    this.ctx = this.canvas.getContext("2d");

    this.interval = setInterval(() => {
      drawSprite();
    }, 1000 / fps);
  },
  clear: function () {
    ctx = this.ctx;
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  },
  stop: function () {
    clearInterval(this.interval);
  },
};

//drawSprite
function drawSprite() {
  //draw function draws everything on the canvas
  gameArea.clear();
  background.draw();
  if (!dogclap) {
    dog.draw();
  } else {
    dogClapping.x = dog.x + dog.width / 2;
    dogClapping.y = dog.y;
    dogClapping.draw();
  }

  if (!dogclap) {
    dog.Move();
  }
}

//constructor functions
class spriteImage {
  //constructor function for the dog spritesheet
  constructor(
    srcX,
    srcY,
    spritewidth,
    spriteheight,
    col,
    x,
    y,
    width,
    height,
    src
  ) {
    this.srcX = srcX;
    this.srcY = srcY;
    this.swidth = spritewidth / col;
    this.sheight = spriteheight;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = src;
    this.moveleft = false;
    this.curFrame = 0;
    this.frameCount = col;
  }

  draw() {
    this.updateFrame();
    ctx.drawImage(
      this.image,
      this.srcX,
      this.srcY,
      this.swidth,
      this.sheight,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  updateFrame() {
    if (this.curFrame >= this.frameCount) {
      this.curFrame = 0;
    }
    this.srcX = this.curFrame * this.swidth;
    this.curFrame++;
  }

  Move() {
    ///to move the dog left and right!
    if (this.moveleft) {
      this.x -= 12;
      this.image.src = "../img/walksprite2.png";
    } else {
      this.x += 12;
      this.image.src = "../img/walksprite.png";
    }
    if (this.x <= 0) {
      this.moveleft = false;
    }
    if (this.x + this.width >= CANVAS_WIDTH) {
      this.moveleft = true;
    }
  }
}

class imageBuilder {
  //......................ECMA6 clss/object constructor...........
  constructor(x, y, width, height, src) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.image.src = src;
  }

  draw() {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }
}

function Sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function () {
    this.sound.play();
  };
  this.stop = function () {
    this.sound.pause();
  };
}

function handleHelpCountAnswerClick(id, txt, num) {
  playSound(txt);
  const ans = document.getElementById(id);
  ans.style.color = "#46C646";
  ans.innerHTML = txt;
}

function handleCountAnswerClick(txt, id, aid) {
  let currentQNumber;
  const answerButton = document.getElementById(aid);
  const answer = document.getElementById(id);
  if (id.length === 3) {
    currentQNumber = parseInt(id.substr(2, 1));
  } else {
    currentQNumber = parseInt(id.substr(2, 2));
  }

  const nextQnumber = currentQNumber + 1;
  const nextQ = "cq" + nextQnumber;

  if (
    (currentQNumber === 1 && txt === "one") ||
    (currentQNumber === 2 && txt === "two") ||
    (currentQNumber === 3 && txt === "three") ||
    (currentQNumber === 4 && txt === "four") ||
    (currentQNumber === 5 && txt === "five") ||
    (currentQNumber === 6 && txt === "six") ||
    (currentQNumber === 7 && txt === "seven") ||
    (currentQNumber === 8 && txt === "eight") ||
    (currentQNumber === 9 && txt === "nine")
  ) {
    answer.className = "count-question-hide";
    const nextQElement = document.getElementById(nextQ);
    nextQElement.className = "count-question-display";
    setTimeout(() => {
      playSound(nextQnumber);
    }, 500);
  } else if (currentQNumber === 10 && txt === "ten") {
    swapNextQuestion();
  } else {
    answerButton.style.backgroundColor = "#FF4646";
    setTimeout(() => {
      answerButton.style.backgroundColor = "rgb(100, 184, 255)";
    }, 1000);
  }

  // if (isCorrect && e.target.nodeName === 'LI') {
  //     e.target.parentNode.style.pointerEvents = 'none';
  //     e.target.classList.add('right');
  //
  //     setTimeout(() => {
  //         var element = document.getElementById(id);
  //         element.className = 'question-answer';
  //         element.parentNode.style.pointerEvents = 'initial';
  //         this.setState({step: this.state.step + 1});
  //     }, 3000, id);
  //
  //
  // } else if (e.target.nodeName === 'LI') {
  //     e.target.classList.add('wrong');
  //     setTimeout(() => {
  //         var element = document.getElementById(id);
  //         element.className = 'question-answer';
  //     }, 800, id);
  // }
}

function checkMissingNumber(id, actual, qId) {
  const input = document.getElementById(id);
  if (input.value == actual) {
    input.style.color = "#46cd46";
    dogclap = true;
    setTimeout(() => {
      dogclap = false;
    }, 3000);
  } else {
    input.style.color = "#FF0000A8";
    if (qId) {
      displayHelpAction(qId);
    }
    setTimeout(() => {
      input.style.color = "black";
      input.value = "";
    }, 1500);
  }
}

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

function allowDropQ3(event) {
  event.preventDefault();
}

var x = 0;

function dragQ3(event) {
  event.detail = event.target.id;
  event.dataTransfer.setData("target_id", event.target.id);
  if (event.target.parentElement.parentElement.id === "imgCnt") {
    x = x + 1;
  }
}

function dropQ3(event) {
  event.preventDefault();
  var drop_target = event.target;
  var drag_target_id = event.dataTransfer.getData("target_id");
  var drag_target = document.getElementById(drag_target_id);

  if (drop_target !== null && drag_target !== null) {
    // var tmp = document.createElement("span");
    // // tmp.className = "hide";
    // drop_target.before(tmp);
    // drag_target.before(drop_target);
    // tmp.replaceWith(drag_target);
    var DropParent = document.getElementById(event.target.id).parentElement;
    var DragParent = document.getElementById(drag_target_id).parentElement;

    // if(event.target.getAttribute("canswer") === "q2-gs")
    // {

    // }

    DropParent.appendChild(drag_target);
    // DragParent.appendChild(drop_target);
    if (event.target.getAttribute("canswer") === "q2-gs" && x > 0) {
      document.getElementById("greenCnt").appendChild(drop_target);
    } else if (event.target.getAttribute("canswer") === "q2-bc" && x > 0) {
      document.getElementById("redCnt").appendChild(drop_target);
    } else {
      DragParent.appendChild(drop_target);
    }
  }
  x = 0;
}

function submitPatternQ3() {
  let isCorrect = true;
  const block1 = document.getElementById("q3block1");
  const block2 = document.getElementById("q3block2");
  const block3 = document.getElementById("q3block3");
  const block4 = document.getElementById("q3block4");
  const block5 = document.getElementById("q3block5");

  if (block1.firstElementChild.getAttribute("canswer") !== "q2-gs") {
    setTimeout(() => {
      if (block1.firstElementChild.getAttribute("canswer") != undefined) {
        block1.firstElementChild.style.backgroundColor = null;
      } else {
        block1.firstElementChild.style.backgroundColor = null;
      }
    }, 1000);
    block1.firstElementChild.style.backgroundColor = "#FF0000A8";
    isCorrect = false;
  }
  if (block2.firstElementChild.getAttribute("canswer") !== "q2-gs") {
    setTimeout(() => {
      if (block2.firstElementChild.getAttribute("canswer") != undefined) {
        block2.firstElementChild.style.backgroundColor = null;
      } else {
        block2.firstElementChild.style.backgroundColor = null;
      }
    }, 1000);
    block2.firstElementChild.style.backgroundColor = "#FF0000A8";
    isCorrect = false;
  }

  if (block3.firstElementChild.getAttribute("canswer") !== "q2-gs") {
    setTimeout(() => {
      if (block3.firstElementChild.getAttribute("canswer") != undefined) {
        block3.firstElementChild.style.backgroundColor = null;
      } else {
        block3.firstElementChild.style.backgroundColor = null;
      }
    }, 1000);
    block3.firstElementChild.style.backgroundColor = "#FF0000A8";
    isCorrect = false;
  }

  if (block4.firstElementChild.getAttribute("canswer") !== "q2-gs") {
    setTimeout(() => {
      if (block4.firstElementChild.getAttribute("canswer") != undefined) {
        block4.firstElementChild.style.backgroundColor = null;
      } else {
        block4.firstElementChild.style.backgroundColor = null;
      }
    }, 1000);
    block4.firstElementChild.style.backgroundColor = "#FF0000A8";
    isCorrect = false;
  }
  if (block5.firstElementChild.getAttribute("canswer") !== "q2-bc") {
    setTimeout(() => {
      if (block5.firstElementChild.getAttribute("canswer") != undefined) {
        block5.firstElementChild.style.backgroundColor = null;
      } else {
        block5.firstElementChild.style.backgroundColor = null;
      }
    }, 1000);
    block5.firstElementChild.style.backgroundColor = "#FF0000A8";
    isCorrect = false;
  }

  if (isCorrect) {
    alert("welldone");
  }
}

function displayHelpAction(qId) {
  let id = "explanation-action-" + qId;
  const action = document.getElementById(id);
  action.style.display = "inline-block";
}

function openHelpAction(id) {
  const helpModal = document.getElementById(id);
  helpModal.style.display = "block";
}

function closeHelpAction(id) {
  const helpModal = document.getElementById(id);
  helpModal.style.display = "none";
}

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

//////////////////////////////////////

// q1

var q1Clickedword1 = "";
var container = document.getElementById("q1-word-container1");
if (container != null) {
  var btns = container.getElementsByClassName("q1-word1");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q1Clickedword1 = this.innerHTML;

      var current = document.getElementsByClassName("q1-word-clicked");

      if (current.length === 0) {
        this.className += " q1-word-clicked";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q1-word-clicked",
            ""
          );
          q1Clickedword1 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q1-word-clicked",
            ""
          );

          this.className += " q1-word-clicked";
        }
      }
    });
  }
}

var q1Clickedword2 = "";
var container = document.getElementById("q1-word-container2");
if (container != null) {
  var btns = container.getElementsByClassName("q1-word1");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q1Clickedword2 = this.innerHTML;

      var current = document.getElementsByClassName("q1-word-clicked1");

      if (current.length === 0) {
        this.className += " q1-word-clicked1";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q1-word-clicked1",
            ""
          );
          q1Clickedword2 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q1-word-clicked1",
            ""
          );

          this.className += " q1-word-clicked1";
        }
      }
    });
  }
}

function submitQ1() {
  if (q1Clickedword1 === "listen" && q1Clickedword2 === "seen") {
    alert("welldone");
  } else {
    alert("try again");
  }
}

// q2

var q2Clickedword1 = "";
var container = document.getElementById("q2-word-container1");
if (container != null) {
  var btns = container.getElementsByClassName("q2-word1");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q2Clickedword1 = this.innerHTML;

      var current = document.getElementsByClassName("q2-word-clicked");

      if (current.length === 0) {
        this.className += " q2-word-clicked";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q2-word-clicked",
            ""
          );
          q2Clickedword1 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q2-word-clicked",
            ""
          );

          this.className += " q2-word-clicked";
        }
      }
    });
  }
}

var q2Clickedword2 = "";
var container = document.getElementById("q2-word-container2");
if (container != null) {
  var btns = container.getElementsByClassName("q2-word1");

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q2Clickedword2 = this.innerHTML;

      var current = document.getElementsByClassName("q2-word-clicked1");

      if (current.length === 0) {
        this.className += " q2-word-clicked1";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q2-word-clicked1",
            ""
          );
          q2Clickedword2 = "";
        } else {
          current[0].className = current[0].className.replace(
            " q2-word-clicked1",
            ""
          );

          this.className += " q2-word-clicked1";
        }
      }
    });
  }
}

function submitQ2() {
  if (q2Clickedword1 === "and" && q2Clickedword2 === "but") {
    alert("welldone");
  } else {
    alert("try again");
  }
}

// q3
var q3Row1ClickedWord = "";
var container = document.getElementById("q3-ans-cnt");

if (container != null) {
  var btns1 = container.getElementsByClassName("q3-word-container");

  for (var i = 0; i < btns1.length; i++) {
    btns1[i].addEventListener("click", function () {
      q3Row1ClickedWord = this.id;

      var current = document.getElementsByClassName(
        "q3-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q3-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q3-word-container-clicked",
          ""
        );

        this.className += " q3-word-container-clicked";
      }
    });
  }
}

function submitQ3() {
  if (q3Row1ClickedWord == "before") {
    alert("welldone");
  } else {
    alert("try again");
  }
}

// q4
var q4Row1ClickedWord = "";
var container = document.getElementById("q4-ans-cnt");

if (container != null) {
  var btns1 = container.getElementsByClassName("q4-word-container");

  for (var i = 0; i < btns1.length; i++) {
    btns1[i].addEventListener("click", function () {
      q4Row1ClickedWord = this.id;

      var current = document.getElementsByClassName(
        "q4-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q4-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q4-word-container-clicked",
          ""
        );

        this.className += " q4-word-container-clicked";
      }
    });
  }
}

function submitQ4() {
  if (q4Row1ClickedWord == "can") {
    alert("welldone");
  } else {
    alert("try again");
  }
}

// q5
function q5Check(event) {
  if (event.target.id !== "one") {
    setTimeout(() => {
      // event.target.style.borderColor = "#4faeffff";
      // event.target.style.color = "black";
      event.target.className = "q5-btn";
    }, 2000);
    // event.target.style.borderColor = "#FF0000A8";
    // event.target.style.color = "#FF0000A8";
    event.target.className = "q5-btn-clicked";
  } else {
    alert("welldone");
  }
}
