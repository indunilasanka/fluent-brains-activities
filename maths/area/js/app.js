function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);
}

function checkAnswer(id, actual) {
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

function checkMissingValues(id) {
    let isCorrect = true;
    if (id === "q1") {
        const input = document.getElementById("q1input1");
        if (input.value != "588") {
            if (input.value === "") {
                input.style.color = "#FF0000A8";
                input.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input.style.color = "black";
                    input.value = "";
                }, 2000);
            }
            input.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input.style.color = "black";
            }, 2000);
        }
    }
    if (id === "q2") {
        const input = document.getElementById("q2input1");
        if (input.value != "12") {
            if (input.value === "") {
                input.style.color = "#FF0000A8";
                input.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input.style.color = "black";
                    input.value = "";
                }, 2000);
            }
            input.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input.style.color = "black";
            }, 2000);
        }
    }
    if (id === "q3") {
        const input1 = document.getElementById("q3input1");
        const input2 = document.getElementById("q3input2");
        const input3 = document.getElementById("q3input3");
        if (input1.value != "400") {
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
        if (input2.value != "20") {
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
        if (input3.value != "420") {
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
    }
    if (id === "q4") {
        const input = document.getElementById("q4input1");
        if (input.value != "5") {
            if (input.value === "") {
                input.style.color = "#FF0000A8";
                input.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input.style.color = "black";
                    input.value = "";
                }, 2000);
            }
            input.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input.style.color = "black";
            }, 2000);
        }
    }

    if (isCorrect) {
        //print alert
        alert("Well done");
    }
}

function handleSubmit(id, value) {
    let input = document.getElementById(id);
    if (value === 1) {
        alert("weldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
            input.style.color = "black";
        }, 2000);
    }
}

function handleSubmitQ9(id, value) {
    let input = document.getElementById(id);
    if (value === 1) {
        alert("weldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        input.children[1].children[0].style.borderColor = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
            input.style.color = "black";
            input.children[1].children[0].style.borderColor = "black";
        }, 2000);
    }
}

// q10 --------------------------------------------------------------

function submitQ10() {
    var one = document.getElementById("q10input1").checked;
    var two = document.getElementById("q10input2").checked;
    var three = document.getElementById("q10input3").checked;
    var four = document.getElementById("q10input4").checked;

    if (three && two && !one && !four) {
        alert("welldone");
    } else {
        alert("try again");
    }
}

// q11 --------------------------------------------------------------

function selectAnswerQ11(id) {
    let input = document.getElementById(id);

    if (id == "q11input3") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
            input.style.color = "black";
        }, 2000);
    }
}

// q12 --------------------------------------------------------------

function selectAnswerQ12(id) {
    let input = document.getElementById(id);

    if (id == "q12input2") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
            input.style.color = "black";
        }, 2000);
    }
}

// q13 --------------------------------------------------------------

function selectAnswerQ13(id) {
    let input = document.getElementById(id);

    if (id == "q13input2") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
            input.style.color = "black";
        }, 2000);
    }
}

// q14 --------------------------------------------------------------

function selectAnswerQ14(id) {
    let input = document.getElementById(id);

    if (id == "q14input3") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
            input.style.color = "black";
        }, 2000);
    }
}

// q15 --------------------------------------------------------------

function selectAnswerQ15(id) {
    let input = document.getElementById(id);

    if (id == "q15input1") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
            input.style.color = "black";
        }, 2000);
    }
}
