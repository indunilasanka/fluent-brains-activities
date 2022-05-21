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
  if (input.value !== actual && input.value !== "") {
    setTimeout(() => {
      input.style.color = "black";
    }, 2000);
    input.style.color = "#FF0000A8";
  } else if (input.value !== "") {
    input.style.color = "#46cd46";
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

  console.log(event.target);

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

var q1Row1ClickedImage = "";
var q1Row2ClickedImage = "";
var q1Row3ClickedImage = "";
var container1 = document.getElementById("q1-row1");
var btns1 = container1.getElementsByClassName("q1-row1-img-container");

var container2 = document.getElementById("q1-row2");
var btns2 = container2.getElementsByClassName("q1-row2-img-container");

var container3 = document.getElementById("q1-row3");
var btns3 = container3.getElementsByClassName("q1-row3-img-container");
//

for (var i = 0; i < btns1.length; i++) {
  btns1[i].addEventListener("click", function () {
    q1Row1ClickedImage = this.id;
    console.log(q1Row1ClickedImage);

    var current = document.getElementsByClassName(
      "q1-row1-img-container-clicked"
    );
    if (current.length === 0) {
      this.className += " q1-row1-img-container-clicked";
    } else {
      current[0].className = current[0].className.replace(
        " q1-row1-img-container-clicked",
        ""
      );

      this.className += " q1-row1-img-container-clicked";
    }
  });
  //
  btns2[i].addEventListener("click", function () {
    q1Row2ClickedImage = this.id;

    var current = document.getElementsByClassName(
      "q1-row2-img-container-clicked"
    );
    if (current.length === 0) {
      this.className += " q1-row2-img-container-clicked";
    } else {
      current[0].className = current[0].className.replace(
        " q1-row2-img-container-clicked",
        ""
      );

      this.className += " q1-row2-img-container-clicked";
    }
  });
  //
  btns3[i].addEventListener("click", function () {
    q1Row3ClickedImage = this.id;
    var current = document.getElementsByClassName(
      "q1-row3-img-container-clicked"
    );
    if (current.length === 0) {
      this.className += " q1-row3-img-container-clicked";
    } else {
      current[0].className = current[0].className.replace(
        " q1-row3-img-container-clicked",
        ""
      );

      this.className += " q1-row3-img-container-clicked";
    }
  });
}

function submitQ1() {
  if (
    q1Row1ClickedImage === "kite" &&
    q1Row2ClickedImage === "cat" &&
    q1Row3ClickedImage === "bee"
  ) {
    alert("welldone");
  } else {
    alert("try again");
  }
}

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

// q2

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

function checkMissingLettersAll(qId) {
  let isCorrect = true;

  if (qId === "q2") {
    const input1 = document.getElementById("q2input1");
    const input2 = document.getElementById("q2input2");

    const input3 = document.getElementById("q2input3");
    const input4 = document.getElementById("q2input4");
    const input5 = document.getElementById("q2input5");
    const input6 = document.getElementById("q2input6");
    const input7 = document.getElementById("q2input7");
    const input8 = document.getElementById("q2input8");
    const input9 = document.getElementById("q2input9");

    console.log(input1.value);

    if (input1.value !== "O") {
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

    if (input2.value !== "C") {
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

    if (input3.value !== "C") {
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

    if (input4.value !== "R") {
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

    if (input5.value !== "N") {
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

    if (input6.value !== "E") {
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

    if (input7.value !== "E") {
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

    if (input8.value !== "R") {
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

    if (input9.value !== "R") {
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
  } else if (qId === "q5") {
    const input1 = document.getElementById("q5input1");
    const input2 = document.getElementById("q5input2");
    const input3 = document.getElementById("q5input3");
    const input4 = document.getElementById("q5input4");

    if (input1.value.toUpperCase() !== "House".toUpperCase()) {
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

    if (input2.value.toUpperCase() !== "Temple".toUpperCase()) {
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

    if (input3.value.toUpperCase() !== "Apple".toUpperCase()) {
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

    if (input4.value.toUpperCase() !== "Farmer".toUpperCase()) {
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
    const input4 = document.getElementById("q6input4");

    if (input1.value.toUpperCase() !== "4".toUpperCase()) {
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

    if (input2.value.toUpperCase() !== "3".toUpperCase()) {
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

    if (input3.value.toUpperCase() !== "2".toUpperCase()) {
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
  } else {
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
    alert("welldone");
  }
}

function submitQ4() {
  let isCorrect = true;

  let ansTrack2 = "Sun";
  let cansdiv;
  let block;
  let c;

  block = document.getElementById("q4-answer-drop-box-container");
  c = document.getElementsByClassName("q4-dd-grid-ans-box-column");

  for (var i = 0; i < c.length; i++) {
    console.log(c[i].children[0]);
    if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
      cansdiv = document.getElementById("q4" + ansTrack2);
      setTimeout(() => {
        c[i].children[0].style.backgroundColor = "white";

        cansdiv.style.backgroundColor = "white";
      }, 1000);

      c[i].children[0].style.backgroundColor = "#FF0000A8";

      cansdiv.style.backgroundColor = "#46cd46";
      return;
    } else {
      if (ansTrack2 == "Sun") {
        ansTrack2 = "Tree";
      } else if (ansTrack2 == "Tree") {
        ansTrack2 = "Bird";
      } else if (ansTrack2 == "Bird") {
        ansTrack2 = "Umbrella";
      } else if (ansTrack2 == "Umbrella") {
        ansTrack2 = "Gloves";
      } else if (ansTrack2 == "Gloves") {
        ansTrack2 = "Sunflower";
      } else if (ansTrack2 == "Sunflower") {
        ansTrack2 = "Hose";
      } else if (ansTrack2 == "Hose") {
        ansTrack2 = "Butterfly";
      } else if (ansTrack2 == "Butterfly") {
        ansTrack2 = "Snail";
      } else if (ansTrack2 == "Snail") {
        ansTrack2 = "Plant";
      }
    }
  }

  if (isCorrect) {
    alert("welldone");
  }
}

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

function submitQ4() {
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
    alert("welldone");
  } else {
    alert("try again");
  }
}

// q5

function checkMissingLetterCase(id, actual) {
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
