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
var q2Answer = "";
var file2 = document.getElementById("q9");
if (file2) {
    var q2container2 = document.getElementById("q9-answers");
    var q2buttons2 = q2container2.getElementsByClassName("q9-answer");

    for (var i = 0; i < q2buttons2.length; i++) {
        q2buttons2[i].addEventListener("click", function () {
            q2Answer = this.innerHTML;

            var current1 = document.getElementsByClassName("q9-answer-check");
            if (current1.length === 0) {
                this.className += " q9-answer-check";
            } else {
                current1[0].className = current1[0].className.replace(
                    " q9-answer-check",
                    " "
                );
                this.className += " q9-answer-check";
            }
        });
    }
}

function q9checkAnswer() {
    if (q2Answer === "AB and CD") {
        alert("weldone");
    } else {
        alert("try again");
    }
}
