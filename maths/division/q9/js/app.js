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
function q9checkAnswer(id, actual) {
    let input = document.getElementById(id);
    if (input.value === actual) {
        input.style.color = "#46cd46";
    } else {
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
        }, 2000);
    }
}

function q9checkMissingValues() {
    let isCorrect = true;
    const input1 = document.getElementById("q9input1");
    const input2 = document.getElementById("q9input2");
    const input3 = document.getElementById("q9input3");
    const input4 = document.getElementById("q9input4");

    if (input1.value != "3") {
        if (input1.value === "") {
            input1.style.color = "#FF0000A8";
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = "black";
                input1.value = "";
            }, 2000);
        }
        input1.style.color = "#FF0000A8";
        isCorrect = false;
        setTimeout(() => {
            input1.style.color = "black";
        }, 2000);
    }

    if (input2.value != "2") {
        if (input2.value === "") {
            input2.style.color = "#FF0000A8";
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = "black";
                input2.value = "";
            }, 2000);
        }
        input2.style.color = "#FF0000A8";
        isCorrect = false;
        setTimeout(() => {
            input2.style.color = "black";
        }, 2000);
    }
    if (input3.value != "2") {
        if (input3.value === "") {
            input3.style.color = "#FF0000A8";
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = "black";
                input3.value = "";
            }, 2000);
        }
        input3.style.color = "#FF0000A8";
        isCorrect = false;
        setTimeout(() => {
            input3.style.color = "black";
        }, 2000);
    }
    if (input4.value != "1") {
        if (input4.value === "") {
            input4.style.color = "#FF0000A8";
            input4.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = "black";
                input4.value = "";
            }, 2000);
        }
        input4.style.color = "#FF0000A8";
        isCorrect = false;
        setTimeout(() => {
            input4.style.color = "black";
        }, 2000);
    }
    if (isCorrect) {
        alert("Well done");
    }

}
