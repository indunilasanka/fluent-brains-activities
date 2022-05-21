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

function checkAllMissingValues(id) {
    let isCorrect = true;
    if (id === "q1") {
        const input = document.getElementById("q1input1");
        if (input.value != "26") {
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
        if (input.value != "18") {
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
        const input = document.getElementById("q3input1");
        if (input.value != "20") {
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
    if (id === "q5") {
        const input = document.getElementById("q5input1");
        if (input.value != "44") {
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

// q8 ------------------------------------------------------

function selectAnswerQ8(id) {
    let input = document.getElementById(id);

    if (id == "q8input3") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
    }
}

// q9 ------------------------------------------------------

function selectAnswerQ9(id) {
    let input = document.getElementById(id);

    if (id == "q9input2") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
    }
}

// q10 ------------------------------------------------------

function selectAnswerQ10(id) {
    let input = document.getElementById(id);

    if (id == "q10input3") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
    }
}

// q11 ------------------------------------------------------

function selectAnswerQ11(id) {
    let input = document.getElementById(id);

    if (id == "q11input4") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
    }
}

// q12 ------------------------------------------------------

function selectAnswerQ12(id) {
    let input = document.getElementById(id);

    if (id == "q12input2") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
    }
}

// q13 ------------------------------------------------------

function selectAnswerQ13(id) {
    let input = document.getElementById(id);

    if (id == "q13input2") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
    }
}

// q14 ------------------------------------------------------

function selectAnswerQ14(id) {
    let input = document.getElementById(id);

    if (id == "q14input2") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
    }
}

// q15 ------------------------------------------------------

function selectAnswerQ15(id) {
    let input = document.getElementById(id);

    if (id == "q15input2") {
        alert("welldone");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
    }
}
