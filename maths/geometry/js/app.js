function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);
}

// Q1 ----------------------------------
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

function checkMissingNumbers(id) {
    let isCorrect = true;
    if (id === 'q1') {
        const input = document.getElementById('q1input1');
        if (input.value != '2') {
            if (input.value === '') {
                input.style.color = '#FF0000A8';
                input.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input.style.color = 'black';
                    input.value = "";
                }, 2000);
            }
            input.style.color = '#FF0000A8';
            isCorrect = false;
            setTimeout(() => {
                input.style.color = 'black';
            }, 2000);
        }
    }
    if (isCorrect) {
        //print alert
        alert("Well done");
    }

}

// Q2 -----------------------------------
let array = [];
var q2Answer1 = "";
var q2Answer2 = "";
var q2Answer3 = "";
var q2Answer4 = "";
var q2Answer5 = "";
var q4Answer = "";


var file1 = document.getElementById('q2');
var file2 = document.getElementById('q5');
if (file1) {
    // console.log('q2');
    var q2container1 = document.getElementById("q1-block-1");
    var q2buttons1 = q2container1.getElementsByClassName("q2-button");
    for (var i = 0; i < q2buttons1.length; i++) {
        q2buttons1[i].addEventListener("click", function () {
            q2Answer1 = this.innerHTML;
            // console.log(q2Answer1);
            array.push(q2Answer1);
            var current1 = document.getElementsByClassName("answer-check1");
            if (current1.length === 0) {
                this.className += " answer-check1";
            } else {
                current1[0].className = current1[0].className.replace(
                    " answer-check1",
                    " "
                );
                this.className += " answer-check1";
            }
        });
    }
// second block ---------------------------------------
    var q2container2 = document.getElementById("q1-block-2");
    var q2buttons2 = q2container2.getElementsByClassName("q2-button");
    for (var i = 0; i < q2buttons2.length; i++) {
        q2buttons2[i].addEventListener("click", function () {
            q2Answer2 = this.innerHTML;
            // console.log(q2Answer2);
            array.push(q2Answer2);
            var current1 = document.getElementsByClassName("answer-check2");
            if (current1.length === 0) {
                this.className += " answer-check2";
            } else {
                current1[0].className = current1[0].className.replace(
                    " answer-check2",
                    " "
                );
                this.className += " answer-check2";
            }
        });
    }

// third block ------------------------------------
    var q2container3 = document.getElementById("q1-block-3");
    var q2buttons3 = q2container3.getElementsByClassName("q2-button");
    for (var i = 0; i < q2buttons3.length; i++) {
        q2buttons3[i].addEventListener("click", function () {
            q2Answer3 = this.innerHTML;
            // console.log(q2Answer3);
            array.push(q2Answer3);
            var current1 = document.getElementsByClassName("answer-check3");
            if (current1.length === 0) {
                this.className += " answer-check3";
            } else {
                current1[0].className = current1[0].className.replace(
                    " answer-check3",
                    " "
                );
                this.className += " answer-check3";
            }
        });

    }

// fourth block -------------------------------------
    var q2container4 = document.getElementById("q1-block-4");
    var q2buttons4 = q2container4.getElementsByClassName("q2-button");
    for (var i = 0; i < q2buttons4.length; i++) {
        q2buttons4[i].addEventListener("click", function () {
            q2Answer4 = this.innerHTML;
            // console.log(q2Answer4);
            array.push(q2Answer4);
            var current1 = document.getElementsByClassName("answer-check4");
            if (current1.length === 0) {
                this.className += " answer-check4";
            } else {
                current1[0].className = current1[0].className.replace(
                    " answer-check4",
                    " "
                );
                this.className += " answer-check4";
            }
        });
    }

//fifth block --------------------------------------
    var q2container5 = document.getElementById("q1-block-5");
    var q2buttons5 = q2container5.getElementsByClassName("q2-button");
    for (var i = 0; i < q2buttons5.length; i++) {
        q2buttons5[i].addEventListener("click", function () {
            q2Answer5 = this.innerHTML;
            // console.log(q2Answer5);
            array.push(q2Answer5);
            var current1 = document.getElementsByClassName("answer-check5");
            if (current1.length === 0) {
                this.className += " answer-check5";
            } else {
                current1[0].className = current1[0].className.replace(
                    " answer-check5",
                    " "
                );
                this.className += " answer-check5";
            }
        });
    }


} else if (file2) {
    var q4container = document.getElementById("q5-answerId");
    var q4buttons = q4container.getElementsByClassName("q5-answer-button");

    for (var i = 0; i < q4buttons.length; i++) {
        q4buttons[i].addEventListener("click", function () {
            q4Answer = this.innerHTML;

            var current1 = document.getElementsByClassName("answer-check6");
            if (current1.length === 0) {
                this.className += " answer-check6";
            } else {
                current1[0].className = current1[0].className.replace(
                    " answer-check6",
                    " "
                );
                this.className += " answer-check6";
            }
        });
    }
} else {
    console.log("none");
}


function submitQ2() {
    //console.log(array);
    const input1 = document.getElementById('q2input2');
    const input2 = document.getElementById('q2input3');
    const input3 = document.getElementById('q2input6');
    const input4 = document.getElementById('q2input7');
    const input5 = document.getElementById('q2input10');

    if (q2Answer1 !== 'True' && q2Answer1 !== '') {
        input1.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input1.style.backgroundColor = 'white';
        }, 2000);
    } else if (q2Answer2 !== 'False' && q2Answer2 !== '') {
        input2.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input2.style.backgroundColor = 'white';
        }, 2000);
    } else if (q2Answer3 !== 'True' && q2Answer3 !== '') {
        input3.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input3.style.backgroundColor = 'white';
        }, 2000);
    } else if (q2Answer4 !== 'False' && q2Answer4 !== '') {
        input4.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input4.style.backgroundColor = 'white';
        }, 2000);
    } else if (q2Answer5 !== 'True' && q2Answer5 !== '') {
        input5.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input5.style.backgroundColor = 'white';
        }, 2000);
    } else {
        if (q2Answer1 === "True" && q2Answer2 === "False" &&
            q2Answer3 === "True" && q2Answer4 === "False" && q2Answer5 === "True") {
            alert('weldone');
        }
    }

}

// Q3 ---------------------------------------
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
        }, 2000)
    }
}

function checkAnswerQ5() {
    if (q4Answer === 'False') {
        alert('weldone');
    } else {
        alert('try again');
    }
}

var canvas = document.getElementById("myCanvas");

if (canvas) {
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(10, 70);
    ctx.lineTo(10, 130);
    ctx.lineTo(70, 130);
    ctx.lineTo(70, 190);
    ctx.lineTo(130, 190);
    ctx.lineTo(130, 130);
    ctx.lineTo(190, 130);
    ctx.lineTo(190, 70);
    ctx.lineTo(130, 70);
    ctx.lineTo(130, 10);
    ctx.lineTo(70, 10);
    ctx.lineTo(70, 70);
    ctx.closePath();
    ctx.stroke();
}

var canvas2 = document.getElementById('myCanvas2');
if (canvas2) {
    var ctx = canvas2.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(20, 30);
    ctx.lineTo(20, 180);
    ctx.lineTo(170, 180);
    ctx.lineTo(170, 30);
    ctx.lineTo(20, 30);
    ctx.moveTo(20, 105);
    ctx.lineTo(170, 105);
    ctx.moveTo(95, 30);
    ctx.lineTo(95, 180);
    ctx.closePath();
    ctx.stroke();

}
