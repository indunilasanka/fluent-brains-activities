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
var q2Answer1 = "";

var file1 = document.getElementById("q3");

if (file1) {
    var q2container1 = document.getElementById("q3-answerId");
    var q2buttons1 = q2container1.getElementsByClassName("q3-answer");
    console.log(q2buttons1);
    for (var i = 0; i < q2buttons1.length; i++) {
        q2buttons1[i].addEventListener("click", function () {
            q2Answer1 = this.innerHTML;
            console.log(q2Answer1);

            var current1 = document.getElementsByClassName("q3-answer-check");
            //console.log(current1);
            if (current1.length === 0) {
                this.className += " q3-answer-check";
                //console.log("not found");
            } else {
                //console.log("found");
                //console.log(current1[0].className);
                current1[0].className = current1[0].className.replace(
                    " q3-answer-check",
                    " "
                );
                this.className += " q3-answer-check";
            }
        });
    }
}

function q3checkAnswer() {
    if (q2Answer1 === "True") {
        alert("weldone");
    } else {
        alert("try again");
    }
}
