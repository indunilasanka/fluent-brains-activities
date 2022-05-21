//global variables
let ctx;
let fps = 4;
let button = document.getElementById("clapbtn");
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 350;
let dogclap = false;
let mySound;
const questionsArray = ["q1", "q2", "q3", "q4"];
let currentQuestionNumber = 1;
let currentQuestionId = "q1";
let isSwapQuestion = false;

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
  if (input.value !== actual && input.value !== "") {
    setTimeout(() => {
      input.style.color = "black";
    }, 2000);
    input.style.color = "#FF0000A8";
  } else if (input.value !== "") {
    input.style.color = "#46cd46";
  }
}

// function checkMissingLettersAll(qId) {
//   let isCorrect = true;

//   if (qId === "q2") {
//     const input1 = document.getElementById("q2input1");
//     const input2 = document.getElementById("q2input2");
//     const input3 = document.getElementById("q2input3");
//     const input4 = document.getElementById("q2input4");
//     const input5 = document.getElementById("q2input5");
//     const input6 = document.getElementById("q2input6");
//     const input7 = document.getElementById("q2input7");
//     const input8 = document.getElementById("q2input8");
//     const input9 = document.getElementById("q2input9");
//     const input10 = document.getElementById("q2input10");
//     console.log(input1.value);

//     if (input1.value !== "B") {
//       isCorrect = false;
//       setTimeout(() => {
//         input1.style.color = "black";
//       }, 2000);
//       input1.style.color = "#FF0000A8";
//     }
//     if (input1.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input1.value = "";
//         input1.style.color = "black";
//       }, 2000);
//       input1.style.color = "#FF0000A8";
//       input1.value = "✖";
//     }

//     if (input2.value !== "D") {
//       isCorrect = false;
//       setTimeout(() => {
//         input2.style.color = "black";
//       }, 2000);
//       input2.style.color = "#FF0000A8";
//     }
//     if (input2.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input2.value = "";
//         input2.style.color = "black";
//       }, 2000);
//       input2.style.color = "#FF0000A8";
//       input2.value = "✖";
//     }

//     if (input3.value !== "H") {
//       isCorrect = false;
//       setTimeout(() => {
//         input3.style.color = "black";
//       }, 2000);
//       input3.style.color = "#FF0000A8";
//     }
//     if (input3.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input3.value = "";
//         input3.style.color = "black";
//       }, 2000);
//       input3.style.color = "#FF0000A8";
//       input3.value = "✖";
//     }

//     if (input4.value !== "L") {
//       isCorrect = false;
//       setTimeout(() => {
//         input4.style.color = "black";
//       }, 2000);
//       input4.style.color = "#FF0000A8";
//     }
//     if (input4.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input4.value = "";
//         input4.style.color = "black";
//       }, 2000);
//       input4.style.color = "#FF0000A8";
//       input4.value = "✖";
//     }

//     if (input5.value !== "N") {
//       isCorrect = false;
//       setTimeout(() => {
//         input5.style.color = "black";
//       }, 2000);
//       input5.style.color = "#FF0000A8";
//     }
//     if (input5.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input5.value = "";
//         input5.style.color = "black";
//       }, 2000);
//       input5.style.color = "#FF0000A8";
//       input5.value = "✖";
//     }

//     if (input6.value !== "P") {
//       isCorrect = false;
//       setTimeout(() => {
//         input6.style.color = "black";
//       }, 2000);
//       input6.style.color = "#FF0000A8";
//     }
//     if (input6.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input6.value = "";
//         input6.style.color = "black";
//       }, 2000);
//       input6.style.color = "#FF0000A8";
//       input6.value = "✖";
//     }

//     if (input7.value !== "T") {
//       isCorrect = false;
//       setTimeout(() => {
//         input7.style.color = "black";
//       }, 2000);
//       input7.style.color = "#FF0000A8";
//     }
//     if (input7.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input7.value = "";
//         input7.style.color = "black";
//       }, 2000);
//       input7.style.color = "#FF0000A8";
//       input7.value = "✖";
//     }

//     if (input8.value !== "V") {
//       isCorrect = false;
//       setTimeout(() => {
//         input8.style.color = "black";
//       }, 2000);
//       input8.style.color = "#FF0000A8";
//     }
//     if (input8.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input8.value = "";
//         input8.style.color = "black";
//       }, 2000);
//       input8.style.color = "#FF0000A8";
//       input8.value = "✖";
//     }

//     if (input9.value !== "X") {
//       isCorrect = false;
//       setTimeout(() => {
//         input9.style.color = "black";
//       }, 2000);
//       input9.style.color = "#FF0000A8";
//     }
//     if (input9.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input9.value = "";
//         input9.style.color = "black";
//       }, 2000);
//       input9.style.color = "#FF0000A8";
//       input9.value = "✖";
//     }

//     if (input10.value !== "Z") {
//       isCorrect = false;
//       setTimeout(() => {
//         input10.style.color = "black";
//       }, 2000);
//       input10.style.color = "#FF0000A8";
//     }
//     if (input10.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input10.value = "";
//         input10.style.color = "black";
//       }, 2000);
//       input10.style.color = "#FF0000A8";
//       input10.value = "✖";
//     }
//   } else {
//     const input1 = document.getElementById("q3input1");
//     const input2 = document.getElementById("q3input2");
//     const input3 = document.getElementById("q3input3");
//     const input4 = document.getElementById("q3input4");
//     const input5 = document.getElementById("q3input5");
//     const input6 = document.getElementById("q3input6");
//     const input7 = document.getElementById("q3input7");
//     const input8 = document.getElementById("q3input8");
//     const input9 = document.getElementById("q3input9");
//     const input10 = document.getElementById("q3input10");
//     const input11 = document.getElementById("q3input11");
//     const input12 = document.getElementById("q3input12");
//     const input13 = document.getElementById("q3input13");
//     const input14 = document.getElementById("q3input14");
//     const input15 = document.getElementById("q3input15");
//     const input16 = document.getElementById("q3input16");
//     const input17 = document.getElementById("q3input17");
//     console.log(input1.value);

//     if (input1.value !== "b") {
//       isCorrect = false;
//       setTimeout(() => {
//         input1.style.color = "black";
//       }, 2000);
//       input1.style.color = "#FF0000A8";
//     }
//     if (input1.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input1.value = "";
//         input1.style.color = "black";
//       }, 2000);
//       input1.style.color = "#FF0000A8";
//       input1.value = "✖";
//     }

//     if (input2.value !== "c") {
//       isCorrect = false;
//       setTimeout(() => {
//         input2.style.color = "black";
//       }, 2000);
//       input2.style.color = "#FF0000A8";
//     }
//     if (input2.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input2.value = "";
//         input2.style.color = "black";
//       }, 2000);
//       input2.style.color = "#FF0000A8";
//       input2.value = "✖";
//     }

//     if (input3.value !== "d") {
//       isCorrect = false;
//       setTimeout(() => {
//         input3.style.color = "black";
//       }, 2000);
//       input3.style.color = "#FF0000A8";
//     }
//     if (input3.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input3.value = "";
//         input3.style.color = "black";
//       }, 2000);
//       input3.style.color = "#FF0000A8";
//       input3.value = "✖";
//     }

//     if (input4.value !== "e") {
//       isCorrect = false;
//       setTimeout(() => {
//         input4.style.color = "black";
//       }, 2000);
//       input4.style.color = "#FF0000A8";
//     }
//     if (input4.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input4.value = "";
//         input4.style.color = "black";
//       }, 2000);
//       input4.style.color = "#FF0000A8";
//       input4.value = "✖";
//     }

//     if (input5.value !== "h") {
//       isCorrect = false;
//       setTimeout(() => {
//         input5.style.color = "black";
//       }, 2000);
//       input5.style.color = "#FF0000A8";
//     }
//     if (input5.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input5.value = "";
//         input5.style.color = "black";
//       }, 2000);
//       input5.style.color = "#FF0000A8";
//       input5.value = "✖";
//     }

//     if (input6.value !== "i") {
//       isCorrect = false;
//       setTimeout(() => {
//         input6.style.color = "black";
//       }, 2000);
//       input6.style.color = "#FF0000A8";
//     }
//     if (input6.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input6.value = "";
//         input6.style.color = "black";
//       }, 2000);
//       input6.style.color = "#FF0000A8";
//       input6.value = "✖";
//     }

//     if (input7.value !== "j") {
//       isCorrect = false;
//       setTimeout(() => {
//         input7.style.color = "black";
//       }, 2000);
//       input7.style.color = "#FF0000A8";
//     }
//     if (input7.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input7.value = "";
//         input7.style.color = "black";
//       }, 2000);
//       input7.style.color = "#FF0000A8";
//       input7.value = "✖";
//     }

//     if (input8.value !== "k") {
//       isCorrect = false;
//       setTimeout(() => {
//         input8.style.color = "black";
//       }, 2000);
//       input8.style.color = "#FF0000A8";
//     }
//     if (input8.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input8.value = "";
//         input8.style.color = "black";
//       }, 2000);
//       input8.style.color = "#FF0000A8";
//       input8.value = "✖";
//     }

//     if (input9.value !== "n") {
//       isCorrect = false;
//       setTimeout(() => {
//         input9.style.color = "black";
//       }, 2000);
//       input9.style.color = "#FF0000A8";
//     }
//     if (input9.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input9.value = "";
//         input9.style.color = "black";
//       }, 2000);
//       input9.style.color = "#FF0000A8";
//       input9.value = "✖";
//     }

//     if (input10.value !== "o") {
//       isCorrect = false;
//       setTimeout(() => {
//         input10.style.color = "black";
//       }, 2000);
//       input10.style.color = "#FF0000A8";
//     }
//     if (input10.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input10.value = "";
//         input10.style.color = "black";
//       }, 2000);
//       input10.style.color = "#FF0000A8";
//       input10.value = "✖";
//     }

//     if (input11.value !== "p") {
//       isCorrect = false;
//       setTimeout(() => {
//         input11.style.color = "black";
//       }, 2000);
//       input11.style.color = "#FF0000A8";
//     }
//     if (input11.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input11.value = "";
//         input11.style.color = "black";
//       }, 2000);
//       input11.style.color = "#FF0000A8";
//       input11.value = "✖";
//     }

//     if (input12.value !== "q") {
//       isCorrect = false;
//       setTimeout(() => {
//         input12.style.color = "black";
//       }, 2000);
//       input12.style.color = "#FF0000A8";
//     }
//     if (input12.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input12.value = "";
//         input12.style.color = "black";
//       }, 2000);
//       input12.style.color = "#FF0000A8";
//       input12.value = "✖";
//     }

//     if (input13.value !== "t") {
//       isCorrect = false;
//       setTimeout(() => {
//         input13.style.color = "black";
//       }, 2000);
//       input13.style.color = "#FF0000A8";
//     }
//     if (input13.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input13.value = "";
//         input13.style.color = "black";
//       }, 2000);
//       input13.style.color = "#FF0000A8";
//       input13.value = "✖";
//     }

//     if (input14.value !== "u") {
//       isCorrect = false;
//       setTimeout(() => {
//         input14.style.color = "black";
//       }, 2000);
//       input14.style.color = "#FF0000A8";
//     }
//     if (input14.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input14.value = "";
//         input14.style.color = "black";
//       }, 2000);
//       input14.style.color = "#FF0000A8";
//       input14.value = "✖";
//     }

//     if (input15.value !== "v") {
//       isCorrect = false;
//       setTimeout(() => {
//         input15.style.color = "black";
//       }, 2000);
//       input15.style.color = "#FF0000A8";
//     }
//     if (input15.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input15.value = "";
//         input15.style.color = "black";
//       }, 2000);
//       input15.style.color = "#FF0000A8";
//       input15.value = "✖";
//     }

//     if (input16.value !== "w") {
//       isCorrect = false;
//       setTimeout(() => {
//         input16.style.color = "black";
//       }, 2000);
//       input16.style.color = "#FF0000A8";
//     }
//     if (input16.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input16.value = "";
//         input16.style.color = "black";
//       }, 2000);
//       input16.style.color = "#FF0000A8";
//       input16.value = "✖";
//     }

//     if (input17.value !== "y") {
//       isCorrect = false;
//       setTimeout(() => {
//         input17.style.color = "black";
//       }, 2000);
//       input17.style.color = "#FF0000A8";
//     }
//     if (input17.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input17.value = "";
//         input17.style.color = "black";
//       }, 2000);
//       input17.style.color = "#FF0000A8";
//       input17.value = "✖";
//     }
//   }
//   if (isCorrect) {
//     alert("welldone");
//   }
// }

// function checkMissingNumbersAll(qId) {
//   let isCorrect = true;

//   if (qId === "q1") {
//     const input1 = document.getElementById("q1input1");
//     const input2 = document.getElementById("q1input2");
//     const input3 = document.getElementById("q1input3");
//     const input4 = document.getElementById("q1input4");
//     const input5 = document.getElementById("q1input5");

//     if (input1.value != "6") {
//       input1.style.color = "#FF0000A8";
//       input1.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input1.style.color = "black";
//         input1.value = "";
//       }, 1000);
//     }
//     if (input2.value != "10") {
//       input2.style.color = "#FF0000A8";
//       input2.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input2.style.color = "black";
//         input2.value = "";
//       }, 1000);
//     }
//     if (input3.value != "13") {
//       input3.style.color = "#FF0000A8";
//       input3.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input3.style.color = "black";
//         input3.value = "";
//       }, 1000);
//     }
//     if (input4.value != "14") {
//       input4.style.color = "#FF0000A8";
//       input4.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input4.style.color = "black";
//         input4.value = "";
//       }, 1000);
//     }
//     if (input5.value != "17") {
//       input5.style.color = "#FF0000A8";
//       input5.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input5.style.color = "black";
//         input5.value = "";
//       }, 1000);
//     }
//   } else if (qId === "q11") {
//     const input6 = document.getElementById("q11input6");
//     const input7 = document.getElementById("q11input7");
//     const input8 = document.getElementById("q11input8");
//     const input9 = document.getElementById("q11input9");
//     const input10 = document.getElementById("q11input10");

//     if (input6.value != "21") {
//       input6.style.color = "#FF0000A8";
//       input6.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input6.style.color = "black";
//         input6.value = "";
//       }, 1000);
//     }
//     if (input7.value != "23") {
//       input7.style.color = "#FF0000A8";
//       input7.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input7.style.color = "black";
//         input7.value = "";
//       }, 1000);
//     }
//     if (input8.value != "25") {
//       input8.style.color = "#FF0000A8";
//       input8.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input8.style.color = "black";
//         input8.value = "";
//       }, 1000);
//     }
//     if (input9.value != "28") {
//       input9.style.color = "#FF0000A8";
//       input9.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input9.style.color = "black";
//         input9.value = "";
//       }, 1000);
//     }
//     if (input10.value != "39") {
//       input10.style.color = "#FF0000A8";
//       input10.value = "✖";
//       displayHelpAction(qId);
//       isCorrect = false;
//       setTimeout(() => {
//         input10.style.color = "black";
//         input10.value = "";
//       }, 1000);
//     }
//   }
//   if (isCorrect) {
//     swapNextQuestion();
//   }
// }

// function displayHelpAction(qId) {
//   let id = "explanation-action-" + qId;
//   const action = document.getElementById(id);
//   action.style.display = "inline-block";
// }

// function openHelpAction(id) {
//   const helpModal = document.getElementById(id);
//   helpModal.style.display = "block";
// }

// function closeHelpAction(id) {
//   const helpModal = document.getElementById(id);
//   helpModal.style.display = "none";
// }

function drag(event) {
  console.log(event.target.className);
  event.detail = event.target.id;
  event.dataTransfer.setData("target_id", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();

  console.log(event.target.parentElement.className);

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

function dropQ6(event) {
  event.preventDefault();

  console.log(event.target.parentElement.className);

  if (
    (event.target.parentElement.className !== "q4-letter-container" &&
      event.target.parentElement.className !== "q4-answer-drop-div") ||
    (event.target.parentElement.className === "q4-letter-container" &&
      event.target.className === "q4-answer-box-drop-div") ||
    (event.target.parentElement.parentElement.className ===
      "q4-dd-grid-ans-box-column" &&
      event.target.className === "p-text")
  ) {
    var drop_target;
    if (event.target.className == "p-text") {
      drop_target = event.target.parentElement;
    } else {
      drop_target = event.target;
    }

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

function dropQ1(event) {
  event.preventDefault();

  console.log(event.target);

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

function dropQ5(event) {
  event.preventDefault();

  console.log(event.target);

  if (
    event.target.parentElement.className !== "q5-letter-container" ||
    (event.target.parentElement.className === "q5-letter-container" &&
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

// function submitOrdering(quizId) {
//   let isCorrect = true;
//   let ansTrack = 1;
//   let ansTrack2 = 21;
//   let cansdiv;
//   let block;
//   let c;

//   if (quizId === 1) {
//     block = document.getElementById("q7block1");
//     c = block.children;
//     for (var i = 0; i < c.length; i++) {
//       if (c[i].getAttribute("canswer") != ansTrack) {
//         cansdiv = document.getElementById("q7a" + ansTrack);
//         setTimeout(() => {
//           c[i].style.backgroundColor = "#419ae2";
//           cansdiv.style.backgroundColor = "#419ae2";
//         }, 1000);
//         c[i].style.backgroundColor = "#FF0000A8";
//         cansdiv.style.backgroundColor = "#46cd46";
//         return;
//       } else {
//         ansTrack++;
//       }
//     }

//     block = document.getElementById("q7block2");
//     c = block.children;
//     for (var i = 0; i < c.length; i++) {
//       if (c[i].getAttribute("canswer") != ansTrack) {
//         cansdiv = document.getElementById("q7a" + ansTrack);
//         setTimeout(() => {
//           c[i].style.backgroundColor = "#419ae2";
//           cansdiv.style.backgroundColor = "#419ae2";
//         }, 1000);
//         c[i].style.backgroundColor = "#FF0000A8";
//         cansdiv.style.backgroundColor = "#46cd46";
//         return;
//       } else {
//         ansTrack++;
//       }
//     }

//     block = document.getElementById("q7block3");
//     c = block.children;
//     for (var i = 0; i < c.length; i++) {
//       if (c[i].getAttribute("canswer") != ansTrack) {
//         cansdiv = document.getElementById("q7a" + ansTrack);
//         setTimeout(() => {
//           c[i].style.backgroundColor = "#419ae2";
//           cansdiv.style.backgroundColor = "#419ae2";
//         }, 1000);
//         c[i].style.backgroundColor = "#FF0000A8";
//         cansdiv.style.backgroundColor = "#46cd46";
//         return;
//       } else {
//         ansTrack++;
//       }
//     }

//     block = document.getElementById("q7block4");
//     c = block.children;
//     for (var i = 0; i < c.length; i++) {
//       if (c[i].getAttribute("canswer") != ansTrack) {
//         cansdiv = document.getElementById("q7a" + ansTrack);
//         setTimeout(() => {
//           c[i].style.backgroundColor = "#419ae2";
//           cansdiv.style.backgroundColor = "#419ae2";
//         }, 1000);
//         c[i].style.backgroundColor = "#FF0000A8";
//         cansdiv.style.backgroundColor = "#46cd46";
//         return;
//       } else {
//         ansTrack++;
//       }
//     }
//   } else {
//     block = document.getElementById("q8block1");
//     c = block.children;
//     for (var i = 0; i < c.length; i++) {
//       if (c[i].getAttribute("canswer") != ansTrack2) {
//         cansdiv = document.getElementById("q8a" + ansTrack2);
//         setTimeout(() => {
//           c[i].style.backgroundColor = "#419ae2";
//           cansdiv.style.backgroundColor = "#419ae2";
//         }, 1000);
//         c[i].style.backgroundColor = "#FF0000A8";
//         cansdiv.style.backgroundColor = "#46cd46";
//         return;
//       } else {
//         ansTrack2++;
//       }
//     }

//     block = document.getElementById("q8block2");
//     c = block.children;
//     for (var i = 0; i < c.length; i++) {
//       if (c[i].getAttribute("canswer") != ansTrack2) {
//         cansdiv = document.getElementById("q8a" + ansTrack2);
//         setTimeout(() => {
//           c[i].style.backgroundColor = "#419ae2";
//           cansdiv.style.backgroundColor = "#419ae2";
//         }, 1000);
//         c[i].style.backgroundColor = "#FF0000A8";
//         cansdiv.style.backgroundColor = "#46cd46";
//         return;
//       } else {
//         ansTrack2++;
//       }
//     }

//     block = document.getElementById("q8block3");
//     c = block.children;
//     for (var i = 0; i < c.length; i++) {
//       if (c[i].getAttribute("canswer") != ansTrack2) {
//         cansdiv = document.getElementById("q8a" + ansTrack2);
//         setTimeout(() => {
//           c[i].style.backgroundColor = "#419ae2";
//           cansdiv.style.backgroundColor = "#419ae2";
//         }, 1000);
//         c[i].style.backgroundColor = "#FF0000A8";
//         cansdiv.style.backgroundColor = "#46cd46";
//         return;
//       } else {
//         ansTrack2++;
//       }
//     }

//     block = document.getElementById("q8block4");
//     c = block.children;
//     for (var i = 0; i < c.length; i++) {
//       if (c[i].getAttribute("canswer") != ansTrack2) {
//         cansdiv = document.getElementById("q8a" + ansTrack2);
//         setTimeout(() => {
//           c[i].style.backgroundColor = "#419ae2";
//           cansdiv.style.backgroundColor = "#419ae2";
//         }, 1000);
//         c[i].style.backgroundColor = "#FF0000A8";
//         cansdiv.style.backgroundColor = "#46cd46";
//         return;
//       } else {
//         ansTrack2++;
//       }
//     }
//   }

//   if (isCorrect) {
//     swapNextQuestion();
//   }
// }

// var q1Row1ClickedWord = "";
// var q1Row2ClickedWord = "";
// var q1Row3ClickedWord = "";
// var container1 = document.getElementById("q1-row1");
// var btns1 = container1.getElementsByClassName("q1-row1-img-container");

// var container2 = document.getElementById("q1-row2");
// var btns2 = container2.getElementsByClassName("q1-row2-img-container");

// var container3 = document.getElementById("q1-row3");
// var btns3 = container3.getElementsByClassName("q1-row3-img-container");
// //

// for (var i = 0; i < btns1.length; i++) {
//   btns1[i].addEventListener("click", function () {
//     q1Row1ClickedWord = this.id;
//     console.log(q1Row1ClickedWord);

//     var current = document.getElementsByClassName(
//       "q1-row1-img-container-clicked"
//     );
//     if (current.length === 0) {
//       this.className += " q1-row1-img-container-clicked";
//     } else {
//       current[0].className = current[0].className.replace(
//         " q1-row1-img-container-clicked",
//         ""
//       );

//       this.className += " q1-row1-img-container-clicked";
//     }
//   });
//   //
//   btns2[i].addEventListener("click", function () {
//     q1Row2ClickedWord = this.id;

//     var current = document.getElementsByClassName(
//       "q1-row2-img-container-clicked"
//     );
//     if (current.length === 0) {
//       this.className += " q1-row2-img-container-clicked";
//     } else {
//       current[0].className = current[0].className.replace(
//         " q1-row2-img-container-clicked",
//         ""
//       );

//       this.className += " q1-row2-img-container-clicked";
//     }
//   });
//   //
//   btns3[i].addEventListener("click", function () {
//     q1Row3ClickedWord = this.id;
//     var current = document.getElementsByClassName(
//       "q1-row3-img-container-clicked"
//     );
//     if (current.length === 0) {
//       this.className += " q1-row3-img-container-clicked";
//     } else {
//       current[0].className = current[0].className.replace(
//         " q1-row3-img-container-clicked",
//         ""
//       );

//       this.className += " q1-row3-img-container-clicked";
//     }
//   });
// }

// function submitQ1() {
//   if (
//     q1Row1ClickedWord === "kite" &&
//     q1Row2ClickedWord === "cat" &&
//     q1Row3ClickedWord === "bee"
//   ) {
//     alert("welldone");
//   } else {
//     alert("try again");
//   }
// }

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

// function checkMissingLetter(id, actual) {
//   const input = document.getElementById(id);
//   if (input.value !== actual && input.value !== "") {
//     setTimeout(() => {
//       input.style.color = "black";
//     }, 2000);
//     input.style.color = "#FF0000A8";
//   } else if (input.value !== "") {
//     input.style.color = "#46cd46";
//   }
// }

// function checkMissingLettersAll(qId) {
//   let isCorrect = true;

//   if (qId === "q2") {
//     const input1 = document.getElementById("q2input1");
//     const input2 = document.getElementById("q2input2");

//     const input3 = document.getElementById("q2input3");
//     const input4 = document.getElementById("q2input4");
//     const input5 = document.getElementById("q2input5");
//     const input6 = document.getElementById("q2input6");
//     const input7 = document.getElementById("q2input7");
//     const input8 = document.getElementById("q2input8");
//     const input9 = document.getElementById("q2input9");

//     console.log(input1.value);

//     if (input1.value !== "O") {
//       isCorrect = false;
//       setTimeout(() => {
//         input1.style.color = "black";
//       }, 2000);
//       input1.style.color = "#FF0000A8";
//     }
//     if (input1.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input1.value = "";
//         input1.style.color = "black";
//       }, 2000);
//       input1.style.color = "#FF0000A8";
//       input1.value = "✖";
//     }

//     if (input2.value !== "C") {
//       isCorrect = false;
//       setTimeout(() => {
//         input2.style.color = "black";
//       }, 2000);
//       input2.style.color = "#FF0000A8";
//     }
//     if (input2.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input2.value = "";
//         input2.style.color = "black";
//       }, 2000);
//       input2.style.color = "#FF0000A8";
//       input2.value = "✖";
//     }

//     if (input3.value !== "C") {
//       isCorrect = false;
//       setTimeout(() => {
//         input3.style.color = "black";
//       }, 2000);
//       input3.style.color = "#FF0000A8";
//     }
//     if (input3.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input3.value = "";
//         input3.style.color = "black";
//       }, 2000);
//       input3.style.color = "#FF0000A8";
//       input3.value = "✖";
//     }

//     if (input4.value !== "R") {
//       isCorrect = false;
//       setTimeout(() => {
//         input4.style.color = "black";
//       }, 2000);
//       input4.style.color = "#FF0000A8";
//     }
//     if (input4.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input4.value = "";
//         input4.style.color = "black";
//       }, 2000);
//       input4.style.color = "#FF0000A8";
//       input4.value = "✖";
//     }

//     if (input5.value !== "N") {
//       isCorrect = false;
//       setTimeout(() => {
//         input5.style.color = "black";
//       }, 2000);
//       input5.style.color = "#FF0000A8";
//     }
//     if (input5.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input5.value = "";
//         input5.style.color = "black";
//       }, 2000);
//       input5.style.color = "#FF0000A8";
//       input5.value = "✖";
//     }

//     if (input6.value !== "E") {
//       isCorrect = false;
//       setTimeout(() => {
//         input6.style.color = "black";
//       }, 2000);
//       input6.style.color = "#FF0000A8";
//     }
//     if (input6.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input6.value = "";
//         input6.style.color = "black";
//       }, 2000);
//       input6.style.color = "#FF0000A8";
//       input6.value = "✖";
//     }

//     if (input7.value !== "E") {
//       isCorrect = false;
//       setTimeout(() => {
//         input7.style.color = "black";
//       }, 2000);
//       input7.style.color = "#FF0000A8";
//     }
//     if (input7.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input7.value = "";
//         input7.style.color = "black";
//       }, 2000);
//       input7.style.color = "#FF0000A8";
//       input7.value = "✖";
//     }

//     if (input8.value !== "R") {
//       isCorrect = false;
//       setTimeout(() => {
//         input8.style.color = "black";
//       }, 2000);
//       input8.style.color = "#FF0000A8";
//     }
//     if (input8.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input8.value = "";
//         input8.style.color = "black";
//       }, 2000);
//       input8.style.color = "#FF0000A8";
//       input8.value = "✖";
//     }

//     if (input9.value !== "R") {
//       isCorrect = false;
//       setTimeout(() => {
//         input9.style.color = "black";
//       }, 2000);
//       input9.style.color = "#FF0000A8";
//     }
//     if (input9.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input9.value = "";
//         input9.style.color = "black";
//       }, 2000);
//       input9.style.color = "#FF0000A8";
//       input9.value = "✖";
//     }
//   } else {
//     const input1 = document.getElementById("q3input1");
//     const input2 = document.getElementById("q3input2");
//     const input3 = document.getElementById("q3input3");
//     const input4 = document.getElementById("q3input4");
//     const input5 = document.getElementById("q3input5");
//     const input6 = document.getElementById("q3input6");
//     const input7 = document.getElementById("q3input7");
//     const input8 = document.getElementById("q3input8");
//     const input9 = document.getElementById("q3input9");
//     const input10 = document.getElementById("q3input10");
//     const input11 = document.getElementById("q3input11");
//     const input12 = document.getElementById("q3input12");
//     const input13 = document.getElementById("q3input13");
//     const input14 = document.getElementById("q3input14");
//     const input15 = document.getElementById("q3input15");
//     const input16 = document.getElementById("q3input16");
//     const input17 = document.getElementById("q3input17");
//     console.log(input1.value);

//     if (input1.value !== "b") {
//       isCorrect = false;
//       setTimeout(() => {
//         input1.style.color = "black";
//       }, 2000);
//       input1.style.color = "#FF0000A8";
//     }
//     if (input1.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input1.value = "";
//         input1.style.color = "black";
//       }, 2000);
//       input1.style.color = "#FF0000A8";
//       input1.value = "✖";
//     }

//     if (input2.value !== "c") {
//       isCorrect = false;
//       setTimeout(() => {
//         input2.style.color = "black";
//       }, 2000);
//       input2.style.color = "#FF0000A8";
//     }
//     if (input2.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input2.value = "";
//         input2.style.color = "black";
//       }, 2000);
//       input2.style.color = "#FF0000A8";
//       input2.value = "✖";
//     }

//     if (input3.value !== "d") {
//       isCorrect = false;
//       setTimeout(() => {
//         input3.style.color = "black";
//       }, 2000);
//       input3.style.color = "#FF0000A8";
//     }
//     if (input3.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input3.value = "";
//         input3.style.color = "black";
//       }, 2000);
//       input3.style.color = "#FF0000A8";
//       input3.value = "✖";
//     }

//     if (input4.value !== "e") {
//       isCorrect = false;
//       setTimeout(() => {
//         input4.style.color = "black";
//       }, 2000);
//       input4.style.color = "#FF0000A8";
//     }
//     if (input4.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input4.value = "";
//         input4.style.color = "black";
//       }, 2000);
//       input4.style.color = "#FF0000A8";
//       input4.value = "✖";
//     }

//     if (input5.value !== "h") {
//       isCorrect = false;
//       setTimeout(() => {
//         input5.style.color = "black";
//       }, 2000);
//       input5.style.color = "#FF0000A8";
//     }
//     if (input5.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input5.value = "";
//         input5.style.color = "black";
//       }, 2000);
//       input5.style.color = "#FF0000A8";
//       input5.value = "✖";
//     }

//     if (input6.value !== "i") {
//       isCorrect = false;
//       setTimeout(() => {
//         input6.style.color = "black";
//       }, 2000);
//       input6.style.color = "#FF0000A8";
//     }
//     if (input6.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input6.value = "";
//         input6.style.color = "black";
//       }, 2000);
//       input6.style.color = "#FF0000A8";
//       input6.value = "✖";
//     }

//     if (input7.value !== "j") {
//       isCorrect = false;
//       setTimeout(() => {
//         input7.style.color = "black";
//       }, 2000);
//       input7.style.color = "#FF0000A8";
//     }
//     if (input7.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input7.value = "";
//         input7.style.color = "black";
//       }, 2000);
//       input7.style.color = "#FF0000A8";
//       input7.value = "✖";
//     }

//     if (input8.value !== "k") {
//       isCorrect = false;
//       setTimeout(() => {
//         input8.style.color = "black";
//       }, 2000);
//       input8.style.color = "#FF0000A8";
//     }
//     if (input8.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input8.value = "";
//         input8.style.color = "black";
//       }, 2000);
//       input8.style.color = "#FF0000A8";
//       input8.value = "✖";
//     }

//     if (input9.value !== "n") {
//       isCorrect = false;
//       setTimeout(() => {
//         input9.style.color = "black";
//       }, 2000);
//       input9.style.color = "#FF0000A8";
//     }
//     if (input9.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input9.value = "";
//         input9.style.color = "black";
//       }, 2000);
//       input9.style.color = "#FF0000A8";
//       input9.value = "✖";
//     }

//     if (input10.value !== "o") {
//       isCorrect = false;
//       setTimeout(() => {
//         input10.style.color = "black";
//       }, 2000);
//       input10.style.color = "#FF0000A8";
//     }
//     if (input10.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input10.value = "";
//         input10.style.color = "black";
//       }, 2000);
//       input10.style.color = "#FF0000A8";
//       input10.value = "✖";
//     }

//     if (input11.value !== "p") {
//       isCorrect = false;
//       setTimeout(() => {
//         input11.style.color = "black";
//       }, 2000);
//       input11.style.color = "#FF0000A8";
//     }
//     if (input11.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input11.value = "";
//         input11.style.color = "black";
//       }, 2000);
//       input11.style.color = "#FF0000A8";
//       input11.value = "✖";
//     }

//     if (input12.value !== "q") {
//       isCorrect = false;
//       setTimeout(() => {
//         input12.style.color = "black";
//       }, 2000);
//       input12.style.color = "#FF0000A8";
//     }
//     if (input12.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input12.value = "";
//         input12.style.color = "black";
//       }, 2000);
//       input12.style.color = "#FF0000A8";
//       input12.value = "✖";
//     }

//     if (input13.value !== "t") {
//       isCorrect = false;
//       setTimeout(() => {
//         input13.style.color = "black";
//       }, 2000);
//       input13.style.color = "#FF0000A8";
//     }
//     if (input13.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input13.value = "";
//         input13.style.color = "black";
//       }, 2000);
//       input13.style.color = "#FF0000A8";
//       input13.value = "✖";
//     }

//     if (input14.value !== "u") {
//       isCorrect = false;
//       setTimeout(() => {
//         input14.style.color = "black";
//       }, 2000);
//       input14.style.color = "#FF0000A8";
//     }
//     if (input14.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input14.value = "";
//         input14.style.color = "black";
//       }, 2000);
//       input14.style.color = "#FF0000A8";
//       input14.value = "✖";
//     }

//     if (input15.value !== "v") {
//       isCorrect = false;
//       setTimeout(() => {
//         input15.style.color = "black";
//       }, 2000);
//       input15.style.color = "#FF0000A8";
//     }
//     if (input15.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input15.value = "";
//         input15.style.color = "black";
//       }, 2000);
//       input15.style.color = "#FF0000A8";
//       input15.value = "✖";
//     }

//     if (input16.value !== "w") {
//       isCorrect = false;
//       setTimeout(() => {
//         input16.style.color = "black";
//       }, 2000);
//       input16.style.color = "#FF0000A8";
//     }
//     if (input16.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input16.value = "";
//         input16.style.color = "black";
//       }, 2000);
//       input16.style.color = "#FF0000A8";
//       input16.value = "✖";
//     }

//     if (input17.value !== "y") {
//       isCorrect = false;
//       setTimeout(() => {
//         input17.style.color = "black";
//       }, 2000);
//       input17.style.color = "#FF0000A8";
//     }
//     if (input17.value == "") {
//       isCorrect = false;

//       setTimeout(() => {
//         input17.value = "";
//         input17.style.color = "black";
//       }, 2000);
//       input17.style.color = "#FF0000A8";
//       input17.value = "✖";
//     }
//   }
//   if (isCorrect) {
//     alert("welldone");
//   }
// }

// localStorage["currentQNum"] = 1;
// console.log(localStorage["currentQNum"]);

// if (localStorage["currentQNum"] > 1) {
//   var i;
//   for (i = 0; i < parseInt(localStorage["currentQNum"]) - 1; i++) {
//     document.getElementById(questionsArray[i]).className = "question-hide";
//   }

//   document.getElementById(
//     questionsArray[localStorage["currentQNum"] - 1]
//   ).className = "question-display";
// }

// function swapNextQuestion() {
//   console.log(localStorage["currentQNum"]);
//   console.log(currentQuestionNumber);
//   //   localStorage["currentQNum"] = currentQuestionNumber;
//   if (!isSwapQuestion) {
//     isSwapQuestion = true;
//     var answer = document.getElementById(
//       questionsArray[localStorage["currentQNum"] - 1]
//     );
//     dogclap = true;

//     if (currentQuestionNumber === 1) {
//       setTimeout(() => {
//         playSound("One");
//       }, 1000);
//     }

//     setTimeout(() => {
//       answer.className = "question-hide";
//       var nextQElement = document.getElementById(
//         questionsArray[localStorage["currentQNum"]]
//       );

//       nextQElement.className = "question-display";
//       currentQuestionNumber = currentQuestionNumber + 1;
//       localStorage["currentQNum"] = parseInt(localStorage["currentQNum"]) + 1;
//       document.getElementById("question-count").innerHTML =
//         currentQuestionNumber;
//       dogclap = false;
//       isSwapQuestion = false;
//     }, 1000);
//   }
// }
if (sessionStorage.getItem("currentQNum") == null) {
  sessionStorage.setItem("currentQNum", 1);
}

console.log(sessionStorage.getItem("currentQNum"));

if (sessionStorage.getItem("currentQNum") > 1) {
  var i;
  for (i = 0; i < parseInt(sessionStorage.getItem("currentQNum")) - 1; i++) {
    document.getElementById(questionsArray[i]).className = "question-hide";
  }

  document.getElementById(
    questionsArray[sessionStorage.getItem("currentQNum") - 1]
  ).className = "question-display";
}

function swapNextQuestion() {
  setTimeout(() => {
    closePopup();
  }, 1000);

  console.log(sessionStorage.getItem("currentQNum"));
  console.log(currentQuestionNumber);
  //   sessionStorage.getItem("currentQNum") = currentQuestionNumber;
  if (!isSwapQuestion) {
    isSwapQuestion = true;
    var answer = document.getElementById(
      questionsArray[sessionStorage.getItem("currentQNum") - 1]
    );
    dogclap = true;

    // if (currentQuestionNumber === 1) {
    //   setTimeout(() => {
    //     playSound("One");
    //   }, 1000);
    // }

    setTimeout(() => {
      answer.className = "question-hide";
      var nextQElement = document.getElementById(
        questionsArray[sessionStorage.getItem("currentQNum")]
      );

      nextQElement.className = "question-display";
      currentQuestionNumber = currentQuestionNumber + 1;
      sessionStorage.setItem(
        "currentQNum",
        parseInt(sessionStorage.getItem("currentQNum")) + 1
      );
      // document.getElementById("question-count").innerHTML =
      //   currentQuestionNumber;
      dogclap = false;
      isSwapQuestion = false;
    }, 1000);
  }
}

function clearSession() {
  sessionStorage.clear();
}

function submitQ1() {
  let isCorrect = true;

  let ansTrack2 = "Began";
  let cansdiv;
  let block;
  let c;

  block = document.getElementById("q1-answer-drop-box-container");
  c = document.getElementsByClassName("q1-dd-grid-ans-box-column");

  for (var i = 0; i < c.length; i++) {
    console.log(c[i].children[0]);
    if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
      cansdiv = document.getElementById("q1" + ansTrack2);
      setTimeout(() => {
        c[i].children[0].style.backgroundColor = "white";

        cansdiv.style.backgroundColor = "white";
      }, 1000);

      c[i].children[0].style.backgroundColor = "#FF0000A8";

      cansdiv.style.backgroundColor = "#46cd46";
      return;
    } else {
      if (ansTrack2 == "Began") {
        ansTrack2 = "Bit";
      } else if (ansTrack2 == "Bit") {
        ansTrack2 = "Broke";
      } else if (ansTrack2 == "Broke") {
        ansTrack2 = "Built";
      } else if (ansTrack2 == "Built") {
        ansTrack2 = "Burnt";
      } else if (ansTrack2 == "Burnt") {
        ansTrack2 = "Bought";
      } else if (ansTrack2 == "Bought") {
        ansTrack2 = "Caught";
      } else if (ansTrack2 == "Caught") {
        ansTrack2 = "Chose";
      } else if (ansTrack2 == "Chose") {
        ansTrack2 = "Came";
      } else if (ansTrack2 == "Came") {
        ansTrack2 = "Cut";
      }
    }
  }

  if (isCorrect) {
    // alert("welldone");
    swapNextQuestion();
  }
}

function submitQ1Join() {
  let isCorrect = true;

  let ansTrack2 = "Began";
  let cansdiv;
  let block;
  let c;

  block = document.getElementById("q1-answer-drop-box-container");
  c = document.getElementsByClassName("q1-dd-grid-ans-box-column");

  for (var i = 0; i < c.length; i++) {
    console.log(c[i].children[0]);
    if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
      cansdiv = document.getElementById("q1" + ansTrack2);
      setTimeout(() => {
        c[i].children[0].style.backgroundColor = "white";

        cansdiv.style.backgroundColor = "white";
      }, 1000);

      c[i].children[0].style.backgroundColor = "#FF0000A8";

      cansdiv.style.backgroundColor = "#46cd46";
      return;
    } else {
      if (ansTrack2 == "Began") {
        ansTrack2 = "Bit";
      } else if (ansTrack2 == "Bit") {
        ansTrack2 = "Broke";
      } else if (ansTrack2 == "Broke") {
        ansTrack2 = "Built";
      } else if (ansTrack2 == "Built") {
        ansTrack2 = "Burnt";
      } else if (ansTrack2 == "Burnt") {
        ansTrack2 = "Bought";
      } else if (ansTrack2 == "Bought") {
        ansTrack2 = "Caught";
      } else if (ansTrack2 == "Caught") {
        ansTrack2 = "Chose";
      } else if (ansTrack2 == "Chose") {
        ansTrack2 = "Came";
      } else if (ansTrack2 == "Came") {
        ansTrack2 = "Cut";
      }
    }
  }

  if (isCorrect) {
    // alert("welldone");
    openPopup();
  }
}

// q2

var q1Row1ClickedWord = "";
var q1Row2ClickedWord = "";
var q1Row3ClickedWord = "";
var q1Row4ClickedWord = "";
var container1 = document.getElementById("q1-row1");
if (container1 != null) {
  var btns1 = container1.getElementsByClassName("q1-row1-word-container");
}

var container2 = document.getElementById("q1-row2");
if (container2 != null) {
  console.log("i am in the container 2");
  var btns2 = container2.getElementsByClassName("q1-row2-word-container");
}

var container3 = document.getElementById("q1-row3");
if (container3 != null) {
  var btns3 = container3.getElementsByClassName("q1-row3-word-container");
}

var container4 = document.getElementById("q1-row4");
if (container4 !== null) {
  var btns4 = container4.getElementsByClassName("q1-row4-word-container");
}

//

if (btns1 != null) {
  console.log("i am in the btn 1");

  for (var i = 0; i < btns1.length; i++) {
    console.log(btns1[i]);

    btns1[i].addEventListener("click", function () {
      q1Row1ClickedWord = this.id;


        var current = document.getElementsByClassName(
        "q1-row1-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q1-row1-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q1-row1-word-container-clicked",
          ""
        );

        this.className += " q1-row1-word-container-clicked";
      }
    });
    //
    btns2[i].addEventListener("click", function () {
      q1Row2ClickedWord = this.id;


        var current = document.getElementsByClassName(
        "q1-row2-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q1-row2-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q1-row2-word-container-clicked",
          ""
        );

        this.className += " q1-row2-word-container-clicked";
      }
    });
    //

    btns3[i].addEventListener("click", function () {
      console.log("btns 3 event");
      q1Row3ClickedWord = this.id;

        var current = document.getElementsByClassName(
        "q1-row3-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q1-row3-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q1-row3-word-container-clicked",
          ""
        );

        this.className += " q1-row3-word-container-clicked";
      }
    });

    //

    if (container4 !== null) {
      btns4[i].addEventListener("click", function () {
        console.log("btns 4 event");
        q1Row4ClickedWord = this.id;

          var current = document.getElementsByClassName(
          "q1-row4-word-container-clicked"
        );
        if (current.length === 0) {
          this.className += " q1-row4-word-container-clicked";
        } else {
          current[0].className = current[0].className.replace(
            " q1-row4-word-container-clicked",
            ""
          );

          this.className += " q1-row4-word-container-clicked";
        }
      });
    }
  }
}

// //////////////////////////////////////////////

// q3

var q3Row1ClickedWord = "";
var q3Row2ClickedWord = "";
var q3Row3ClickedWord = "";
var q3Row4ClickedWord = "";
var q3Container1 = document.getElementById("q3-row1");
if (q3Container1 != null) {
  var q3btns1 = q3Container1.getElementsByClassName("q3-row1-word-container");
}

var q3Container2 = document.getElementById("q3-row2");
if (q3Container2 != null) {
  console.log("i am in the container 2");
  var q3btns2 = q3Container2.getElementsByClassName("q3-row2-word-container");
}

var q3Container3 = document.getElementById("q3-row3");
if (q3Container3 != null) {
  var q3btns3 = q3Container3.getElementsByClassName("q3-row3-word-container");
}

var q3Container4 = document.getElementById("q3-row4");
if (q3Container4 !== null) {
  var q3btns4 = q3Container4.getElementsByClassName("q3-row4-word-container");
}

//

if (q3btns1 != null) {
  console.log("i am in the btn q3 1");

  for (var i = 0; i < q3btns1.length; i++) {
    console.log(btns1[i]);

    q3btns1[i].addEventListener("click", function () {
      q3Row1ClickedWord = this.id;

        console.log("hellooo me mama");

      var current = document.getElementsByClassName(
        "q3-row1-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q3-row1-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q3-row1-word-container-clicked",
          ""
        );

        this.className += " q3-row1-word-container-clicked";
      }
    });
    //
    q3btns2[i].addEventListener("click", function () {
      q3Row2ClickedWord = this.id;


        var current = document.getElementsByClassName(
        "q3-row2-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q3-row2-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q3-row2-word-container-clicked",
          ""
        );

        this.className += " q3-row2-word-container-clicked";
      }
    });
    //

    q3btns3[i].addEventListener("click", function () {
      console.log("btns 3 event");
      q3Row3ClickedWord = this.id;

        var current = document.getElementsByClassName(
        "q3-row3-word-container-clicked"
      );
      if (current.length === 0) {
        this.className += " q3-row3-word-container-clicked";
      } else {
        current[0].className = current[0].className.replace(
          " q3-row3-word-container-clicked",
          ""
        );

        this.className += " q3-row3-word-container-clicked";
      }
    });

    //

    if (q3Container4 !== null) {
      q3btns4[i].addEventListener("click", function () {
        console.log("btns 4 event");
        q3Row4ClickedWord = this.id;

          var current = document.getElementsByClassName(
          "q3-row4-word-container-clicked"
        );
        if (current.length === 0) {
          this.className += " q3-row4-word-container-clicked";
        } else {
          current[0].className = current[0].className.replace(
            " q3-row4-word-container-clicked",
            ""
          );

          this.className += " q3-row4-word-container-clicked";
        }
      });
    }
  }
}

// /////////////////////////////////////////////

function submitQ2() {
  if (
    q1Row1ClickedWord === "He" &&
    q1Row2ClickedWord === "It" &&
    q1Row3ClickedWord === "She"
  ) {
    alert("welldone");
  } else {
    alert("try again");
  }
}

function submitQ2Join() {
  if (
    q1Row1ClickedWord === "He" &&
    q1Row2ClickedWord === "It" &&
    q1Row3ClickedWord === "She"
  ) {
    // alert("welldone");
    openPopup();
  } else {
    alert("try again");
  }
}

function submitQ3Join() {
  if (
    q3Row1ClickedWord === "I" &&
    q3Row2ClickedWord === "They" &&
    q3Row3ClickedWord === "We" &&
    q3Row4ClickedWord === "You"
  ) {
    alert("welldone");
  } else {
    alert("try again");
  }
}

function submitQ3() {
  if (
    q1Row1ClickedWord === "I" &&
    q1Row2ClickedWord === "They" &&
    q1Row3ClickedWord === "We" &&
    q1Row4ClickedWord === "You"
  ) {
    alert("welldone");
  } else {
    alert("try again");
  }
}

function submitQ4() {
  if (
    q1Row1ClickedWord === "That" &&
    q1Row2ClickedWord === "This" &&
    q1Row3ClickedWord === "These" &&
    q1Row4ClickedWord === "Those"
  ) {
    alert("welldone");
  } else {
    alert("try again");
  }
}

function submitQ5() {
  let isCorrect = true;

  let ansTrack2 = "Accepted";
  let cansdiv;
  let block;
  let c;

  block = document.getElementById("q1-answer-drop-box-container");
  c = document.getElementsByClassName("q1-dd-grid-ans-box-column");

  for (var i = 0; i < c.length; i++) {
    console.log(c[i].children[0]);
    if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
      cansdiv = document.getElementById("q1" + ansTrack2);
      setTimeout(() => {
        c[i].children[0].style.backgroundColor = "white";

        cansdiv.style.backgroundColor = "white";
      }, 1000);

      c[i].children[0].style.backgroundColor = "#FF0000A8";

      cansdiv.style.backgroundColor = "#46cd46";
      return;
    } else {
      if (ansTrack2 == "Accepted") {
        ansTrack2 = "Advised";
      } else if (ansTrack2 == "Advised") {
        ansTrack2 = "Appreciated";
      } else if (ansTrack2 == "Appreciated") {
        ansTrack2 = "Arrived";
      } else if (ansTrack2 == "Arrived") {
        ansTrack2 = "Baked";
      } else if (ansTrack2 == "Baked") {
        ansTrack2 = "Boiled";
      } else if (ansTrack2 == "Boiled") {
        ansTrack2 = "Borrowed";
      } else if (ansTrack2 == "Borrowed") {
        ansTrack2 = "Brushed";
      } else if (ansTrack2 == "Brushed") {
        ansTrack2 = "Challenged";
      } else if (ansTrack2 == "Challenged") {
        ansTrack2 = "Clapped";
      }
    }
  }

  if (isCorrect) {
    alert("welldone");
  }
}

function submitQ9() {
  let isCorrect = true;

  let ansTrack2 = "Past";
  let cansdiv;
  let block;
  let c;

  block = document.getElementById("q4-answer-drop-box-container");
  c = block.children;

  for (var i = 0; i < c.length; i++) {
    console.log(c[i].children);
    if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
      cansdiv = document.getElementById("q4" + ansTrack2);

      setTimeout(() => {
        if (c[i].children[0].className === "q4-answer-box-drop-div") {
          c[i].children[0].style.backgroundColor = "#77c0ff";
        } else {
          c[i].children[0].style.backgroundColor = "#419ae2";
        }

        cansdiv.style.backgroundColor = "#419ae2";
      }, 1000);

      // if (c[i].children[0].className === "q4-answer-box-drop-div") {
      //   c[i].children[0].style.borderBottomColor = "#FF0000A8";
      // } else {
      c[i].children[0].style.backgroundColor = "#FF0000A8";
      // }

      cansdiv.style.backgroundColor = "#46cd46";
      return;
    } else {
      if (ansTrack2 == "Past") {
        ansTrack2 = "Present";
      } else if (ansTrack2 == "Present") {
        ansTrack2 = "Future";
      }
    }
  }

  if (isCorrect) {
    alert("welldone");
  }
}

function closePopup() {
  document.querySelector(".popup-container").style.display = "none";
}

function openPopup() {
  document.querySelector(".popup-container").style.display = "flex";
}

// q7

var q7Clickedword = "";
var container = document.getElementById("q7-word-container");
if (container != null) {
  var btns = container.getElementsByClassName("q7-word");
  console.log(btns);

  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      q7Clickedword = this.innerHTML;

      // console.log(q7Clickedword);

      var current = document.getElementsByClassName("q7-word-clicked");

      if (current.length === 0) {
        this.className += " q7-word-clicked";
      } else {
        if (this == current[0]) {
          current[0].className = current[0].className.replace(
            " q7-word-clicked",
            ""
          );
          q7Clickedword = "";
        } else {
          current[0].className = current[0].className.replace(
            " q7-word-clicked",
            ""
          );

          this.className += " q7-word-clicked";
        }
      }
    });
  }
}

function submitQ7() {
  if (q7Clickedword === "six") {
    alert("welldone");
  } else {
    alert("try again");
  }
}

// q8
function submitQ8() {
  let isCorrect = true;

  let ansTrack2 = "She";
  let cansdiv;
  let block;
  let c;

  block = document.getElementById("q8-answer-drop-box-container");
  c = block.children;

  for (var i = 0; i < c.length; i++) {
    if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
      cansdiv = document.getElementById("q8" + ansTrack2);
      setTimeout(() => {
        if (c[i].children[0].className === "q8-answer-box-drop-div") {
          c[i].children[0].style.borderBottomColor = "#419ae2";
        } else {
          c[i].children[0].style.backgroundColor = "#419ae2";
        }

        cansdiv.style.backgroundColor = "#419ae2";
      }, 1000);

      if (c[i].children[0].className === "q8-answer-box-drop-div") {
        c[i].children[0].style.borderBottomColor = "#FF0000A8";
      } else {
        c[i].children[0].style.backgroundColor = "#FF0000A8";
      }

      cansdiv.style.backgroundColor = "#46cd46";
      return;
    } else {
      if (ansTrack2 == "She") {
        ansTrack2 = "Cooked";
      } else if (ansTrack2 == "Cooked") {
        ansTrack2 = "Quickly";
      }
    }
  }

  let ansTrack = "Stay";
  let cansdiv1;
  let block1;
  let c1;

  block1 = document.getElementById("q8-answer-drop-box-container2");
  c1 = block1.children;

  for (var i = 0; i < c1.length; i++) {
    if (c1[i].children[0].getAttribute("canswer") != ansTrack) {
      cansdiv1 = document.getElementById("q8" + ansTrack);
      setTimeout(() => {
        if (c1[i].children[0].className === "q8-answer-box-drop-div") {
          c1[i].children[0].style.borderBottomColor = "#419ae2";
        } else {
          c1[i].children[0].style.backgroundColor = "#419ae2";
        }

        cansdiv1.style.backgroundColor = "#419ae2";
      }, 1000);

      if (c1[i].children[0].className === "q8-answer-box-drop-div") {
        c1[i].children[0].style.borderBottomColor = "#FF0000A8";
      } else {
        c1[i].children[0].style.backgroundColor = "#FF0000A8";
      }

      cansdiv1.style.backgroundColor = "#46cd46";
      return;
    } else {
      if (ansTrack == "Stay") {
        ansTrack = "With";
      } else if (ansTrack == "With") {
        ansTrack = "Us";
      }
    }
  }

  if (isCorrect) {
    alert("welldone");
  }
}
