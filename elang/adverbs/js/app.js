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

function checkMissingLetter2(id, actual, actual2) {
  const input = document.getElementById(id);
  if (
    input.value.toUpperCase() !== actual.toUpperCase() &&
    input.value.toUpperCase() !== actual2.toUpperCase() &&
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

function checkMissingLetter3(id, actual, actual2, actual3) {
  const input = document.getElementById(id);
  if (
    input.value.toUpperCase() !== actual.toUpperCase() &&
    input.value.toUpperCase() !== actual2.toUpperCase() &&
    input.value.toUpperCase() !== actual3.toUpperCase() &&
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

function checkMissingLettersAll(qId) {
  let isCorrect = true;

  if (qId === "q1") {
    const input1 = document.getElementById("q1input1");
    const input2 = document.getElementById("q1input2");
    const input3 = document.getElementById("q1input3");
    const input4 = document.getElementById("q1input4");
    const input5 = document.getElementById("q1input5");
    const input6 = document.getElementById("q1input6");
    const input7 = document.getElementById("q1input7");
    const input8 = document.getElementById("q1input8");
    const input9 = document.getElementById("q1input9");

    if (
      input1.value.toUpperCase() !== "Here".toUpperCase() &&
      input1.value.toUpperCase() !== "There".toUpperCase()
    ) {
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

    if (
      input2.value.toUpperCase() !== "Here".toUpperCase() &&
      input2.value.toUpperCase() !== "There".toUpperCase()
    ) {
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

    if (input1.value == input2.value) {
      isCorrect = false;
      setTimeout(() => {
        input2.style.color = "black";
      }, 2000);
      input2.style.color = "#FF0000A8";
    }

    if (
      input3.value.toUpperCase() !== "Already".toUpperCase() &&
      input3.value.toUpperCase() !== "Then".toUpperCase() &&
      input3.value.toUpperCase() !== "Now".toUpperCase()
    ) {
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

    if (
      input4.value.toUpperCase() !== "Already".toUpperCase() &&
      input4.value.toUpperCase() !== "Then".toUpperCase() &&
      input4.value.toUpperCase() !== "Now".toUpperCase()
    ) {
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

    if (
      input5.value.toUpperCase() !== "Already".toUpperCase() &&
      input5.value.toUpperCase() !== "Then".toUpperCase() &&
      input5.value.toUpperCase() !== "Now".toUpperCase()
    ) {
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

    if (input3.value == input4.value) {
      isCorrect = false;
      setTimeout(() => {
        input4.style.color = "black";
      }, 2000);
      input4.style.color = "#FF0000A8";
    }
    if (input3.value == input5.value) {
      isCorrect = false;
      setTimeout(() => {
        input5.style.color = "black";
      }, 2000);
      input5.style.color = "#FF0000A8";
    }
    if (input5.value == input4.value) {
      isCorrect = false;
      setTimeout(() => {
        input5.style.color = "black";
      }, 2000);
      input6.style.color = "#FF0000A8";
    }
    // ////////////////////////

    if (
      input6.value.toUpperCase() !== "Well".toUpperCase() &&
      input6.value.toUpperCase() !== "Fast".toUpperCase()
    ) {
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
    if (
      input7.value.toUpperCase() !== "Well".toUpperCase() &&
      input7.value.toUpperCase() !== "Fast".toUpperCase()
    ) {
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
    if (input6.value == input7.value) {
      isCorrect = false;
      setTimeout(() => {
        input7.style.color = "black";
      }, 2000);
      input7.style.color = "#FF0000A8";
    }
    if (
      input8.value.toUpperCase() !== "However".toUpperCase() &&
      input8.value.toUpperCase() !== "Besides".toUpperCase()
    ) {
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
    if (
      input9.value.toUpperCase() !== "However".toUpperCase() &&
      input9.value.toUpperCase() !== "Besides".toUpperCase()
    ) {
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

    if (input8.value == input9.value) {
      isCorrect = false;
      setTimeout(() => {
        input9.style.color = "black";
      }, 2000);
      input9.style.color = "#FF0000A8";
    }
  } else if (qId === "q3") {
    const input1 = document.getElementById("q3input1");
    const input2 = document.getElementById("q3input2");
    const input3 = document.getElementById("q3input3");
    const input4 = document.getElementById("q3input4");

    if (input1.value.toUpperCase() !== "loudly".toUpperCase()) {
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

    if (input2.value.toUpperCase() !== "happily".toUpperCase()) {
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

    if (input3.value.toUpperCase() !== "quickly".toUpperCase()) {
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

    if (input4.value.toUpperCase() !== "brightly".toUpperCase()) {
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
  } else if (qId === "q9") {
    const input1 = document.getElementById("q9input1");
    const input2 = document.getElementById("q9input2");
    const input3 = document.getElementById("q9input3");
    const input4 = document.getElementById("q9input4");
    const input5 = document.getElementById("q9input5");

    if (input1.value !== "4") {
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

    if (input2.value !== "6") {
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

    if (input3.value !== "7") {
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

    if (input4.value !== "5") {
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

    if (input5.value !== "2") {
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
  } else if (qId === "q5") {
    const input1 = document.getElementById("q5input1");
    const input2 = document.getElementById("q5input2");
    const input3 = document.getElementById("q5input3");
    const input4 = document.getElementById("q5input4");

    if (input1.value.toUpperCase() !== "2".toUpperCase()) {
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

    if (input2.value.toUpperCase() !== "4".toUpperCase()) {
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

    if (input3.value.toUpperCase() !== "3".toUpperCase()) {
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

    if (input4.value.toUpperCase() !== "1".toUpperCase()) {
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
  } else if (qId === "q6") {
    const input1 = document.getElementById("q6input1");
    const input2 = document.getElementById("q6input2");
    const input3 = document.getElementById("q6input3");

    if (input1.value.toUpperCase() !== "well".toUpperCase()) {
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

    if (input2.value.toUpperCase() !== "never".toUpperCase()) {
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

    if (input3.value.toUpperCase() !== "badly".toUpperCase()) {
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
  }

  if (isCorrect) {
    alert("welldone");
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

function submitOrdering(quizId) {
  let isCorrect = true;
  let ansTrack = 1;
  let ansTrack2 = 21;
  let cansdiv;
  let block;
  let c;

  if (quizId === 1) {
    block = document.getElementById("q7block1");
    c = block.children;
    for (var i = 0; i < c.length; i++) {
      if (c[i].getAttribute("canswer") != ansTrack) {
        cansdiv = document.getElementById("q7a" + ansTrack);
        setTimeout(() => {
          c[i].style.backgroundColor = "#419ae2";
          cansdiv.style.backgroundColor = "#419ae2";
        }, 1000);
        c[i].style.backgroundColor = "#FF0000A8";
        cansdiv.style.backgroundColor = "#46cd46";
        return;
      } else {
        ansTrack++;
      }
    }

    block = document.getElementById("q7block2");
    c = block.children;
    for (var i = 0; i < c.length; i++) {
      if (c[i].getAttribute("canswer") != ansTrack) {
        cansdiv = document.getElementById("q7a" + ansTrack);
        setTimeout(() => {
          c[i].style.backgroundColor = "#419ae2";
          cansdiv.style.backgroundColor = "#419ae2";
        }, 1000);
        c[i].style.backgroundColor = "#FF0000A8";
        cansdiv.style.backgroundColor = "#46cd46";
        return;
      } else {
        ansTrack++;
      }
    }

    block = document.getElementById("q7block3");
    c = block.children;
    for (var i = 0; i < c.length; i++) {
      if (c[i].getAttribute("canswer") != ansTrack) {
        cansdiv = document.getElementById("q7a" + ansTrack);
        setTimeout(() => {
          c[i].style.backgroundColor = "#419ae2";
          cansdiv.style.backgroundColor = "#419ae2";
        }, 1000);
        c[i].style.backgroundColor = "#FF0000A8";
        cansdiv.style.backgroundColor = "#46cd46";
        return;
      } else {
        ansTrack++;
      }
    }

    block = document.getElementById("q7block4");
    c = block.children;
    for (var i = 0; i < c.length; i++) {
      if (c[i].getAttribute("canswer") != ansTrack) {
        cansdiv = document.getElementById("q7a" + ansTrack);
        setTimeout(() => {
          c[i].style.backgroundColor = "#419ae2";
          cansdiv.style.backgroundColor = "#419ae2";
        }, 1000);
        c[i].style.backgroundColor = "#FF0000A8";
        cansdiv.style.backgroundColor = "#46cd46";
        return;
      } else {
        ansTrack++;
      }
    }
  } else {
    block = document.getElementById("q8block1");
    c = block.children;
    for (var i = 0; i < c.length; i++) {
      if (c[i].getAttribute("canswer") != ansTrack2) {
        cansdiv = document.getElementById("q8a" + ansTrack2);
        setTimeout(() => {
          c[i].style.backgroundColor = "#419ae2";
          cansdiv.style.backgroundColor = "#419ae2";
        }, 1000);
        c[i].style.backgroundColor = "#FF0000A8";
        cansdiv.style.backgroundColor = "#46cd46";
        return;
      } else {
        ansTrack2++;
      }
    }

    block = document.getElementById("q8block2");
    c = block.children;
    for (var i = 0; i < c.length; i++) {
      if (c[i].getAttribute("canswer") != ansTrack2) {
        cansdiv = document.getElementById("q8a" + ansTrack2);
        setTimeout(() => {
          c[i].style.backgroundColor = "#419ae2";
          cansdiv.style.backgroundColor = "#419ae2";
        }, 1000);
        c[i].style.backgroundColor = "#FF0000A8";
        cansdiv.style.backgroundColor = "#46cd46";
        return;
      } else {
        ansTrack2++;
      }
    }

    block = document.getElementById("q8block3");
    c = block.children;
    for (var i = 0; i < c.length; i++) {
      if (c[i].getAttribute("canswer") != ansTrack2) {
        cansdiv = document.getElementById("q8a" + ansTrack2);
        setTimeout(() => {
          c[i].style.backgroundColor = "#419ae2";
          cansdiv.style.backgroundColor = "#419ae2";
        }, 1000);
        c[i].style.backgroundColor = "#FF0000A8";
        cansdiv.style.backgroundColor = "#46cd46";
        return;
      } else {
        ansTrack2++;
      }
    }

    block = document.getElementById("q8block4");
    c = block.children;
    for (var i = 0; i < c.length; i++) {
      if (c[i].getAttribute("canswer") != ansTrack2) {
        cansdiv = document.getElementById("q8a" + ansTrack2);
        setTimeout(() => {
          c[i].style.backgroundColor = "#419ae2";
          cansdiv.style.backgroundColor = "#419ae2";
        }, 1000);
        c[i].style.backgroundColor = "#FF0000A8";
        cansdiv.style.backgroundColor = "#46cd46";
        return;
      } else {
        ansTrack2++;
      }
    }
  }

  if (isCorrect) {
    swapNextQuestion();
  }
}

swapNextQuestion = () => {
  var answer = document.getElementById(
    questionsArray[currentQuestionNumber - 1]
  );
  dogclap = true;

  if (currentQuestionNumber === 1) {
    setTimeout(() => {
      playSound("One");
    }, 1000);
  }

  setTimeout(() => {
    answer.className = "question-hide";
    var nextQElement = document.getElementById(
      questionsArray[currentQuestionNumber]
    );
    nextQElement.className = "question-display";
    currentQuestionNumber = currentQuestionNumber + 1;
    document.getElementById("question-count").innerHTML = currentQuestionNumber;
    dogclap = false;
  }, 1000);
};

handleNumberComparison = (id, isCorrect) => {
  if (isCorrect) {
    swapNextQuestion();
    // document.body.style.backgroundImage = "url('../img/welldone.gif')";
  } else {
    const block = document.getElementById(id);
    block.style.borderColor = "#FF0000A8";
    setTimeout(() => {
      block.style.borderColor = "#96B8FFFF";
    }, 1000);
  }
};

handleSubmitAnswerComparison = (id, isCorrect) => {
  if (isCorrect) {
    swapNextQuestion();
    // document.body.style.backgroundImage = "url('../img/welldone.gif')";
  } else {
    const block = document.getElementById(id);
    block.style.backgroundColor = "#FF0000A8";
    setTimeout(() => {
      block.style.backgroundColor = "#4FAEFFFF";
    }, 1000);
  }
};

// Q2
var q2ClickedAnswer1 = "";
var q2ClickedAnswer2 = "";
var q2ClickedAnswer3 = "";
var container = document.getElementById("q2-ans-cnt-1");
if (container != null) {
  var btns = container.getElementsByClassName("q2-ans");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q2ClickedAnswer1 = this.innerText;

      var current = document.getElementsByClassName("q2-ans-clicked-1");
      if (current.length === 0) {
        this.className += " q2-ans-clicked-1";
      } else {
        current[0].className = current[0].className.replace(
          " q2-ans-clicked-1",
          ""
        );

        this.className += " q2-ans-clicked-1";
      }
    });
  }
}

var container1 = document.getElementById("q2-ans-cnt-2");

if (container1 != null) {
  var btns = container1.getElementsByClassName("q2-ans");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q2ClickedAnswer2 = this.innerText;

      var current = document.getElementsByClassName("q2-ans-clicked-2");
      if (current.length === 0) {
        this.className += " q2-ans-clicked-2";
      } else {
        current[0].className = current[0].className.replace(
          " q2-ans-clicked-2",
          ""
        );

        this.className += " q2-ans-clicked-2";
      }
    });
  }
}

var container2 = document.getElementById("q2-ans-cnt-3");
if (container2 != null) {
  var btns = container2.getElementsByClassName("q2-ans");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q2ClickedAnswer3 = this.innerText;

      var current = document.getElementsByClassName("q2-ans-clicked-3");
      if (current.length === 0) {
        this.className += " q2-ans-clicked-3";
      } else {
        current[0].className = current[0].className.replace(
          " q2-ans-clicked-3",
          ""
        );

        this.className += " q2-ans-clicked-3";
      }
    });
  }
}

function submitQ2() {
  if (
    q2ClickedAnswer1 == "Mice" &&
    q2ClickedAnswer2 == "Women" &&
    q2ClickedAnswer3 == "Child"
  ) {
    alert("welldone");
  } else {
    alert("try again");
  }
}

// // Q3
// var q3ClickedAnswer1 = "";
// var q3ClickedAnswer2 = "";
// var q3ClickedAnswer3 = "";
// var container4 = document.getElementById("q3-ans-cnt-1");
// if (container4 != null) {
//   var btns = container4.getElementsByClassName("q3-ans");
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       q3ClickedAnswer1 = this.innerText;

//       var current = document.getElementsByClassName("q3-ans-clicked-1");
//       if (current.length === 0) {
//         this.className += " q3-ans-clicked-1";
//       } else {
//         current[0].className = current[0].className.replace(
//           " q3-ans-clicked-1",
//           ""
//         );

//         this.className += " q3-ans-clicked-1";
//       }
//     });
//   }
// }

// var container5 = document.getElementById("q3-ans-cnt-2");
// if (container5 != null) {
//   var btns = container5.getElementsByClassName("q3-ans");
//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       q3ClickedAnswer2 = this.innerText;

//       var current = document.getElementsByClassName("q3-ans-clicked-2");
//       if (current.length === 0) {
//         this.className += " q3-ans-clicked-2";
//       } else {
//         current[0].className = current[0].className.replace(
//           " q3-ans-clicked-2",
//           ""
//         );

//         this.className += " q3-ans-clicked-2";
//       }
//     });
//   }
// }

// var container6 = document.getElementById("q3-ans-cnt-3");
// if (container6 != null) {
//   var btns = container6.getElementsByClassName("q3-ans");

//   for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//       q3ClickedAnswer3 = this.innerText;

//       var current = document.getElementsByClassName("q3-ans-clicked-3");
//       if (current.length === 0) {
//         this.className += " q3-ans-clicked-3";
//       } else {
//         current[0].className = current[0].className.replace(
//           " q3-ans-clicked-3",
//           ""
//         );

//         this.className += " q3-ans-clicked-3";
//       }
//     });
//   }
// }

// function submitQ3() {
//   if (
//     q3ClickedAnswer1 == "Feet" &&
//     q3ClickedAnswer2 == "Teeth" &&
//     q3ClickedAnswer3 == "Man"
//   ) {
//     alert("welldone");
//   } else {
//     alert("try again");
//   }
// }

// // Q5

// // function submitQ5() {
// //   let isCorrect = true;

// //   let ansTrack2 = "Bed";
// //   let cansdiv;
// //   let c;

// //   c = document.getElementsByClassName("q5-dd-grid-ans-box-column");

// //   for (var i = 0; i < c.length; i++) {
// //     if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
// //       cansdiv = document.getElementById("q5" + ansTrack2);
// //       setTimeout(() => {
// //         if (c[i].children[0].className === "q5-answer-box-drop-div") {
// //           c[i].style.backgroundColor = "white";
// //         } else {
// //           c[i].style.backgroundColor = "white";
// //         }

// //         cansdiv.parentElement.style.backgroundColor = "white";
// //       }, 1000);

// //       if (c[i].children[0].className === "q5-answer-box-drop-div") {
// //         c[i].style.backgroundColor = "#FF0000A8";
// //       } else {
// //         c[i].style.backgroundColor = "#FF0000A8";
// //       }

// //       cansdiv.parentElement.style.backgroundColor = "#46cd46";
// //       return;
// //     } else {
// //       if (ansTrack2 == "Bed") {
// //         ansTrack2 = "Wardrobe";
// //       } else if (ansTrack2 == "Wardrobe") {
// //         ansTrack2 = "Beside";
// //       } else if (ansTrack2 == "Beside") {
// //         ansTrack2 = "Ref";
// //       } else if (ansTrack2 == "Ref") {
// //         ansTrack2 = "Pan";
// //       } else if (ansTrack2 == "Pan") {
// //         ansTrack2 = "Oven";
// //       }
// //     }
// //   }

// //   if (isCorrect) {
// //     alert("welldone");
// //   }
// // }

// function dropQ5(event) {
//   event.preventDefault();

//   if (
//     (event.target.parentElement.className !== "q5-img-box" &&
//       event.target.parentElement.className !== "q5-answer-drop-div") ||
//     (event.target.parentElement.className === "q5-img-box" &&
//       event.target.className === "q5-answer-box-drop-div") ||
//     (event.target.parentElement.parentElement.className ===
//       "q5-dd-grid-ans-box-column" &&
//       event.target.className === "p-text")
//   ) {
//     var drop_target;
//     if (event.target.className == "p-text") {
//       drop_target = event.target.parentElement;
//     } else {
//       drop_target = event.target;
//     }

//     var drag_target_id = event.dataTransfer.getData("target_id");
//     var drag_target = document.getElementById(drag_target_id);

//     if (drop_target !== null && drag_target !== null) {
//       var tmp = document.createElement("span");
//       tmp.className = "hide";
//       drop_target.before(tmp);
//       drag_target.before(drop_target);
//       tmp.replaceWith(drag_target);
//     }
//   }
// }

// function submitQ5() {
//   let isCorrect = true;

//   let d;
//   let c;

//   c = document.getElementsByClassName("q5-dd-grid-ans-box-column-bed");
//   d = document.getElementsByClassName("q5-dd-grid-ans-box-column-kitchen");
//   for (var i = 0; i < c.length; i++) {
//     if (c[i].children[0].getAttribute("canswer") != "Bed") {
//       cansdivs = document.getElementsByClassName("Bed");
//       setTimeout(() => {
//         if (
//           c[i].children[0].className == "q5-answer-drop-div Kitchen" ||
//           c[i].children[0].className == "q5-answer-drop-div Bed"
//         ) {
//           c[i].style.backgroundColor = "white";
//         } else {
//           c[i].style.backgroundColor = "white";
//         }

//         for (var j = 0; j < cansdivs.length; j++) {
//           cansdivs[j].parentElement.style.backgroundColor = "white";
//         }
//       }, 1000);

//       c[i].style.backgroundColor = "#FF0000A8";

//       // cansdiv.style.backgroundColor = "#46cd46";
//       for (var j = 0; j < cansdivs.length; j++) {
//         if (
//           cansdivs[j].parentElement.className !==
//           "q5-dd-grid-ans-box-column-bed"
//         ) {
//           cansdivs[j].parentElement.style.backgroundColor = "#46cd46";
//         }
//       }
//       return;
//     }
//   }

//   for (var i = 0; i < c.length; i++) {
//     if (d[i].children[0].getAttribute("canswer") != "kitchen") {
//       cansdivs = document.getElementsByClassName("kitchen");
//       setTimeout(() => {
//         d[i].style.backgroundColor = "white";

//         for (var j = 0; j < cansdivs.length; j++) {
//           cansdivs[j].parentElement.style.backgroundColor = "white";
//         }
//       }, 1000);

//       d[i].style.backgroundColor = "#FF0000A8";

//       // cansdiv.style.backgroundColor = "#46cd46";
//       for (var j = 0; j < cansdivs.length; j++) {
//         if (
//           cansdivs[j].parentElement.className !==
//           "q5-dd-grid-ans-box-column-kitchen"
//         ) {
//           cansdivs[j].parentElement.style.backgroundColor = "#46cd46";
//         }
//       }
//       return;
//     }
//   }

//   if (isCorrect) {
//     alert("welldone");
//     // swapNextQuestion();
//   }
// }

// // q6

// function submitQ6() {
//   let isCorrect = true;

//   let d;
//   let c;

//   c = document.getElementsByClassName("q6-dd-grid-ans-box-column-living");
//   d = document.getElementsByClassName("q6-dd-grid-ans-box-column-bath");
//   for (var i = 0; i < c.length; i++) {
//     if (c[i].children[0].getAttribute("canswer") != "Living") {
//       cansdivs = document.getElementsByClassName("Living");
//       setTimeout(() => {
//         if (
//           c[i].children[0].className == "q6-answer-drop-div Bath" ||
//           c[i].children[0].className == "q6-answer-drop-div Living"
//         ) {
//           c[i].style.backgroundColor = "white";
//         } else {
//           c[i].style.backgroundColor = "white";
//         }

//         for (var j = 0; j < cansdivs.length; j++) {
//           cansdivs[j].parentElement.style.backgroundColor = "white";
//         }
//       }, 1000);

//       c[i].style.backgroundColor = "#FF0000A8";

//       // cansdiv.style.backgroundColor = "#46cd46";
//       for (var j = 0; j < cansdivs.length; j++) {
//         if (
//           cansdivs[j].parentElement.className !==
//           "q6-dd-grid-ans-box-column-living"
//         ) {
//           cansdivs[j].parentElement.style.backgroundColor = "#46cd46";
//         }
//       }
//       return;
//     }
//   }

//   for (var i = 0; i < c.length; i++) {
//     if (d[i].children[0].getAttribute("canswer") != "Bath") {
//       cansdivs = document.getElementsByClassName("Bath");
//       setTimeout(() => {
//         d[i].style.backgroundColor = "white";

//         for (var j = 0; j < cansdivs.length; j++) {
//           cansdivs[j].parentElement.style.backgroundColor = "white";
//         }
//       }, 1000);

//       d[i].style.backgroundColor = "#FF0000A8";

//       // cansdiv.style.backgroundColor = "#46cd46";
//       for (var j = 0; j < cansdivs.length; j++) {
//         if (
//           cansdivs[j].parentElement.className !==
//           "q6-dd-grid-ans-box-column-bath"
//         ) {
//           cansdivs[j].parentElement.style.backgroundColor = "#46cd46";
//         }
//       }
//       return;
//     }
//   }

//   if (isCorrect) {
//     alert("welldone");
//     // swapNextQuestion();
//   }
// }

// // q7

// function submitQ7() {
//   let isCorrect = true;

//   let d;
//   let c;

//   c = document.getElementsByClassName("q7-dd-grid-ans-box-column-garage");
//   d = document.getElementsByClassName("q7-dd-grid-ans-box-column-garden");
//   for (var i = 0; i < c.length; i++) {
//     if (c[i].children[0].getAttribute("canswer") != "Garage") {
//       cansdivs = document.getElementsByClassName("Garage");
//       setTimeout(() => {
//         if (
//           c[i].children[0].className == "q7-answer-drop-div Garden" ||
//           c[i].children[0].className == "q7-answer-drop-div Garage"
//         ) {
//           c[i].style.backgroundColor = "white";
//         } else {
//           c[i].style.backgroundColor = "white";
//         }

//         for (var j = 0; j < cansdivs.length; j++) {
//           cansdivs[j].parentElement.style.backgroundColor = "white";
//         }
//       }, 1000);

//       c[i].style.backgroundColor = "#FF0000A8";

//       // cansdiv.style.backgroundColor = "#46cd46";
//       for (var j = 0; j < cansdivs.length; j++) {
//         if (
//           cansdivs[j].parentElement.className !==
//           "q7-dd-grid-ans-box-column-garage"
//         ) {
//           cansdivs[j].parentElement.style.backgroundColor = "#46cd46";
//         }
//       }
//       return;
//     }
//   }

//   for (var i = 0; i < c.length; i++) {
//     if (d[i].children[0].getAttribute("canswer") != "Garden") {
//       cansdivs = document.getElementsByClassName("Garden");
//       setTimeout(() => {
//         d[i].style.backgroundColor = "white";

//         for (var j = 0; j < cansdivs.length; j++) {
//           cansdivs[j].parentElement.style.backgroundColor = "white";
//         }
//       }, 1000);

//       d[i].style.backgroundColor = "#FF0000A8";

//       // cansdiv.style.backgroundColor = "#46cd46";
//       for (var j = 0; j < cansdivs.length; j++) {
//         if (
//           cansdivs[j].parentElement.className !==
//           "q7-dd-grid-ans-box-column-garden"
//         ) {
//           cansdivs[j].parentElement.style.backgroundColor = "#46cd46";
//         }
//       }
//       return;
//     }
//   }

//   if (isCorrect) {
//     alert("welldone");
//     // swapNextQuestion();
//   }
// }

// // q4

// function submitQ4() {
//   var one = document.getElementById("q4One").checked;
//   var two = document.getElementById("q4Two").checked;
//   var three = document.getElementById("q4Three").checked;
//   var four = document.getElementById("q4Four").checked;
//   var five = document.getElementById("q4Five").checked;

//   if (one && three && five && !two && !four) {
//     alert("welldone");
//   } else {
//     alert("try again");
//   }
// }

// // q8

// function submitQ8() {
//   var one = document.getElementById("q8One").checked;
//   var two = document.getElementById("q8Two").checked;
//   var three = document.getElementById("q8Three").checked;
//   var four = document.getElementById("q8Four").checked;
//   var five = document.getElementById("q8Five").checked;
//   var six = document.getElementById("q8Six").checked;

//   if (one && three && four && six && !two && !five) {
//     alert("welldone");
//   } else {
//     alert("try again");
//   }
// }

//

// Q2

var q2ClickedWord_1 = "";
var q2ClickedWord_2 = "";
var q2ClickedWord_3 = "";
var q2ClickedWord_4 = "";
var q2ShouldNotClicked = "";

function q2_clicked_1(event) {
  if (event.target.className == "q2-word1") {
    event.target.className = "q2-word1 q2-word-clicked1";
    q2ClickedWord_1 = event.target.innerText;
  } else if (event.target.className == "q2-word1 q2-word-clicked1") {
    event.target.className = "q2-word1";
    q2ClickedWord_1 = "";
  }
}

function q2_clicked_2(event) {
  if (event.target.className == "q2-word1") {
    event.target.className = "q2-word1 q2-word-clicked1";
    q2ClickedWord_2 = event.target.innerText;
  } else if (event.target.className == "q2-word1 q2-word-clicked1") {
    event.target.className = "q2-word1";
    q2ClickedWord_2 = "";
  }
}

function q2_clicked_3(event) {
  if (event.target.className == "q2-word1") {
    event.target.className = "q2-word1 q2-word-clicked1";
    q2ClickedWord_3 = event.target.innerText;
  } else if (event.target.className == "q2-word1 q2-word-clicked1") {
    event.target.className = "q2-word1";
    q2ClickedWord_3 = "";
  }
}

function q2_clicked_4(event) {
  if (event.target.className == "q2-word1") {
    event.target.className = "q2-word1 q2-word-clicked1";
    q2ClickedWord_4 = event.target.innerText;
  } else if (event.target.className == "q2-word1 q2-word-clicked1") {
    event.target.className = "q2-word1";
    q2ClickedWord_4 = "";
  }
}

function clickedQ2(event) {
  if (event.target.className == "q2-word1") {
    event.target.className = "q2-word1 q2-word-clicked1 kt";
    q2ShouldNotClicked = event.target.innerText;
  } else if (event.target.className == "q2-word1 q2-word-clicked1 kt") {
    event.target.className = "q2-word1";
    q2ShouldNotClicked = "";
  }
}

function submitQ2() {
  let state = true;
  let block1 = document.getElementById("q2-word-container1").children;
  let block2 = document.getElementById("q2-word-container2").children;
  let block3 = document.getElementById("q2-word-container3").children;
  let block4 = document.getElementById("q2-word-container4").children;

  if (
    q2ClickedWord_1 === "slowly" &&
    q2ClickedWord_2 === "fast" &&
    q2ClickedWord_3 === "angrily" &&
    q2ClickedWord_4 === "beautifully" &&
    q2ShouldNotClicked == ""
  ) {
    state = true;
  } else {
    state = false;
  }

  for (let i = 0; i < block1.length; i++) {
    if (block1[i].className == "q2-word1 q2-word-clicked1 kt") {
      state = false;
    }
  }
  for (let i = 0; i < block2.length; i++) {
    if (block2[i].className == "q2-word1 q2-word-clicked1 kt") {
      state = false;
    }
  }
  for (let i = 0; i < block3.length; i++) {
    if (block3[i].className == "q2-word1 q2-word-clicked1 kt") {
      state = false;
    }
  }
  for (let i = 0; i < block4.length; i++) {
    if (block4[i].className == "q2-word1 q2-word-clicked1 kt") {
      state = false;
    }
  }

  if (state == true) {
    alert("weldone");
  } else {
    alert("try again");
  }
}

// Q4

// q2

var q4Row1ClickedWord = "";
var q4Row2ClickedWord = "";
var q4Row3ClickedWord = "";

var container1 = document.getElementById("q4-row1");
if (container1 != null) {
  var btns1 = container1.getElementsByClassName("q4-row1-word-container");
}

var container2 = document.getElementById("q4-row2");
if (container2 != null) {
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
  for (var i = 0; i < btns1.length; i++) {
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

    btns3[i].addEventListener("click", function () {
      q4Row3ClickedWord = this.id;

      var current = document.getElementsByClassName(
        "q4-row3-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q4-row3-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q4-row3-word-container-clicked",
          ""
        );

        this.className += " q4-row3-word-container-clicked";
      }
    });
  }
}

function submitQ4() {
  if (
    q4Row1ClickedWord === "heavily" &&
    q4Row2ClickedWord === "joyfully" &&
    q4Row3ClickedWord === "briefly"
  ) {
    alert("welldone");
  } else {
    alert("try again");
  }
}

// q7
var q7Row1ClickedWord = "";
var container = document.getElementById("q7-ans-cnt");
if (container != null) {
  var btns1 = container.getElementsByClassName("q7-word-container");

  for (var i = 0; i < btns1.length; i++) {
    btns1[i].addEventListener("click", function () {
      q7Row1ClickedWord = this.id;


      var current = document.getElementsByClassName(
        "q7-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q7-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q7-word-container-clicked",
          ""
        );

        this.className += " q7-word-container-clicked";
      }
    });
  }
}

function submitQ7() {
  if (q7Row1ClickedWord == "adverb") {
    alert("welldone");
  } else {
    alert("try again");
  }
}

// q8
var q8Row1ClickedWord = "";
var container = document.getElementById("q8-ans-cnt");

if (container != null) {
  var btns1 = container.getElementsByClassName("q8-word-container");

  for (var i = 0; i < btns1.length; i++) {
    btns1[i].addEventListener("click", function () {
      q8Row1ClickedWord = this.id;


      var current = document.getElementsByClassName(
        "q8-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q8-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q8-word-container-clicked",
          ""
        );

        this.className += " q8-word-container-clicked";
      }
    });
  }
}

function submitQ8() {
  if (q8Row1ClickedWord == "a") {
    alert("welldone");
  } else {
    alert("try again");
  }
}
