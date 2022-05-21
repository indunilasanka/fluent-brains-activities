function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);
}

// Drag and Drop starts---------------------------------
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

// Drag and Drop ends---------------------------------

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

var q2Answer = "";
var q10Answer = "";
var file1 = document.getElementById("q2");
var file2 = document.getElementById("q9");

if (file1) {
    var q2container1 = document.getElementById("q2-answers");
    var q2buttons1 = q2container1.getElementsByClassName("q2-answer");

    for (var i = 0; i < q2buttons1.length; i++) {
        q2buttons1[i].addEventListener("click", function () {
            q2Answer = this.innerHTML;

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
}
if (file2) {
    var q2container2 = document.getElementById("q9-answers");
    var q2buttons2 = q2container2.getElementsByClassName("q9-answer");

    for (var i = 0; i < q2buttons2.length; i++) {
        q2buttons2[i].addEventListener("click", function () {
            q2Answer = this.innerHTML;

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

function checkAnswerQ2() {
    if (q2Answer === "Nimali") {
        alert("weldone");
    } else {
        alert("try again");
    }
}

function checkAnswerQ9() {
    if (q2Answer === "AB and CD") {
        alert("weldone");
    } else {
        alert("try again");
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

function checkAllMissingValues(id) {
    let isCorrect = true;
    if (id === "q4") {
        const input = document.getElementById("q4input1");
        if (input.value != "28.56") {
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

// q10 --------------------------------------------------------

function submitQ10() {
    var element = document.getElementById("q10-ans-1").childNodes;

    if (element[1].id == "q10-answer") {
        alert("welldone");
    } else {
        alert("try again");
    }
}

// q11 --------------------------------------------------------

var q11 = document.getElementById("q11");
var q11Answer = "";

if (q11) {
    var q11container = document.getElementById("q11-answers");
    var q11buttons2 = q11container.getElementsByClassName("q11-answer");

    for (var i = 0; i < q11buttons2.length; i++) {
        q11buttons2[i].addEventListener("click", function () {
            q11Answer = this.innerHTML;
            var current1 = document.getElementsByClassName("answer-check-q11");

            if (current1.length === 0) {
                this.className += " answer-check-q11";
            } else {
                current1[0].className = current1[0].className.replace(
                    " answer-check-q11",
                    " "
                );
                this.className += " answer-check-q11";
            }
        });
    }
}

function submitQ11() {
    if (q11Answer === "True") {
        alert("welldone");
    } else {
        alert("try again");
    }
}

// q12 ---------------------------------------------------------------------------

function checkAnswerQ12(id) {
    let input = document.getElementById(id);

    if (id == "q12input3") {
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

// q13 ----------------------------------------------------------------------------

function checkAnswerQ13(id) {
    let input = document.getElementById(id);

    if (id == "q13input3") {
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

// q14 ----------------------------------------------------------------------------

function checkAnswerQ14(id) {
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

// q15 ---------------------------------------------------------------------------

function submitQ15() {
    let input = document.getElementById("q15input").value;

    if (input == "16") {
        alert("welldone");
    } else {
        alert("try again");
    }
}

// q16 ---------------------------------------------------------------------------

function checkAnswerQ16(id) {
    let input = document.getElementById(id);

    if (id == "q16input3") {
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

// q17 ----------------------------------------------------------------------------

function checkAnswerQ17(id) {
    let input = document.getElementById(id);

    if (id == "q17input2") {
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

// q22 ----------------------------------------------------------------------------

function checkAnswerQ22(id) {
    let input = document.getElementById(id);

    if (id == "q22input3") {
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

// q23 ---------------------------------------------------------------------------

function checkAnswerQ23(id) {
    let input = document.getElementById(id);

    if (id == "q23input4") {
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

// q24 ----------------------------------------------------------------------------

function submitQ24() {
    var one = document.getElementById("q24Input01").checked;
    var two = document.getElementById("q24Input02").checked;
    var three = document.getElementById("q24Input03").checked;
    var four = document.getElementById("q24Input04").checked;

    if (one && two && three && four) {
        alert("welldone");
    } else {
        alert("try again");
    }
}
