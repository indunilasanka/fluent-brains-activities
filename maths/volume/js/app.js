function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);
}

function checkAnswerClick(id, value) {
    const input = document.getElementById(id);
    if (value === 0) {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
    } else {
        alert("weldone");
    }
}

// drag and drop
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

function checkSubmitPatternQ3() {
    let isCorrect = false;
    let element;
    const block = document.getElementById("q3block");
    let children = block.children;
    if (children[0].getAttribute("canswer") !== "2") {
        if (children[0].getAttribute("canswer") !== undefined)
            element = document.getElementById("q3image" + 2);
        element.style.backgroundColor = "#46cd46";
        children[0].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "#f4f4f4";
            children[0].style.backgroundColor = "#f4f4f4";
        }, 2000);
    } else if (children[1].getAttribute("canswer") !== "3") {
        if (children[1].getAttribute("canswer") !== undefined)
            element = document.getElementById("q3image" + 3);
        element.style.backgroundColor = "#46cd46";
        children[1].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "#f4f4f4";
            children[1].style.backgroundColor = "#f4f4f4";
        }, 2000);
    } else if (children[2].getAttribute("canswer") !== "4") {
        if (children[2].getAttribute("canswer") !== undefined)
            element = document.getElementById("q3image" + 4);
        element.style.backgroundColor = "#46cd46";
        children[2].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "#f4f4f4";
            children[2].style.backgroundColor = "#f4f4f4";
        }, 2000);
    } else if (children[3].getAttribute("canswer") !== "5") {
        if (children[3].getAttribute("canswer") !== undefined)
            element = document.getElementById("q3image" + 5);
        element.style.backgroundColor = "#46cd46";
        children[3].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "#f4f4f4";
            children[3].style.backgroundColor = "#f4f4f4";
        }, 2000);
    } else {
        isCorrect = true;
    }
    if (isCorrect) {
        alert("weldone");
    }
}

function checkMissingValuesAll(qId) {
    let isCorrect = true;

    if (qId === "q4") {
        const input1 = document.getElementById("q4input1");
        const input2 = document.getElementById("q4input2");
        const input3 = document.getElementById("q4input3");
        const input4 = document.getElementById("q4input4");

        if (input1.value != "3") {
            if (input1.value == "") {
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
        if (input2.value != "5") {
            if (input2.value == "") {
                input2.style.color = "#FF0000A8";
                input2.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input2.value = "";
                    input2.style.color = "black";
                }, 2000);
            }
            input2.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = "black";
            }, 2000);
        }
        if (input3.value != "6") {
            if (input3.value == "") {
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
        if (input4.value != "9") {
            if (input4.value == "") {
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
            //print alert
            alert("Weldone");
        }
    }
}

function checkTotalValue(id, actual) {
    const input = document.getElementById(id);
    if (input.value === actual) {
        input.style.color = "#46cd46";
    } else {
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
        }, 2000);
    }
}

// q5 --------------------------------------------------------

function checkAnswerQ5(id) {
    const input = document.getElementById(id);

    if (id == "q5input2") {
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

// q6 --------------------------------------------------------

function checkAnswerQ6(id) {
    const input = document.getElementById(id);

    if (id == "q6input3") {
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

// q7 --------------------------------------------------------

function checkAnswerQ7(id) {
    const input = document.getElementById(id);

    if (id == "q7input4") {
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

// q8 --------------------------------------------------------

function checkAnswerQ8(id) {
    const input = document.getElementById(id);

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

// q9 --------------------------------------------------------

function checkAnswerQ9(id) {
    const input = document.getElementById(id);

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

// q10 --------------------------------------------------------

function checkAnswerQ10(id) {
    const input = document.getElementById(id);

    if (id == "q10input2") {
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

// q11 --------------------------------------------------------

function checkAnswerQ11(id) {
    const input = document.getElementById(id);

    if (id == "q11input3") {
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

// q12 --------------------------------------------------------

function checkAnswerQ12(id) {
    const input = document.getElementById(id);

    if (id == "q12input3") {
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
