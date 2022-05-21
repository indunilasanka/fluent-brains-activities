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
    responsiveVoice.speak(text, "Sinhala", {volume: 2, rate: 1, pitch: 1});
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

function checkMissingLettersAll(qId) {
    let isCorrect = true;

    if (qId == "q1") {
        const input1 = document.getElementById("q1input1");
        if (input1.value !== "3") {
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
    } else if (qId == "q2") {
        const input1 = document.getElementById("q2input1");
        const input2 = document.getElementById("q2input2");
        if (input1.value !== "2") {
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
        // /////
        if (input2.value !== "2") {
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
    } else if (qId == "q5") {
        const input1 = document.getElementById("q5input1");
        const input2 = document.getElementById("q5input2");
        const input3 = document.getElementById("q5input3");
        const input4 = document.getElementById("q5input4");
        const input5 = document.getElementById("q5input5");

        if (input1.value !== "1") {
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

        if (input3.value !== "15") {
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

        if (input4.value !== "16") {
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

        if (input5.value !== "10") {
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
    } else if (qId == "q6") {
        const input1 = document.getElementById("q6input1");
        const input2 = document.getElementById("q6input2");
        const input3 = document.getElementById("q6input3");
        const input4 = document.getElementById("q6input4");
        const input5 = document.getElementById("q6input5");

        if (input1.value !== "24") {
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

        if (input2.value !== "21") {
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

        if (input3.value !== "28") {
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

        if (input4.value !== "8") {
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

        if (input5.value !== "27") {
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
    } else if (qId == "q7") {
        const input1 = document.getElementById("q7input1");
        if (input1.value !== "6") {
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
    }
    // }else if(qId == "q25"){
    //   const input1 = document.getElementById("q25input1");
    //   if (input1.value !== "10") {
    //     isCorrect = false;
    //     setTimeout(() => {
    //       input1.style.color = "black";
    //     }, 2000);
    //     input1.style.color = "#FF0000A8";
    //   }
    //   if (input1.value == "") {
    //     isCorrect = false;
    //
    //     setTimeout(() => {
    //       input1.value = "";
    //       input1.style.color = "black";
    //     }, 2000);
    //     input1.style.color = "#FF0000A8";
    //     input1.value = "✖";
    //   }
    // }

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

function checkMissingNumbersAll(qId) {
    let isCorrect = true;

    if (qId === "q1") {
        const input1 = document.getElementById("q1input1");
        const input2 = document.getElementById("q1input2");
        const input3 = document.getElementById("q1input3");
        const input4 = document.getElementById("q1input4");
        const input5 = document.getElementById("q1input5");

        if (input1.value != "6") {
            input1.style.color = "#FF0000A8";
            input1.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = "black";
                input1.value = "";
            }, 1000);
        }
        if (input2.value != "10") {
            input2.style.color = "#FF0000A8";
            input2.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = "black";
                input2.value = "";
            }, 1000);
        }
        if (input3.value != "13") {
            input3.style.color = "#FF0000A8";
            input3.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = "black";
                input3.value = "";
            }, 1000);
        }
        if (input4.value != "14") {
            input4.style.color = "#FF0000A8";
            input4.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = "black";
                input4.value = "";
            }, 1000);
        }
        if (input5.value != "17") {
            input5.style.color = "#FF0000A8";
            input5.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input5.style.color = "black";
                input5.value = "";
            }, 1000);
        }
    } else if (qId === "q11") {
        const input6 = document.getElementById("q11input6");
        const input7 = document.getElementById("q11input7");
        const input8 = document.getElementById("q11input8");
        const input9 = document.getElementById("q11input9");
        const input10 = document.getElementById("q11input10");

        if (input6.value != "21") {
            input6.style.color = "#FF0000A8";
            input6.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input6.style.color = "black";
                input6.value = "";
            }, 1000);
        }
        if (input7.value != "23") {
            input7.style.color = "#FF0000A8";
            input7.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input7.style.color = "black";
                input7.value = "";
            }, 1000);
        }
        if (input8.value != "25") {
            input8.style.color = "#FF0000A8";
            input8.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input8.style.color = "black";
                input8.value = "";
            }, 1000);
        }
        if (input9.value != "28") {
            input9.style.color = "#FF0000A8";
            input9.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input9.style.color = "black";
                input9.value = "";
            }, 1000);
        }
        if (input10.value != "39") {
            input10.style.color = "#FF0000A8";
            input10.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input10.style.color = "black";
                input10.value = "";
            }, 1000);
        }
    }
    if (isCorrect) {
        swapNextQuestion();
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

function dropQ10(event) {
    event.preventDefault();

    if (
        event.target.parentElement.className !== "q21-letter-container" ||
        (event.target.parentElement.className === "q21-letter-container" &&
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

function submitQ1() {
    let isCorrect = true;

    let ansTrack2 = "A";
    let cansdiv;
    let block;
    let c;

    block = document.getElementById("q1block1");
    c = block.children;
    for (var i = 0; i < c.length; i++) {
        if (c[i].getAttribute("canswer") != ansTrack2) {
            cansdiv = document.getElementById("q1" + ansTrack2);
            setTimeout(() => {
                c[i].style.backgroundColor = "#419ae2";
                cansdiv.style.backgroundColor = "#419ae2";
            }, 1000);
            c[i].style.backgroundColor = "#FF0000A8";
            cansdiv.style.backgroundColor = "#46cd46";
            return;
        } else {
            if (ansTrack2 == "A") {
                ansTrack2 = "B";
            } else if (ansTrack2 == "B") {
                ansTrack2 = "J";
            } else if (ansTrack2 == "J") {
                ansTrack2 = "L";
            } else {
                ansTrack2 = "W";
            }
        }
    }

    if (isCorrect) {
        alert("welldone");
    }
}

function submitQ4() {
    let isCorrect = true;

    let ansTrack2 = "B";
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
                    c[i].children[0].style.borderBottomColor = "#419ae2";
                } else {
                    c[i].children[0].style.backgroundColor = "#419ae2";
                }

                cansdiv.style.backgroundColor = "#419ae2";
            }, 1000);

            if (c[i].children[0].className === "q4-answer-box-drop-div") {
                c[i].children[0].style.borderBottomColor = "#FF0000A8";
            } else {
                c[i].children[0].style.backgroundColor = "#FF0000A8";
            }

            cansdiv.style.backgroundColor = "#46cd46";
            return;
        } else {
            if (ansTrack2 == "B") {
                ansTrack2 = "I";
            } else if (ansTrack2 == "I") {
                ansTrack2 = "R";
            } else if (ansTrack2 == "R") {
                ansTrack2 = "D";
            }
        }
    }

    if (isCorrect) {
        alert("welldone");
    }
}

function submitQ9() {
    let isCorrect = true;

    let ansTrack2 = "K";
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
                    c[i].children[0].style.borderBottomColor = "#419ae2";
                } else {
                    c[i].children[0].style.backgroundColor = "#419ae2";
                }

                cansdiv.style.backgroundColor = "#419ae2";
            }, 1000);

            if (c[i].children[0].className === "q4-answer-box-drop-div") {
                c[i].children[0].style.borderBottomColor = "#FF0000A8";
            } else {
                c[i].children[0].style.backgroundColor = "#FF0000A8";
            }

            cansdiv.style.backgroundColor = "#46cd46";
            return;
        } else {
            if (ansTrack2 == "K") {
                ansTrack2 = "I";
            } else if (ansTrack2 == "I") {
                ansTrack2 = "T";
            } else if (ansTrack2 == "T") {
                ansTrack2 = "E";
            }
        }
    }

    if (isCorrect) {
        alert("welldone");
    }
}

function submitQ8() {
    let isCorrect = true;

    let ansTrack2 = "C";
    let cansdiv;
    let block;
    let c;

    c = document.getElementsByClassName("q8-dd-grid-ans-box-column");

    for (var i = 0; i < c.length; i++) {
        if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
            cansdiv = document.getElementById("q8" + ansTrack2);

            setTimeout(() => {
                if (c[i].children[0].className === "q8-answer-drop-div") {
                    c[i].children[0].style.backgroundColor = "#419ae2";
                } else {
                    c[i].children[0].style.backgroundColor = "#dbf7fe";
                }

                // c[i].children[0].style.backgroundColor = "#dbf7fe";
                cansdiv.style.backgroundColor = "#419ae2";
            }, 1000);
            c[i].children[0].style.backgroundColor = "#FF0000A8";
            cansdiv.style.backgroundColor = "#46cd46";
            return;
        } else {
            if (ansTrack2 == "C") {
                ansTrack2 = "B";
            }
        }
    }

    if (isCorrect) {
        alert("welldone");
    }
}

var q7ClickedLetter = "";
var container = document.getElementById("q7-letter-container");
if (container != null) {
    var btns = container.getElementsByClassName("q7-letter");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            q7ClickedLetter = this.innerHTML;

            var current = document.getElementsByClassName("q7-letter-clicked");
            if (current.length === 0) {
                this.className += " q7-letter-clicked";
            } else {
                current[0].className = current[0].className.replace(
                    " q7-letter-clicked",
                    ""
                );

                this.className += " q7-letter-clicked";
            }
        });
    }
}

function submitQ7() {
    if (q7ClickedLetter === "m") {
        alert("welldone");
    } else {
        alert("try again");
    }
}

function checkQ5(event) {
    if (event.target.id !== "sl") {
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            event.target.className = "q5-ans-box";
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        event.target.className = "q5-ans-box-clicked";
    } else {
        alert("welldone");
    }
}

function submitCountsQ1() {
    let isCorrect = true;
    const block1 = document.getElementById("block1");
    if (block1.firstElementChild.getAttribute("canswer") !== "4") {
        setTimeout(() => {
            if (block1.firstElementChild.getAttribute("canswer") != undefined) {
                block1.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block1.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block1.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block2 = document.getElementById("block2");
    if (block2.firstElementChild.getAttribute("canswer") !== "9") {
        setTimeout(() => {
            if (block2.firstElementChild.getAttribute("canswer") != undefined) {
                block2.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block2.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block2.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block3 = document.getElementById("block3");
    if (block3.firstElementChild.getAttribute("canswer") !== "5") {
        setTimeout(() => {
            if (block3.firstElementChild.getAttribute("canswer") != undefined) {
                block3.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block3.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block3.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block4 = document.getElementById("block4");
    if (block4.firstElementChild.getAttribute("canswer") !== "2") {
        setTimeout(() => {
            if (block4.firstElementChild.getAttribute("canswer") != undefined) {
                block4.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block4.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block4.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    if (isCorrect) {
        swapNextQuestion();
    }
}

function submitCountsQ2() {
    let isCorrect = true;
    const block1 = document.getElementById("2block1");
    if (block1.firstElementChild.getAttribute("canswer") !== "21") {
        setTimeout(() => {
            if (block1.firstElementChild.getAttribute("canswer") != undefined) {
                block1.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block1.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block1.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block2 = document.getElementById("2block2");
    if (block2.firstElementChild.getAttribute("canswer") !== "12") {
        setTimeout(() => {
            if (block2.firstElementChild.getAttribute("canswer") != undefined) {
                block2.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block2.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block2.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block3 = document.getElementById("2block3");
    if (block3.firstElementChild.getAttribute("canswer") !== "25") {
        setTimeout(() => {
            if (block3.firstElementChild.getAttribute("canswer") != undefined) {
                block3.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block3.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block3.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block4 = document.getElementById("2block4");
    if (block4.firstElementChild.getAttribute("canswer") !== "13") {
        setTimeout(() => {
            if (block4.firstElementChild.getAttribute("canswer") != undefined) {
                block4.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block4.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block4.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    if (isCorrect) {
        swapNextQuestion();
    }
}

function submitCountsQ3() {
    let isCorrect = true;
    const block1 = document.getElementById("3block1");
    if (block1.firstElementChild.getAttribute("canswer") !== "7") {
        setTimeout(() => {
            if (block1.firstElementChild.getAttribute("canswer") != undefined) {
                block1.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block1.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block1.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block2 = document.getElementById("3block2");
    if (block2.firstElementChild.getAttribute("canswer") !== "3") {
        setTimeout(() => {
            if (block2.firstElementChild.getAttribute("canswer") != undefined) {
                block2.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block2.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block2.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block3 = document.getElementById("3block3");
    if (block3.firstElementChild.getAttribute("canswer") !== "12") {
        setTimeout(() => {
            if (block3.firstElementChild.getAttribute("canswer") != undefined) {
                block3.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block3.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block3.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block4 = document.getElementById("3block4");
    if (block4.firstElementChild.getAttribute("canswer") !== "1") {
        setTimeout(() => {
            if (block4.firstElementChild.getAttribute("canswer") != undefined) {
                block4.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block4.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block4.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    if (isCorrect) {
        swapNextQuestion();
    }
}

function submitCountsQ4() {
    let isCorrect = true;
    const block1 = document.getElementById("4block1");
    if (block1.firstElementChild.getAttribute("canswer") !== "4") {
        setTimeout(() => {
            if (block1.firstElementChild.getAttribute("canswer") != undefined) {
                block1.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block1.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block1.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block2 = document.getElementById("4block2");
    if (block2.firstElementChild.getAttribute("canswer") !== "9") {
        setTimeout(() => {
            if (block2.firstElementChild.getAttribute("canswer") != undefined) {
                block2.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block2.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block2.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block3 = document.getElementById("4block3");
    if (block3.firstElementChild.getAttribute("canswer") !== "5") {
        setTimeout(() => {
            if (block3.firstElementChild.getAttribute("canswer") != undefined) {
                block3.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block3.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block3.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    const block4 = document.getElementById("4block4");
    if (block4.firstElementChild.getAttribute("canswer") !== "2") {
        setTimeout(() => {
            if (block4.firstElementChild.getAttribute("canswer") != undefined) {
                block4.firstElementChild.style.backgroundColor = "#419ae2";
            } else {
                block4.firstElementChild.style.backgroundColor =
                    "rgba(100, 184, 255, 0.58)";
            }
        }, 1000);
        block4.firstElementChild.style.backgroundColor = "#FF0000A8";
        isCorrect = false;
    }

    if (isCorrect) {
        swapNextQuestion();
    }

    // const block5 = document.getElementById("4block5");
    // if (block5.firstElementChild.getAttribute("canswer") !== "7") {
    //     setTimeout(() => {
    //         if (block5.firstElementChild.getAttribute("canswer") != undefined) {
    //             block5.firstElementChild.style.backgroundColor = '#419ae2';
    //         } else {
    //             block5.firstElementChild.style.backgroundColor = 'rgba(100, 184, 255, 0.58)';
    //         }
    //     }, 1000);
    //     block5.firstElementChild.style.backgroundColor = '#FF0000A8';
    // }
}

function q11Checked(event) {
    if (event.target.id == "q11PigCnt") {
        if (event.target.firstElementChild.id == "q11Pig") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q11PigChecked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q11Pig";
        }
    } else if (
        event.target.id == "q11Pig" ||
        event.target.id == "q11PigChecked"
    ) {
        if (event.target.id == "q11Pig") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q11PigChecked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q11Pig";
        }
    }

    // khksdjfh

    if (event.target.id == "q11PizzaCnt") {
        if (event.target.firstElementChild.id == "q11Pizza") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q11PizzaChecked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q11Pizza";
        }
    } else if (
        event.target.id == "q11Pizza" ||
        event.target.id == "q11PizzaChecked"
    ) {
        if (event.target.id == "q11Pizza") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q11PizzaChecked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q11Pizza";
        }
    }

    // khksdjfh

    if (event.target.id == "q11PineappleCnt") {
        if (event.target.firstElementChild.id == "q11Pineapple") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q11PineappleChecked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q11Pineapple";
        }
    } else if (
        event.target.id == "q11Pineapple" ||
        event.target.id == "q11PineappleChecked"
    ) {
        if (event.target.id == "q11Pineapple") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q11PineappleChecked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q11Pineapple";
        }
    }

    // if (event.target.id == "q11PineappleCnt") {
    //   if (event.target.firstElementChild.id == "q11Pineapple") {
    //     event.target.firstElementChild.style.color = "#3B95E0FF";
    //     event.target.firstElementChild.id = "q11PineappleChecked";
    //   } else {
    //     event.target.firstElementChild.style.color = "white";
    //     event.target.firstElementChild.id = "q11Pineapple";
    //   }
    // } else if (
    //   event.target.id == "q11Pineapple" ||
    //   event.target.id == "q11PineappleChecked"
    // ) {
    //   if (event.target.id == "q11Pineapple") {
    //     event.target.style.color = "#3B95E0FF";
    //     event.target.id = "q11PineappleChecked";
    //   } else {
    //     event.target.style.color = "white";
    //     event.target.id = "q11Pineapple";
    //   }
    // }
}

function submitQ11() {
    var Pig = document.getElementById("q11PigCnt").firstElementChild.id;
    var Pizza = document.getElementById("q11PizzaCnt").firstElementChild.id;
    var Pineapple =
        document.getElementById("q11PineappleCnt").firstElementChild.id;

    if (
        Pig == "q11PigChecked" &&
        Pizza == "q11PizzaChecked" &&
        Pineapple == "q11PineappleChecked"
    ) {
        alert("welldone");
    } else {
        alert("try again");
    }
}

function submitCountQ12() {
    let isCorrect = true;

    let answer1 = document.getElementById("q1-input-field-1").value;
    let answer2 = document.getElementById("q1-input-field-2").value;
    let answer3 = document.getElementById("q1-input-field-3").value;
    let answer4 = document.getElementById("q1-input-field-4").value;
    if (answer1 !== "2" && answer1 !== "") {
        setTimeout(() => {
            document.getElementById("q1-input-field-1").value = "";
            document.getElementById("q1-input-field-1").style.color = "black";
        }, 1000);
        document.getElementById("q1-input-field-1").style.color = "#FF0000A8";

        isCorrect = false;
    }
    if (answer1 === "") {
        setTimeout(() => {
            document.getElementById("q1-input-field-1").style.color = "black";
            document.getElementById("q1-input-field-1").value = "";
        }, 1000);
        document.getElementById("q1-input-field-1").style.color = "#FF0000A8";
        document.getElementById("q1-input-field-1").value = "✖";

        isCorrect = false;
    }

    if (answer2 !== "1" && answer2 !== "") {
        setTimeout(() => {
            document.getElementById("q1-input-field-2").value = "";
            document.getElementById("q1-input-field-2").style.color = "black";
        }, 1000);
        document.getElementById("q1-input-field-2").style.color = "#FF0000A8";

        isCorrect = false;
    }
    if (answer2 === "") {
        setTimeout(() => {
            document.getElementById("q1-input-field-2").style.color = "black";
            document.getElementById("q1-input-field-2").value = "";
        }, 1000);
        document.getElementById("q1-input-field-2").style.color = "#FF0000A8";
        document.getElementById("q1-input-field-2").value = "✖";

        isCorrect = false;
    }

    if (answer3 !== "4" && answer3 !== "") {
        setTimeout(() => {
            document.getElementById("q1-input-field-3").value = "";
            document.getElementById("q1-input-field-3").style.color = "black";
        }, 1000);
        document.getElementById("q1-input-field-3").style.color = "#FF0000A8";

        isCorrect = false;
    }
    if (answer3 === "") {
        setTimeout(() => {
            document.getElementById("q1-input-field-3").style.color = "black";
            document.getElementById("q1-input-field-3").value = "";
        }, 1000);
        document.getElementById("q1-input-field-3").style.color = "#FF0000A8";
        document.getElementById("q1-input-field-3").value = "✖";

        isCorrect = false;
    }

    if (answer4 !== "8" && answer4 !== "") {
        setTimeout(() => {
            document.getElementById("q1-input-field-4").value = "";
            document.getElementById("q1-input-field-4").style.color = "black";
        }, 1000);
        document.getElementById("q1-input-field-4").style.color = "#FF0000A8";

        isCorrect = false;
    }
    if (answer4 === "") {
        setTimeout(() => {
            document.getElementById("q1-input-field-4").style.color = "black";
            document.getElementById("q1-input-field-4").value = "";
        }, 1000);
        document.getElementById("q1-input-field-4").style.color = "#FF0000A8";
        document.getElementById("q1-input-field-4").value = "✖";

        isCorrect = false;
    }

    if (
        answer1 === "2" &&
        (answer2 !== "1" || answer3 !== "4" || answer4 !== "8")
    ) {
        document.getElementById("q1-input-field-1").style.color = "#46cd46";

        isCorrect = false;
    }

    if (
        answer2 === "1" &&
        (answer1 !== "2" || answer3 !== "4" || answer4 !== "8")
    ) {
        document.getElementById("q1-input-field-2").style.color = "#46cd46";

        isCorrect = false;
    }

    if (
        answer3 === "4" &&
        (answer2 !== "1" || answer1 !== "2" || answer4 !== "8")
    ) {
        document.getElementById("q1-input-field-3").style.color = "#46cd46";

        isCorrect = false;
    }

    if (
        answer4 === "8" &&
        (answer2 !== "1" || answer3 !== "4" || answer1 !== "2")
    ) {
        document.getElementById("q1-input-field-4").style.color = "#46cd46";

        isCorrect = false;
    }

    if (isCorrect) {
        document.getElementById("q1-input-field-1").style.color = "black";
        document.getElementById("q1-input-field-2").style.color = "black";
        document.getElementById("q1-input-field-3").style.color = "black";
        document.getElementById("q1-input-field-4").style.color = "black";
        alert("welldone");
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

// q4

function checkQ4(event) {
    if (event.target.id !== "2") {
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            event.target.className = "q4-ans-box";
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        event.target.className = "q4-ans-box-clicked";
    } else {
        alert("welldone");
    }
}

// q3
function dropQ3(event) {
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

function submitQ3dfdf() {
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
        alert("welldone");
        // swapNextQuestion();
    }
}

function submitQ3() {
    let isCorrect = true;

    let ansTrack2 = "Began";
    let cansdiv;
    let c;

    c = document.getElementsByClassName("q1-dd-grid-ans-box-column-six");
    d = document.getElementsByClassName("q1-dd-grid-ans-box-column-seven");
    for (var i = 0; i < c.length; i++) {
        console.log(c[i].children[0]);
        if (c[i].children[0].getAttribute("canswer") != "6") {
            cansdivs = document.getElementsByClassName("num-6");
            setTimeout(() => {
                if (
                    c[i].children[0].className == "q1-answer-drop-div num-7" ||
                    c[i].children[0].className == "q1-answer-drop-div num-6"
                ) {
                    c[i].children[0].style.backgroundColor = "#3b95e0ff";
                } else {
                    c[i].children[0].style.backgroundColor = "white";
                }

                // cansdiv.style.backgroundColor = "white";
                for (var j = 0; j < cansdivs.length; j++) {
                    cansdivs[j].style.backgroundColor = "#3b95e0ff";
                }
            }, 1000);

            c[i].children[0].style.backgroundColor = "#FF0000A8";

            // cansdiv.style.backgroundColor = "#46cd46";
            for (var j = 0; j < cansdivs.length; j++) {
                if (
                    cansdivs[j].parentElement.className !==
                    "q1-dd-grid-ans-box-column-six"
                ) {
                    cansdivs[j].style.backgroundColor = "#46cd46";
                }
            }
            return;
        }
    }

    for (var i = 0; i < c.length; i++) {
        if (d[i].children[0].getAttribute("canswer") != "7") {
            cansdivs = document.getElementsByClassName("num-7");
            setTimeout(() => {
                d[i].children[0].style.backgroundColor = "white";

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
                    "q1-dd-grid-ans-box-column-seven"
                ) {
                    cansdivs[j].style.backgroundColor = "#46cd46";
                }
            }
            return;
        }
    }

    if (isCorrect) {
        alert("welldone");
        // swapNextQuestion();
    }
}

//q11
var q11ClickedWord = "";
var container = document.getElementById("q11-ans-box");
if (container != null) {
    var btns = container.getElementsByClassName("q11-ans");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            q11ClickedWord = this.innerHTML;
            console.log(q11ClickedWord);

            var current = document.getElementsByClassName("q11-word-clicked");
            if (current.length === 0) {
                this.className += " q11-word-clicked";
            } else {
                current[0].className = current[0].className.replace(
                    " q11-word-clicked",
                    ""
                );

                this.className += " q11-word-clicked";
            }
        });
    }
}

function submitQ11() {
    if (q11ClickedWord === "False") {
        alert("welldone");
    } else {
        alert("try again");
    }
}

// q8
function checkQ8(event) {
    if (event.target.id !== "15") {
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            event.target.className = "q4-ans-box";
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        event.target.className = "q4-ans-box-clicked";
    } else {
        alert("welldone");
    }
}

// q9
function checkQ9(event) {
    console.log(event.target.parentElement.id);
    if (event.target.id !== "six" && event.target.parentElement.id !== "six") {
        console.log(event.target.id);
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            if (event.target.id == "q9-photo") {
                event.target.parentElement.className = "q9-ans-box";
            } else {
                event.target.className = "q9-ans-box";
            }
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        if (event.target.id == "q9-photo") {
            event.target.parentElement.className = "q9-ans-box-clicked";
        } else {
            event.target.className = "q9-ans-box-clicked";
        }
    } else {
        alert("welldone");
    }
}

// q10

function submitQ10() {
    let isCorrect = true;

    let ansTrack2 = "Two";
    let cansdiv;
    let c = [];
    let a;
    let b;

    a = document.getElementById("two");
    b = document.getElementById("six");
    e = document.getElementById("twelve");

    c.push(a);
    c.push(b);
    c.push(e);

    // console.log(c);

    // c = document.getElementsByClassName("q10-ans-box");

    for (var i = 0; i < c.length; i++) {
        if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
            cansdiv = document.getElementById("q4" + ansTrack2);
            setTimeout(() => {
                console.log(c[i].children[0].innerHTML);
                if (c[i].children[0].innerHTML !== "") {
                    c[i].children[0].className = "test";
                } else {
                    c[i].children[0].className = "tp";
                }

                cansdiv.className = "q4-answer-drop-div";
            }, 1000);

            c[i].children[0].className = "red";
            cansdiv.className = "q4-answer-drop-div-green";

            return;
        } else {
            if (ansTrack2 == "Two") {
                ansTrack2 = "Six";
            } else if (ansTrack2 == "Six") {
                ansTrack2 = "Twelve";
            }
        }
    }

    if (isCorrect) {
        alert("welldone");
    }
}

// q21

function submitQ21() {
    let isCorrect = true;

    let ansTrack2 = "Six";
    let cansdiv;
    let c = [];
    let a;
    let b;

    a = document.getElementById("six");
    b = document.getElementById("fourteen");
    e = document.getElementById("eightyfour");

    c.push(a);
    c.push(b);
    c.push(e);

    // console.log(c);

    // c = document.getElementsByClassName("q10-ans-box");

    for (var i = 0; i < c.length; i++) {
        if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
            cansdiv = document.getElementById("q4" + ansTrack2);
            setTimeout(() => {
                console.log(c[i].children[0].innerHTML);
                if (c[i].children[0].innerHTML !== "") {
                    c[i].children[0].className = "test";
                } else {
                    c[i].children[0].className = "tp";
                }

                cansdiv.className = "q21-answer-drop-div";
            }, 1000);

            c[i].children[0].className = "red";
            cansdiv.className = "q21-answer-drop-div-green";

            return;
        } else {
            if (ansTrack2 == "Six") {
                ansTrack2 = "Fourteen";
            } else if (ansTrack2 == "Fourteen") {
                ansTrack2 = "Eightyfour";
            }
        }
    }

    if (isCorrect) {
        alert("welldone");
    }
}

// q12

function submitQ12() {
    let isCorrect = true;

    let ansTrack2 = "Two";
    let cansdiv;
    let cansdiv1;
    let cansdiv2;
    let c = [];
    let a;
    let b;

    a = document.getElementById("one");
    b = document.getElementById("two");
    d = document.getElementById("three");
    e = document.getElementById("four");
    f = document.getElementById("five");
    g = document.getElementById("six");
    h = document.getElementById("seven");
    c.push(a);
    c.push(b);
    c.push(d);
    c.push(e);
    c.push(f);
    c.push(g);
    c.push(h);

    for (var i = 0; i < c.length; i++) {
        if (c[i].children[0].getAttribute("canswer") != ansTrack2) {
            if (ansTrack2 == "Two" || ansTrack2 == "Two2" || ansTrack2 == "Two3") {
                cansdiv = document.getElementById("q4Two");
                cansdiv1 = document.getElementById("q4Two2");
                cansdiv2 = document.getElementById("q4Two3");
            } else {
                cansdiv = document.getElementById("q4" + ansTrack2);
            }

            setTimeout(() => {
                if (c[i].children[0].innerHTML !== "") {
                    c[i].children[0].className = "test12";
                } else {
                    c[i].children[0].className = "tp";
                }

                if (ansTrack2 == "Two" || ansTrack2 == "Two2" || ansTrack2 == "Two3") {
                    cansdiv.className = "q4-answer-drop-div";
                    cansdiv1.className = "q4-answer-drop-div";
                    cansdiv2.className = "q4-answer-drop-div";
                } else {
                    cansdiv.className = "q4-answer-drop-div";
                }
            }, 1000);

            c[i].children[0].className = "red";
            // c[i].children[0].style.backgroundColor = "red";
            if (ansTrack2 == "Two" || ansTrack2 == "Two2" || ansTrack2 == "Two3") {
                cansdiv.className = "q12-answer-drop-div-green";
                cansdiv1.className = "q12-answer-drop-div-green";
                cansdiv2.className = "q12-answer-drop-div-green";
            } else {
                cansdiv.className = "q12-answer-drop-div-green";
            }

            return;
        } else {
            if (ansTrack2 == "Two") {
                ansTrack2 = "One";
            } else if (ansTrack2 == "One") {
                ansTrack2 = "Three";
            } else if (ansTrack2 == "Three") {
                ansTrack2 = "Two2";
            } else if (ansTrack2 == "Two2") {
                ansTrack2 = "Six";
            } else if (ansTrack2 == "Six") {
                ansTrack2 = "Seven";
            } else if (ansTrack2 == "Seven") {
                ansTrack2 = "Two3";
            }
        }
    }

    if (isCorrect) {
        alert("welldone");
    }
}

// q13
function checkQ13(event) {
    if (event.target.id !== "2") {
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            event.target.className = "q4-ans-box";
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        event.target.className = "q4-ans-box-clicked";
    } else {
        alert("welldone");
    }
}

// q14
function checkQ14(event) {
    if (event.target.id !== "4") {
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            event.target.className = "q4-ans-box";
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        event.target.className = "q4-ans-box-clicked";
    } else {
        alert("welldone");
    }
}

// q15
function checkQ15(event) {
    if (event.target.id !== "4") {
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            event.target.className = "q4-ans-box";
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        event.target.className = "q4-ans-box-clicked";
    } else {
        alert("welldone");
    }
}

// q16
function checkQ16(event) {
    if (event.target.id !== "8") {
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            event.target.className = "q4-ans-box";
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        event.target.className = "q4-ans-box-clicked";
    } else {
        alert("welldone");
    }
}

// q17

function checkq17() {
    var box1 = document.getElementById("q17-16").checked;
    var box2 = document.getElementById("q17-15").checked;
    var box3 = document.getElementById("q17-2").checked;
    var box4 = document.getElementById("q17-6").checked;
    if (box1 == true && box3 == true && box2 == false && box4 == false) {
        alert("welldone");
    } else {
        alert("try again");
    }
}

// q18
function checkQ18(event) {
    if (event.target.id !== "12") {
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            event.target.className = "q4-ans-box";
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        event.target.className = "q4-ans-box-clicked";
    } else {
        alert("welldone");
    }
}

// q19
function checkQ19(event) {
    if (event.target.id !== "15") {
        setTimeout(() => {
            // event.target.style.borderColor = "#4faeffff";
            // event.target.style.color = "black";
            event.target.className = "q4-ans-box";
        }, 2000);
        // event.target.style.borderColor = "#FF0000A8";
        // event.target.style.color = "#FF0000A8";
        event.target.className = "q4-ans-box-clicked";
    } else {
        alert("welldone");
    }
}

//q20
function checkQ20(id, value) {
    let input = document.getElementById(id);
    if (value === 0) {
        input.className = "q4-ans-box-clicked";
        setTimeout(() => {
            input.className = "q4-ans-box";
        }, 2000);
    } else {
        alert("weldone");
    }
}

//q23
function checkQ23() {
    let input = document.getElementById("q23drop");
    let children = input.children;
    let isCorrect = false;
    if (children[0].getAttribute("canswer") !== "four") {
        if (children[0].getAttribute("canswer") !== undefined)
            element = document.getElementById("q23input3");
        element.style.backgroundColor = "#46cd46";
        children[0].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children[0].style.backgroundColor = "white";
        }, 2000);
    } else if (children[4].getAttribute("canswer") !== "two") {
        if (children[4].getAttribute("canswer") !== undefined)
            element = document.getElementById("q23input2");
        element.style.backgroundColor = "#46cd46";
        children[4].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children[4].style.backgroundColor = "white";
        }, 2000);
    } else if (children[5].getAttribute("canswer") !== "zero") {
        if (children[5].getAttribute("canswer") !== undefined)
            element = document.getElementById("q23input4");
        element.style.backgroundColor = "#46cd46";
        children[5].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children[5].style.backgroundColor = "white";
        }, 2000);
    } else {
        isCorrect = true;
    }
    if (isCorrect) {
        alert("weldone");
    }
}

function handleSubmitQ20(id, value) {
    let input = document.getElementById(id);
    if (value === 1) {
        alert("well done");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
            input.style.color = "black";
        }, 2000);
    }
}

// q24 ----------------------------------------------------------------------

function checkQ24(id) {
    var element = document.getElementById(id);
    if (id == "q24Answer1") {
        alert("welldone");
    } else {
        element.style.borderColor = "#FF0000A8";
        setTimeout(() => {
            element.style.borderColor = "#4faeffff";
        }, 2000);
    }
}

function checkAnswerQ25() {
    let input1 = document.getElementById('q25input1');
    if (input1.value == "10") {
        alert('weldone');
    } else {
        alert('try again');
    }
}
