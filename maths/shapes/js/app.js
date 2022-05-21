function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);
}

// q1
function q1Checked(event) {
    if (event.target.id == "q1Circle1Cnt") {
        if (event.target.firstElementChild.id == "q1Circle1") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Circle1Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Circle1";
        }
    } else if (
        event.target.id == "q1Circle1" ||
        event.target.id == "q1Circle1Checked"
    ) {
        if (event.target.id == "q1Circle1") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Circle1Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Circle1";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Circle2Cnt") {
        if (event.target.firstElementChild.id == "q1Circle2") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Circle2Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Circle2";
        }
    } else if (
        event.target.id == "q1Circle2" ||
        event.target.id == "q1Circle2Checked"
    ) {
        if (event.target.id == "q1Circle2") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Circle2Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Circle2";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Square2Cnt") {
        if (event.target.firstElementChild.id == "q1Square2") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Square2Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Square2";
        }
    } else if (
        event.target.id == "q1Square2" ||
        event.target.id == "q1Square2Checked"
    ) {
        if (event.target.id == "q1Square2") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Square2Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Square2";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Star1Cnt") {
        if (event.target.firstElementChild.id == "q1Star1") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Star1Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Star1";
        }
    } else if (
        event.target.id == "q1Star1" ||
        event.target.id == "q1Star1Checked"
    ) {
        if (event.target.id == "q1Star1") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Star1Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Star1";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Circle3Cnt") {
        if (event.target.firstElementChild.id == "q1Circle3") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Circle3Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Circle3";
        }
    } else if (
        event.target.id == "q1Circle3" ||
        event.target.id == "q1Circle3Checked"
    ) {
        if (event.target.id == "q1Circle3") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Circle3Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Circle3";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Hexagon1Cnt") {
        if (event.target.firstElementChild.id == "q1Hexagon1") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Hexagon1Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Hexagon1";
        }
    } else if (
        event.target.id == "q1Hexagon1" ||
        event.target.id == "q1Hexagon1Checked"
    ) {
        if (event.target.id == "q1Hexagon1") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Hexagon1Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Hexagon1";
        }
    }

    // khksdjfh

    if (event.target.id == "q1SquareCnt") {
        if (event.target.firstElementChild.id == "q1Square") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1SquareChecked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Square";
        }
    } else if (
        event.target.id == "q1Square" ||
        event.target.id == "q1SquareChecked"
    ) {
        if (event.target.id == "q1Square") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1SquareChecked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Square";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Square1Cnt") {
        if (event.target.firstElementChild.id == "q1Square1") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Square1Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Square1";
        }
    } else if (
        event.target.id == "q1Square1" ||
        event.target.id == "q1Square1Checked"
    ) {
        if (event.target.id == "q1Square1") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Square1Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Square1";
        }
    }

    // if (event.target.id == "q1PineappleCnt") {
    //   if (event.target.firstElementChild.id == "q1Pineapple") {
    //     event.target.firstElementChild.style.color = "#3B95E0FF";
    //     event.target.firstElementChild.id = "q1PineappleChecked";
    //   } else {
    //     event.target.firstElementChild.style.color = "white";
    //     event.target.firstElementChild.id = "q1Pineapple";
    //   }
    // } else if (
    //   event.target.id == "q1Pineapple" ||
    //   event.target.id == "q1PineappleChecked"
    // ) {
    //   if (event.target.id == "q1Pineapple") {
    //     event.target.style.color = "#3B95E0FF";
    //     event.target.id = "q1PineappleChecked";
    //   } else {
    //     event.target.style.color = "white";
    //     event.target.id = "q1Pineapple";
    //   }
    // }

    // khksdjfh

    if (event.target.id == "q1Hexagon5Cnt") {
        if (event.target.firstElementChild.id == "q1Hexagon5") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Hexagon5Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Hexagon5";
        }
    } else if (
        event.target.id == "q1Hexagon5" ||
        event.target.id == "q1Hexagon5Checked"
    ) {
        if (event.target.id == "q1Hexagon5") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Hexagon5Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Hexagon5";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Hexagon2Cnt") {
        if (event.target.firstElementChild.id == "q1Hexagon2") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Hexagon2Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Hexagon2";
        }
    } else if (
        event.target.id == "q1Hexagon2" ||
        event.target.id == "q1Hexagon2Checked"
    ) {
        if (event.target.id == "q1Hexagon2") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Hexagon2Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Hexagon2";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Hexagon3Cnt") {
        if (event.target.firstElementChild.id == "q1Hexagon3") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Hexagon3Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Hexagon3";
        }
    } else if (
        event.target.id == "q1Hexagon3" ||
        event.target.id == "q1Hexagon3Checked"
    ) {
        if (event.target.id == "q1Hexagon3") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Hexagon3Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Hexagon3";
        }
    }

    // khksdjfh

    if (event.target.id == "q1Star2Cnt") {
        if (event.target.firstElementChild.id == "q1Star2") {
            event.target.style.backgroundColor = "#3b95e0ff";
            event.target.firstElementChild.id = "q1Star2Checked";
        } else {
            event.target.style.backgroundColor = "#77c0ff";
            event.target.firstElementChild.id = "q1Star2";
        }
    } else if (
        event.target.id == "q1Star2" ||
        event.target.id == "q1Star2Checked"
    ) {
        if (event.target.id == "q1Star2") {
            event.target.parentElement.style.backgroundColor = "#3b95e0ff";
            event.target.id = "q1Star2Checked";
        } else {
            event.target.parentElement.style.backgroundColor = "#77c0ff";
            event.target.id = "q1Star2";
        }
    }
}

function submitQ1() {
    var Circle1 = document.getElementById("q1Circle1Cnt").firstElementChild.id;
    var Circle2 = document.getElementById("q1Circle2Cnt").firstElementChild.id;
    var Square2 = document.getElementById("q1Square2Cnt").firstElementChild.id;
    var Star1 = document.getElementById("q1Star1Cnt").firstElementChild.id;

    var Circle3 = document.getElementById("q1Circle3Cnt").firstElementChild.id;
    var Hexagon1 = document.getElementById("q1Hexagon1Cnt").firstElementChild.id;
    var Square = document.getElementById("q1SquareCnt").firstElementChild.id;
    var Square1 = document.getElementById("q1Square1Cnt").firstElementChild.id;

    var Hexagon5 = document.getElementById("q1Hexagon5Cnt").firstElementChild.id;
    var Hexagon2 = document.getElementById("q1Hexagon2Cnt").firstElementChild.id;
    var Hexagon3 = document.getElementById("q1Hexagon3Cnt").firstElementChild.id;
    var Star2 = document.getElementById("q1Star2Cnt").firstElementChild.id;

    if (
        Circle1 == "q1Circle1Checked" &&
        Circle2 == "q1Circle2Checked" &&
        Square2 !== "q1Square2Checked" &&
        Star1 !== "q1Star1Checked" &&
        Circle3 !== "q1Circle3Checked" &&
        Hexagon1 !== "q1Hexagon1Checked" &&
        Square == "q1SquareChecked" &&
        Square1 == "q1Square1Checked" &&
        Hexagon5 == "q1Hexagon5Checked" &&
        Hexagon2 == "q1Hexagon2Checked" &&
        Hexagon3 == "q1Hexagon3Checked" &&
        Star2 !== "q1Star2Checked"
    ) {
        alert("welldone");
    } else {
        alert("try again");
    }
}

var q2Answer1 = "";
var q2Answer2 = "";
var q2Answer3 = "";
var q2container1 = document.getElementById("q2-shapes-container1");
var q2buttons1 = q2container1.getElementsByClassName("answer-name");
for (var i = 0; i < q2buttons1.length; i++) {
    q2buttons1[i].addEventListener("click", function () {
        q2Answer1 = this.innerHTML;
        //console.log(q2Answer1);

        var current1 = document.getElementsByClassName("answer-check1");
        //console.log(current1);
        if (current1.length === 0) {
            this.className += " answer-check1";
            //console.log("not found");
        } else {
            //console.log("found");
            //console.log(current1[0].className);
            current1[0].className = current1[0].className.replace(
                " answer-check1",
                " "
            );
            this.className += " answer-check1";
        }
    });
}
var q2container2 = document.getElementById("q2-shapes-container2");
var q2buttons2 = q2container2.getElementsByClassName("answer-name");

for (let j = 0; j < q2buttons2.length; j++) {
    q2buttons2[j].addEventListener("click", function () {
        q2Answer2 = this.innerHTML;

        var current = document.getElementsByClassName("answer-check2");
        if (current.length === 0) {
            this.className += " answer-check2";
        } else {
            current[0].className = current[0].className.replace(
                " answer-check2",
                " "
            );
            this.className += " answer-check2";
        }
    });
}

var q2container3 = document.getElementById("q2-shapes-container3");
var q2buttons3 = q2container3.getElementsByClassName("answer-name");

for (let j = 0; j < q2buttons3.length; j++) {
    q2buttons3[j].addEventListener("click", function () {
        q2Answer3 = this.innerHTML;

        var current = document.getElementsByClassName("answer-check3");
        if (current.length === 0) {
            this.className += " answer-check3";
        } else {
            current[0].className = current[0].className.replace(
                " answer-check3",
                " "
            );
            this.className += " answer-check3";
        }
    });
}

function handleSubmitQ2() {
    if (
        q2Answer1 === "Cylinder" &&
        q2Answer2 === "Sphere" &&
        q2Answer3 === "Tetrahedron"
    ) {
        alert("well done");
    } else {
        alert("try again");
    }
}

function handleSubmitQ3() {
    if (
        q2Answer1 === "Ellipse" &&
        q2Answer2 === "Pentagon" &&
        q2Answer3 === "Rhombus"
    ) {
        alert("well done");
    } else {
        alert("try again");
    }
}

function q4answerCheck(id) {
    let input = document.getElementById(id);
    if (input.classList.value === "q4-single-answer") {
        input.classList.add("answer-check1");
    } else {
        input.classList.remove("answer-check1");
    }
}

function handleSubmitQ4() {
    let input1 = document.getElementById("q4input1");
    let input2 = document.getElementById("q4input2");
    let input3 = document.getElementById("q4input3");
    let input4 = document.getElementById("q4input4");
    if (
        input2.className === "q4-single-answer answer-check1" ||
        input3.className === "q4-single-answer answer-check1"
    ) {
        alert("try again");
    } else if (
        input1.className === "q4-single-answer answer-check1" &&
        input4.className === "q4-single-answer answer-check1"
    ) {
        alert("well done");
    } else {
        alert("try again");
    }
}

// q5
function q5answerCheck(id) {
    let input = document.getElementById(id);
    if (input.classList.value === "q1-check-box") {
        input.classList.add("check-color");
    } else {
        //console.log(input.classList.value);
        input.classList.remove("check-color");
    }
}

function submitQ5() {
    let input1 = document.getElementById("q5input1");
    let input2 = document.getElementById("q5input2");
    let input3 = document.getElementById("q5input3");
    let input4 = document.getElementById("q5input4");
    if (
        input1.className === "q1-check-box check-color" ||
        input2.className === "q1-check-box check-color" ||
        input4.className === "q1-check-box check-color"
    ) {
        alert("try again");
    } else if (input3.className === "q1-check-box check-color") {
        alert("well done");
    } else {
        alert("try again");
    }
}

function submitQ6() {
    let input1 = document.getElementById("q6input1");
    let input2 = document.getElementById("q6input2");
    let input3 = document.getElementById("q6input3");
    let input4 = document.getElementById("q6input4");
    if (
        input1.className === "q1-check-box check-color" ||
        input4.className === "q1-check-box check-color"
    ) {
        alert("try again");
    } else if (
        input3.className === "q1-check-box check-color" &&
        input2.className === "q1-check-box check-color"
    ) {
        alert("well done");
    } else {
        alert("try again");
    }
}

function submitQ7() {
    let input1 = document.getElementById("q7input1");
    let input2 = document.getElementById("q7input2");
    let input3 = document.getElementById("q7input3");
    let input4 = document.getElementById("q7input4");
    if (
        input1.className === "q1-check-box check-color" ||
        input3.className === "q1-check-box check-color" ||
        input4.className === "q1-check-box check-color"
    ) {
        alert("try again");
    } else if (input2.className === "q1-check-box check-color") {
        alert("well done");
    } else {
        alert("try again");
    }
}

function checkQ8Answer(id, value) {
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

function drag(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();

    //console.log(event.target);
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

function handleSubmitQ9() {
    let isCorrect = false;
    let block;
    let element;
    let items;
    block = document.getElementById("q9-answer-drop-grid");
    items = block.getElementsByClassName("q9-input-container");
    if (items[0].children[0].getAttribute("canswer") !== "ellipse") {
        //console.log("not found");
        if (items[0].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "ellipse");
            element.style.backgroundColor = "#46cd46";
            items[0].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "white";
                items[0].children[0].style.backgroundColor = "white";
            }, 2000);
        }
    } else if (items[1].children[0].getAttribute("canswer") !== "pentagon") {
        //console.log("not found");
        if (items[1].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "pentagon");
            element.style.backgroundColor = "#46cd46";
            items[1].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "white";
                items[1].children[0].style.backgroundColor = "white";
            }, 2000);
        }
    } else if (items[2].children[0].getAttribute("canswer") !== "square") {
        //console.log("not found");
        if (items[2].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "square");
            element.style.backgroundColor = "#46cd46";
            items[2].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "white";
                items[2].children[0].style.backgroundColor = "white";
            }, 2000);
        }
    } else if (items[3].children[0].getAttribute("canswer") !== "rectangle") {
        //console.log("not found");
        if (items[3].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "rectangle");
            element.style.backgroundColor = "#46cd46";
            items[3].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "white";
                items[3].children[0].style.backgroundColor = "white";
            }, 2000);
        }
    } else if (items[4].children[0].getAttribute("canswer") !== "triangle") {
        console.log("not found");
        if (items[4].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q9" + "triangle");
            element.style.backgroundColor = "#46cd46";
            items[4].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = "white";
                items[4].children[0].style.backgroundColor = "white";
            }, 2000);
        }
    } else {
        isCorrect = true;
    }
    if (isCorrect) {
        alert("well done");
    }
}

function checkTotalValue(id, actual) {
    const input = document.getElementById(id);
    if (input.value == actual) {
        input.style.color = "#46cd46";
        dogclap = true;
    } else {
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
        }, 1500);
    }
}

function handleSubmitQ10() {
    let isCorrect = true;
    const input1 = document.getElementById("q10input1");
    const input2 = document.getElementById("q10input2");
    const input3 = document.getElementById("q10input3");
    const input4 = document.getElementById("q10input4");
    const input5 = document.getElementById("q10input5");
    const input6 = document.getElementById("q10input6");

    if (input1.value !== "4") {
        input1.style.color = "#FF0000A8";
        input1.value = "✖";
        isCorrect = false;
        setTimeout(() => {
            input1.style.color = "black";
            input1.value = "";
        }, 1000);
    }
    if (input2.value !== "4") {
        input2.style.color = "#FF0000A8";
        input2.value = "✖";
        isCorrect = false;
        setTimeout(() => {
            input2.style.color = "black";
            input2.value = "";
        }, 1000);
    }
    if (input3.value !== "6") {
        input3.style.color = "#FF0000A8";
        input3.value = "✖";
        isCorrect = false;
        setTimeout(() => {
            input3.style.color = "black";
            input3.value = "";
        }, 1000);
    }
    if (input4.value !== "2") {
        input4.style.color = "#FF0000A8";
        input4.value = "✖";
        isCorrect = false;
        setTimeout(() => {
            input4.style.color = "black";
            input4.value = "";
        }, 1000);
    }
    if (input5.value !== "1") {
        input5.style.color = "#FF0000A8";
        input5.value = "✖";
        isCorrect = false;
        setTimeout(() => {
            input5.style.color = "black";
            input5.value = "";
        }, 1000);
    }
    if (input6.value !== "1") {
        input6.style.color = "#FF0000A8";
        input6.value = "✖";
        isCorrect = false;
        setTimeout(() => {
            input6.style.color = "black";
            input6.value = "";
        }, 1000);
    }
    if (isCorrect) {
        //print alert
        alert("Weldone");
    }
}

// q11

function checkMissingLetter(id, actual) {
    const input = document.getElementById(id);
    if (input.value !== actual && input.value !== "") {
        setTimeout(() => {
            input.style.color = "black";
        }, 2000);
        input.style.color = "#FF0000A8";
    } else if (input.value !== "") {
        input.style.color = "#46cd46";
    }
}

function checkMissingLettersAll(qId) {
    let isCorrect = true;

    if (qId == "q1") {
    } else if (qId == "q11") {
        const input1 = document.getElementById("q11input1");
        if (input1.value !== "6") {
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = "black";
            }, 2000);
            input1.style.color = "#FF0000A8";
        }
        if (input1.value == "") {
            isCorrect = false;

            setTimeout(() => {
                input1.value = "";
                input1.style.color = "black";
            }, 2000);
            input1.style.color = "#FF0000A8";
            input1.value = "✖";
        }
    }

    if (isCorrect) {
        alert("welldone");
    }
}

// q12 ----------------------------------------------------------------------

function submitQ12() {
    var element1 = document.getElementById("q12shape1");
    var element2 = document.getElementById("q12shape2");
    var element3 = document.getElementById("q12shape3");

    var parent1 = element1.parentElement.id;
    var parent2 = element2.parentElement.id;
    var parent3 = element3.parentElement.id;

    if (
        parent1 == "q12place3" &&
        parent2 == "q12place2" &&
        parent3 == "q12place1"
    ) {
        alert("welldone");
    } else {
        alert("try again");
    }
}

// q13 ------------------------------------------------------------------------

function selectQ13(id) {
  const elem = document.getElementById(id);
  const select = elem.getAttribute("selected");

  if (select == "false") {
    elem.parentElement.style.backgroundColor = "#419ae259";
    elem.setAttribute("selected", "true");
  } else {
    elem.parentElement.style.backgroundColor = "transparent";
    elem.setAttribute("selected", "false");
  }
}

function submitQ13() {
  var q13Count = 0;
  var elm;
  var select, type;

  for (var i = 1; i <= 4; i++) {
    for (var j = 1; j <= 5; j++) {
      elm = document.getElementById("row" + i + "img" + j);
      select = elm.getAttribute("selected");
      type = elm.getAttribute("type");

      if (select == "true" && type == "non-circle") {
        alert("try again");
        return;
      } else if (select == "true" && type == "circle") {
        q13Count++;
      }
    }
  }

  if (q13Count == 8) {
    alert("welldone");
  } else {
    alert("try again");
  }
}
