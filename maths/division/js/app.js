function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);
}

function drag(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function dropQ1(event) {
    event.preventDefault();
    console.log("target element");
    console.log(event.target);
    var drop_target = event.target;
    var drag_target_id = event.dataTransfer.getData("target_id");
    var drag_target = document.getElementById(drag_target_id);
    console.log("drop element");
    console.log(drag_target);
    if (drop_target !== null && drag_target !== null) {
        drop_target.appendChild(document.getElementById(drag_target_id));
    }
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

function checkPattern() {
    let input1 = document.getElementById("q1drag1");
    let input2 = document.getElementById("q1drag2");
    let length1 = input1.getElementsByClassName("q1-drag-image").length;
    let length2 = input2.getElementsByClassName("q1-drag-image").length;
    console.log(length1);
    console.log(length2);
    if (length1 == 2 && length2 == 2) {
        alert("weldone");
    } else {
        alert("try again");
    }
}

function handleSubmit(id, value) {
    let input = document.getElementById(id);
    if (value === 1) {
        alert("well done");
    } else {
        input.style.borderColor = "#FF0000A8";
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
            input.style.color = "black";
        }, 2000);
    }
}

var q2Answer1 = "";
var q2Answer2 = "";

var file1 = document.getElementById("q3");
var file2 = document.getElementById("q13");

if (file1) {
    var q2container1 = document.getElementById("q3-answerId");
    var q2buttons1 = q2container1.getElementsByClassName("q3-answer");
    console.log(q2buttons1);
    for (var i = 0; i < q2buttons1.length; i++) {
        q2buttons1[i].addEventListener("click", function () {
            q2Answer1 = this.innerHTML;
            console.log(q2Answer1);

            var current1 = document.getElementsByClassName("answer-check");
            //console.log(current1);
            if (current1.length === 0) {
                this.className += " answer-check";
                //console.log("not found");
            } else {
                //console.log("found");
                //console.log(current1[0].className);
                current1[0].className = current1[0].className.replace(
                    " answer-check",
                    " "
                );
                this.className += " answer-check";
            }
        });
    }
} else if (file2) {
    var q13container = document.getElementById("q13-answerId");
    var q13buttons = q13container.getElementsByClassName("q13-answer");
    for (var i = 0; i < q13buttons.length; i++) {
        q13buttons[i].addEventListener("click", function () {
            q2Answer2 = this.innerHTML;
            var current1 = document.getElementsByClassName("answer-check");
            if (current1.length === 0) {
                this.className += " answer-check";
            } else {
                current1[0].className = current1[0].className.replace(
                    " answer-check",
                    " "
                );
                this.className += " answer-check";
            }
        });
    }
}

function checkAnswerQ3() {
    if (q2Answer1 === "True") {
        alert("weldone");
    } else {
        alert("try again");
    }
}

function checkAllAnswerQ6() {
    let input1 = document.getElementById("answer1");
    let input2 = document.getElementById("answer2");
    let children = input1.children;
    let children2 = input2.children;
    let isCorrect = false;
    if (children[0].getAttribute("canswer") !== "4") {
        if (children[0].getAttribute("canswer") !== undefined)
            element = document.getElementById("q6input" + 4);
        element.style.backgroundColor = "#46cd46";
        children[0].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children[0].style.backgroundColor = "white";
        }, 2000);
    } else if (children2[0].getAttribute("canswer") !== "2") {
        if (children2[0].getAttribute("canswer") !== undefined)
            element = document.getElementById("q6input" + 2);
        element.style.backgroundColor = "#46cd46";
        children2[0].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children2[0].style.backgroundColor = "white";
        }, 2000);
    } else {
        isCorrect = true;
    }
    if (isCorrect) {
        alert("weldone");
    }
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
    if (id === "q9") {
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
    }
    if (id === "q11") {
        const input1 = document.getElementById("q11input1");
        const input2 = document.getElementById("q11input2");
        const input3 = document.getElementById("q11input3");

        if (input1.value != "8") {
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
        if (input2.value != "6") {
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
        if (input3.value != "3") {
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
    if (id === "q14") {
        const input1 = document.getElementById("q14input1");
        const input2 = document.getElementById("q14input2");
        const input3 = document.getElementById("q14input3");

        if (input1.value != "1") {
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
        if (input2.value != "4") {
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
        if (input3.value != "9") {
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
    if (id === "q15") {
        const input1 = document.getElementById("q15input1");
        const input2 = document.getElementById("q15input2");

        if (input1.value != "48") {
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
        if (input2.value != "6") {
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
    }
    if (id === "q16") {
        const input1 = document.getElementById("q16input1");

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
    }
    if (isCorrect) {
        //print alert
        alert("Well done");
    }
}

function checkAllAnswerQ10() {
    let input1 = document.getElementById("q10answer1");
    let input2 = document.getElementById("q10answer2");
    let children = input1.children;
    let children2 = input2.children;
    let isCorrect = false;
    if (children[0].getAttribute("canswer") !== "4") {
        if (children[0].getAttribute("canswer") !== undefined)
            element = document.getElementById("q10input" + 4);
        element.style.backgroundColor = "#46cd46";
        children[0].parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children[0].parentElement.style.backgroundColor = "white";
        }, 2000);
    } else if (children2[0].getAttribute("canswer") !== "2") {
        if (children2[0].getAttribute("canswer") !== undefined)
            element = document.getElementById("q10input" + 2);
        element.style.backgroundColor = "#46cd46";
        children2[0].parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children2[0].parentElement.style.backgroundColor = "white";
        }, 2000);
    } else {
        isCorrect = true;
    }
    if (isCorrect) {
        alert("weldone");
    }
}

function checkAllAnswerQ12() {
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
                children[0].style.backgroundColor = "white";
            }, 2000);
        } else if (
            children2 !== "36" &&
            children2 !== "12" &&
            children2 !== "18" &&
            children2 !== null
        ) {
            children[1].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                children[1].style.backgroundColor = "white";
            }, 2000);
        } else if (
            children3 !== "36" &&
            children3 !== "12" &&
            children3 !== "18" &&
            children3 !== null
        ) {
            children[2].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                children[2].style.backgroundColor = "white";
            }, 2000);
        } else {
            if (children1 !== null && children2 !== null && children3 !== null) {
                alert("weldone");
            }
        }
    }
}

function checkAnswerQ13() {
    if (q2Answer2 === "Positive") {
        alert("weldone");
    } else {
        alert("try again");
    }
}

// q17 -------------------------------------------------------------------

function q17Select(id) {
    var answer = document.getElementById(id);

    if (id == "q17input1") {
        window.alert("welldone");
    } else {
        answer.style.borderColor = "red";
        answer.style.color = "red";
        setTimeout(() => {
            answer.style.borderColor = "#4faeffff";
            answer.style.color = "black";
        }, 2000);
    }
}

// q18 -------------------------------------------------------------------

function submitQ18() {
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

// q19 -------------------------------------------------------------------

function q19Select(id) {
    var answer = document.getElementById(id);

    if (id == "q19input2") {
        window.alert("welldone");
    } else {
        answer.style.borderColor = "red";
        answer.style.color = "red";
        setTimeout(() => {
            answer.style.borderColor = "#4faeffff";
            answer.style.color = "black";
        }, 2000);
    }
}

// q20 -------------------------------------------------------------------

function submitQ20() {
    var answer1 = document.getElementById("q20input1").value;
    var answer2 = document.getElementById("q20input2").value;

    if (answer1 == "4" && answer2 == "4") {
        window.alert("welldone");
    } else {
        window.alert("try again");
    }
}

// q21 -------------------------------------
function submitQ21() {
    var answer1 = document.getElementById("q21input1").value;
    var answer2 = document.getElementById("q21input2").value;

    if (answer1 == "2" && answer2 == "2") {
        window.alert("welldone");
    } else {
        window.alert("try again");
    }
}

// q23 -------------------------------------------------------------------

function submitQ23() {
    var count1 = 0;
    var count2 = 0;

    for (var i = 1; i <= 6; i++) {
        var element = document.getElementById("q23-t1-b" + i);
        if (element.childNodes[1].className == "q23fish") {
            count1 += 1;
        }
    }

    for (var i = 1; i <= 6; i++) {
        var element = document.getElementById("q23-t2-b" + i);
        if (element.childNodes[1].className == "q23fish") {
            count2 += 1;
        }
    }

    if (count1 == 3 && count2 == 3) {
        alert("welldone");
    } else {
        alert("try again");
    }
}
