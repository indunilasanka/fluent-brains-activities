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

function q12checkPattern() {
    let input1 = document.getElementById("q12-answers");
    let children = input1.children;

    let children1 = children[0].getAttribute("canswer");
    let children2 = children[1].getAttribute("canswer");
    let children3 = children[2].getAttribute("canswer");

    if (children1 !== null || children2 !== null || children3 !== null) {
        if (
            children1 !== "36" &&
            children1 !== "12" &&
            children1 !== "18" &&
            children1 !== null
        ) {
            children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                children[0].style.backgroundColor = "transparent";
            }, 2000);
        } else if (
            children2 !== "36" &&
            children2 !== "12" &&
            children2 !== "18" &&
            children2 !== null
        ) {
            children[1].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                children[1].style.backgroundColor = "transparent";
            }, 2000);
        } else if (
            children3 !== "36" &&
            children3 !== "12" &&
            children3 !== "18" &&
            children3 !== null
        ) {
            children[2].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                children[2].style.backgroundColor = "transparent";
            }, 2000);
        } else {
            if (children1 !== null && children2 !== null && children3 !== null) {
                alert("weldone");
            }
        }
    }
}
