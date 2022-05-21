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
function q3SelectAnswer(id) {
    const input = document.getElementById(id);
    var isSelected = input.getAttribute("selected");

    if (isSelected == "false") {
        input.style.backgroundColor = "#3B95E0FF";
        input.setAttribute("selected", "true");
    } else {
        input.style.backgroundColor = "#77c0ff";
        input.setAttribute("selected", "false");
    }
}

function q3CheckAllAnswers() {
    const input1 = document.getElementById("q3a1");
    const input2 = document.getElementById("q3a2");
    const input3 = document.getElementById("q3a3");
    const input4 = document.getElementById("q3a4");

    var isSelected1 = input1.getAttribute("selected");
    var isSelected2 = input2.getAttribute("selected");
    var isSelected3 = input3.getAttribute("selected");
    var isSelected4 = input4.getAttribute("selected");

    if (
        isSelected1 == "true" &&
        isSelected3 == "false" &&
        isSelected4 == "true" &&
        isSelected2 == "false"
    ) {
        window.alert("welldone");
    } else {
        window.alert("try again");
    }
}
