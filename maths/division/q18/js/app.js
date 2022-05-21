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

function q18submit() {
    var count1 = 0;
    var count2 = 0;
    var count3 = 0;

    for (var i = 1; i <= 4; i++) {
        var element = document.getElementById("q18-t1-b" + i);
        if (element.childNodes[1].className == "q18cherry") {
            count1 += 1;
        }
    }

    for (var i = 1; i <= 4; i++) {
        var element = document.getElementById("q18-t2-b" + i);
        if (element.childNodes[1].className == "q18cherry") {
            count2 += 1;
        }
    }

    for (var i = 1; i <= 4; i++) {
        var element = document.getElementById("q18-t3-b" + i);
        if (element.childNodes[1].className == "q18cherry") {
            count3 += 1;
        }
    }

    if (count1 == 3 && count2 == 3 && count3 == 3) {
        alert("welldone");
    } else {
        alert("try again");
    }
}
