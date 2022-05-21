function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);
}

function handleNumberOfDays(id, isCorrect) {
    const block = document.getElementById(id);
    if (isCorrect) {
        window.alert("Correct Answer");
    } else {
        block.style.backgroundColor = "#FF4646";

        setTimeout(() => {
            block.style.backgroundColor = "rgb(100, 184, 255)";
        }, 1000);
    }
}

function checkCorrectTime() {
    const input1 = document.getElementById("q2input1");

    if (input1.value == "4" || input1.value == "04") {
        window.alert("Welldone");
    } else {
        input1.style.color = "#FF0000A8";
        input1.value = "✖";
        setTimeout(() => {
            input1.style.color = "black";
            input1.value = "";
        }, 1000);
    }
}

function selectCorrectTime(id, isCorrect) {
    const block = document.getElementById(id);
    if (isCorrect) {
        window.alert("Welldone");
    } else {
        block.style.backgroundColor = "#FF4646";

        setTimeout(() => {
            block.style.backgroundColor = "rgb(100, 184, 255)";
        }, 1000);
    }
}

function selectCorrectDigiClock(id, isCorrect) {
    const block = document.getElementById(id);
    if (isCorrect) {
        window.alert("Welldone");
    } else {
        block.style.border = "1px solid #FF4646";

        setTimeout(() => {
            block.style.border = "1px solid #4FAEFFFF";
        }, 1000);
    }
}

function selectCorrectTimeByText(id, isCorrect) {
    const block = document.getElementById(id);
    if (isCorrect) {
        window.alert("Welldone");
    } else {
        block.style.border = "1px solid #FF4646";

        setTimeout(() => {
            block.style.border = "1px solid #4FAEFFFF";
        }, 1000);
    }
}

function checkAnswerQ6(id) {
    const input = document.getElementById(id);
    const answer = input.value.toLowerCase();
    var isCorrect = checkQ6(id, answer);

    if (isCorrect == true) {
        input.style.color = "#46cd46";
        return true;
    } else {
        input.style.color = "#FF0000A8";
        input.value = "✖";
        setTimeout(() => {
            input.style.color = "black";
            input.value = "";
        }, 1000);
        return false;
    }
}

function checkQ6(id, answer) {
    if (id == "q6input1") {
        if (answer == "february") {
            return true;
        }
    }

    if (id == "q6input2") {
        if (answer == "29" || answer == "twenty nine") {
            return true;
        }
    }

    if (id == "q6input3") {
        if (answer == "28" || answer == "twenty eight") {
            return true;
        }
    }

    if (id == "q6input4") {
        if (answer == "leap day") {
            return true;
        }
    }

    if (id == "q6input5") {
        if (answer == "7" || answer == "07" || answer == "seven") {
            return true;
        }
    }

    if (id == "q6input6") {
        if (answer == "tuesday") {
            return true;
        }
    }

    if (id == "q6input7") {
        if (answer == "5" || answer == "05" || answer == "five") {
            return true;
        }
    }

    return false;
}

function checkAnswerQ7(id) {
    const input = document.getElementById(id);
    const answer = input.value.toLowerCase();
    var isCorrect = checkQ7(id, answer);

    if (isCorrect == true) {
        input.style.color = "#46cd46";
        return true;
    } else {
        input.style.color = "#FF0000A8";
        input.value = "✖";
        setTimeout(() => {
            input.style.color = "black";
            input.value = "";
        }, 1000);
        return false;
    }
}

function checkQ7(id, answer) {
    if (id == "q7input1") {
        if (answer == "1" || answer == "01") {
            return true;
        }
    }

    if (id == "q7input2") {
        if (answer == "35") {
            return true;
        }
    }

    if (id == "q7input3") {
        if (
            answer == "2:25" ||
            answer == "02:25" ||
            answer == "2.25" ||
            answer == "02.25"
        ) {
            return true;
        }
    }

    if (id == "q7input4") {
        if (answer == "1827") {
            return true;
        }
    }

    if (id == "q7input5") {
        if (answer == "10") {
            return true;
        }
    }

    if (id == "q7input6") {
        answer = answer.replace(/[\s-/]/, "");
        if (answer == "15november" || answer == "november15") {
            return true;
        }
    }

    if (id == "q7input7") {
        answer = answer.replace(/[\s-/]/, "");
        if (
            answer == "7august" ||
            answer == "07august" ||
            answer == "august7" ||
            answer == "august07"
        ) {
            return true;
        }
    }

    return false;
}

function checkAnswerQ8(id, actual) {
    const input = document.getElementById(id);
    var answer = input.value.toLowerCase();
    answer = answer.replace(/[\s]/, "");

    if (answer == actual) {
        input.style.color = "#46cd46";
        return true;
    } else if (answer == "") {
        input.style.color = "#FF0000A8";
        input.value = "✖";
        setTimeout(() => {
            input.style.color = "black";
            input.value = "";
        }, 2000);
        return false;
    } else {
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
        }, 2000);
        return false;
    }
}

function checkAnswerQ9(id, actual) {
    const input = document.getElementById(id);
    const answer = input.value.toLowerCase();

    if (answer == actual) {
        input.style.color = "#46cd46";
        return true;
    } else {
        input.style.color = "#FF0000A8";
        input.value = "✖";
        setTimeout(() => {
            input.style.color = "black";
            input.value = "";
        }, 1000);
        return false;
    }
}

function checkAnswerQ10(id, value) {
    const input = document.getElementById(id);
    var result = true;
    if (value === 0) {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#4FAEFFFF";
            input.style.color = "black";
        }, 2000);
        result = false;
    }
    if (result === true) {
        alert("weldone");
    }
}

function checkAllAnswers(qId) {
    if (qId == "q6") {
        var correctCount = 0;
        var isCorrect;

        for (var i = 1; i < 8; i++) {
            isCorrect = checkAnswerQ6("q6input" + i);
            if (isCorrect == true) {
                correctCount++;
            }
        }

        if (correctCount == 7) {
            window.alert("welldone");
        }
    }

    if (qId == "q9") {
        var correctCount = 0;
        var isCorrect;

        var months = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december",
        ];
        for (var i = 1; i < 13; i++) {
            isCorrect = checkAnswerQ9("q9input" + i, months[i - 1]);
            if (isCorrect == true) {
                correctCount++;
            }
        }

        if (correctCount == 12) {
            window.alert("welldone");
        }
    }

    if (qId == "q8") {
        var correctCount = 0;
        var isCorrect;

        var weeks = [
            "monday",
            "tuesday",
            "wednesday",
            "thursday",
            "friday",
            "saturday",
            "sunday",
        ];
        for (var i = 1; i < 8; i++) {
            isCorrect = checkAnswerQ8("q8input" + i, weeks[i - 1]);
            if (isCorrect == true) {
                correctCount++;
            }
        }

        if (correctCount == 7) {
            window.alert("welldone");
        }
    }

    if (qId == "q7") {
        var correctCount = 0;
        var isCorrect;

        for (var i = 1; i < 8; i++) {
            isCorrect = checkAnswerQ7("q7input" + i);
            if (isCorrect == true) {
                correctCount++;
            }
        }

        if (correctCount == 7) {
            window.alert("welldone");
        }
    }
}
