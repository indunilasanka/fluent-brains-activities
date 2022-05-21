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
let salutations = ["Great", "Well Done", "Awesome", "Good Job", "Congratulations", "Superb", "Felicitations", "Kudos"]

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

function reduceStarCount() {
    if (starCount !== 1) {
        starCount--;
    }
}

function closePopup() {
    document.querySelector(".popup-container").style.display = "none";
}

function openPopup() {
    showStars();
    pauseTimer();
    document.querySelector(".popup-container").style.display = "flex";
}

function showStars() {
    if (starCount === 3) {
        document.getElementById("starId1").style.display = "inline";
        document.getElementById("starId2").style.display = "inline";
        document.getElementById("starId3").style.display = "inline";
    } else if (starCount === 2) {
        document.getElementById("starId1").style.display = "inline";
        document.getElementById("starId2").style.display = "inline";
        document.getElementById("starId3").style.display = "none";
    } else {
        document.getElementById("starId1").style.display = "inline";
        document.getElementById("starId2").style.display = "none";
        document.getElementById("starId3").style.display = "none";
    }

    if (starCount !== 1) {
        document.getElementById("star-count").innerHTML = starCount + ' stars';
    } else {
        document.getElementById("star-count").innerHTML = starCount + ' star';
    }

    score = score + starCount;
    finalScore = finalScore + starCount * scoreFactor / (second + minute * 60 + hour * 3600);
    sessionStorage.setItem("finalScore", finalScore);
    sessionStorage.setItem("score", score);
    document.getElementById("current-score").innerHTML = score;
    document.getElementById("salutation").innerHTML
        = salutations[parseInt(sessionStorage.getItem("currentQNum")) - 1];
}

function hideStars() {
    document.getElementById("starId1").style.display = "none";
    document.getElementById("starId2").style.display = "none";
    document.getElementById("starId3").style.display = "none";
}


if (sessionStorage.getItem("currentQNum") == null) {
    sessionStorage.setItem("currentQNum", 1);
}

if (parseInt(sessionStorage.getItem("finalScore")) > 0) {
    finalScore = parseInt(sessionStorage.getItem("finalScore"));
    score = parseInt(sessionStorage.getItem("score"));
    document.getElementById("current-score").innerHTML = score;
}

if (sessionStorage.getItem("currentQNum") > 1) {
    var i;
    for (i = 0; i < parseInt(sessionStorage.getItem("currentQNum")) - 1; i++) {
        document.getElementById(questionsArray[i]).className = "question-hide";
    }

    document.getElementById(
        questionsArray[sessionStorage.getItem("currentQNum") - 1]
    ).className = "question-display";

    document.getElementById("question-count").innerHTML = parseInt(sessionStorage.getItem("currentQNum"));
}

function resetTime() {
    second = 0;
    minute = 0;
    hour = 0;
}

function swapNextQuestion() {
    setTimeout(() => {
        closePopup();
        starCount = 3;
        hideStars();
    }, 100);

    //   sessionStorage.getItem("currentQNum") = currentQuestionNumber;
    if (!isSwapQuestion) {
        isSwapQuestion = true;
        var answer = document.getElementById(
            questionsArray[sessionStorage.getItem("currentQNum") - 1]
        );
        dogclap = true;

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
            document.getElementById("question-count").innerHTML = parseInt(sessionStorage.getItem("currentQNum"));
            resetTime();
            startTimer();
            dogclap = false;
            isSwapQuestion = false;
        }, 100);
    }
}

function clearSession() {
    sessionStorage.clear();
}

// LOGIC

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
        answerButton.style.borderColor = "#16fd16";
        setTimeout(() => {
            answer.className = "count-question-hide";
            const nextQElement = document.getElementById(nextQ);
            nextQElement.className = "count-question-display";
        }, 200);
    } else if (currentQNumber === 10 && txt === "ten") {
        openPopup();
    } else {
        answerButton.style.borderColor = "#FF4646";
        answerButton.style.color = "#FF4646";
        setTimeout(() => {
            answerButton.style.borderColor = "#6dbaff";
            answerButton.style.color = "#000000";
        }, 1000);
        reduceStarCount();
    }
}

function displayHelpAction(qId) {
    let id = "explanation-action-" + qId;
    const action = document.getElementById(id);
    action.style.display = "block";
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
        openPopup();
    } else {
        reduceStarCount();
    }
}

function submitCountsQ15() {
    let isCorrect = true;
    const block1 = document.getElementById("block151");
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

    const block2 = document.getElementById("block152");
    if (block2.firstElementChild.getAttribute("canswer") !== "1") {
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

    const block3 = document.getElementById("block153");
    if (block3.firstElementChild.getAttribute("canswer") !== "3") {
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

    const block4 = document.getElementById("block154");
    if (block4.firstElementChild.getAttribute("canswer") !== "5") {
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
        openPopup();
    } else {
        reduceStarCount();
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
        openPopup();
    } else {
        reduceStarCount();
    }
}

handleNumberComparison = (id, isCorrect) => {
    if (isCorrect) {
        openPopup();
        // document.body.style.backgroundImage = "url('../img/welldone.gif')";
    } else {
        const block = document.getElementById(id);
        block.style.borderColor = "#FF0000A8";
        setTimeout(() => {
            block.style.borderColor = "#96B8FFFF";
        }, 1000);
        reduceStarCount();
    }
};

handleSubmitAnswerComparison = (id, isCorrect) => {
    if (isCorrect) {
        openPopup();
        // document.body.style.backgroundImage = "url('../img/welldone.gif')";
    } else {
        const block = document.getElementById(id);
        block.style.borderColor = "#FF4646";
        block.style.color = "#FF4646";
        setTimeout(() => {
            block.style.borderColor = "#6dbaff";
            block.style.color = "#000000";
        }, 1000);
        reduceStarCount();
    }
};
