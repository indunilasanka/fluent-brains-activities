function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = 'en-GB';
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
        //drop_target.appendChild(document.getElementById(drag_target_id));
        var tmp = document.createElement("span");
        tmp.className = "hide";
        drop_target.before(tmp);
        drag_target.before(drop_target);
        tmp.replaceWith(drag_target);
    }
}

/* q35 */
var x = 0;

function dragQ35(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
    // if (event.target.parentElement.parentElement.id === "imgCnt") {
    //     x = x + 1;
    // }
}

function dropQ35(event) {
    event.preventDefault();
    var drop_target = event.target;
    var drag_target_id = event.dataTransfer.getData("target_id");
    var drag_target = document.getElementById(drag_target_id);

    if (drop_target !== null && drag_target !== null) {
        var DropParent = document.getElementById(event.target.id).parentElement;
        var DragParent = document.getElementById(drag_target_id).parentElement;


        DropParent.appendChild(drag_target);
        if (event.target.getAttribute("canswer") === "green" && x > 0) {
            document.getElementById("greenBk").appendChild(drop_target);
        } else if (event.target.getAttribute("canswer") === "blue" && x > 0) {
            document.getElementById("blueBk").appendChild(drop_target);
        } else if (event.target.getAttribute("canswer") === "orange" && x > 0) {
            document.getElementById("orangeBk").appendChild(drop_target);
        } else {
            DragParent.appendChild(drop_target);
        }
    }
    x = 0;
}


/* q5 js */
function checkMissingValuesAll(qId) {
    let isCorrect = true;

    if (qId === 'q5') {
        const input1 = document.getElementById('q5input1');
        const input2 = document.getElementById('q5input2');
        const input3 = document.getElementById('q5input3');
        const input4 = document.getElementById('q5input4');
        const input5 = document.getElementById('q5input5');
        const input6 = document.getElementById('q5input6');
        const input7 = document.getElementById('q5input7');

        if (input1.value != '17') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '9') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '11') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
        if (input4.value != '15') {
            input4.style.color = '#FF0000A8';
            input4.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = 'black';
                input4.value = "";
            }, 1000);
        }
        if (input5.value != '17') {
            input5.style.color = '#FF0000A8';
            input5.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input5.style.color = 'black';
                input5.value = "";
            }, 1000);
        }
        if (input6.value != '13') {
            input6.style.color = '#FF0000A8';
            input6.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input6.style.color = 'black';
                input6.value = "";
            }, 1000);

        }
        if (input7.value != '13') {
            input7.style.color = '#FF0000A8';
            input7.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input7.style.color = 'black';
                input7.value = "";
            }, 1000);
        }

    }
    if (qId === 'q1') {
        const input1 = document.getElementById('q1input1');
        const input2 = document.getElementById('q1input2');
        const input3 = document.getElementById('q1input3');

        if (input1.value != '8') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '4') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '10') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
    }
    if (qId === 'q2') {
        const input1 = document.getElementById('q2input1');

        if (input1.value != '14') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
    }
    if (qId === 'q7') {
        const input1 = document.getElementById('q7input1');
        const input2 = document.getElementById('q7input2');
        const input3 = document.getElementById('q7input3');
        const input4 = document.getElementById('q7input4');
        const input5 = document.getElementById('q7input5');
        const input6 = document.getElementById('q7input6');
        const input7 = document.getElementById('q7input7');
        const input8 = document.getElementById('q7input8');
        const input9 = document.getElementById('q7input9');

        if (input1.value != '17') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '14') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '15') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
        if (input4.value != '12') {
            input4.style.color = '#FF0000A8';
            input4.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = 'black';
                input4.value = "";
            }, 1000);
        }
        if (input5.value != '45') {
            input5.style.color = '#FF0000A8';
            input5.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input5.style.color = 'black';
                input5.value = "";
            }, 1000);
        }
        if (input6.value != '19') {
            input6.style.color = '#FF0000A8';
            input6.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input6.style.color = 'black';
                input6.value = "";
            }, 1000);

        }
        if (input7.value != '50') {
            input7.style.color = '#FF0000A8';
            input7.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input7.style.color = 'black';
                input7.value = "";
            }, 1000);
        }
        if (input8.value != '26') {
            input8.style.color = '#FF0000A8';
            input8.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input8.style.color = 'black';
                input8.value = "";
            }, 1000);
        }
        if (input9.value != '24') {
            input9.style.color = '#FF0000A8';
            input9.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input9.style.color = 'black';
                input9.value = "";
            }, 1000);
        }

    }
    if (qId === 'q3') {
        const input1 = document.getElementById('q3input1');

        if (input1.value != '5') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
    }
    if (qId === 'q4') {
        const input1 = document.getElementById('q4input1');
        const input2 = document.getElementById('q4input2');
        const input3 = document.getElementById('q4input3');

        if (input1.value != '1') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '1') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '7') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
    }
    if (qId === 'q27') {
        const input1 = document.getElementById('q27input1');
        const input2 = document.getElementById('q27input2');
        const input3 = document.getElementById('q27input3');

        if (input1.value != '3') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '1') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '6') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
    }
    if (qId === 'q26') {
        const input1 = document.getElementById('q26input1');
        const input2 = document.getElementById('q26input2');
        const input3 = document.getElementById('q26input3');

        if (input1.value != '2') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '2') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '8') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
    }
    if (qId === 'q10') {
        const input1 = document.getElementById('q10input1');

        if (input1.value != '6') {
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
    if (qId === 'q11') {
        const input1 = document.getElementById('q11input1');

        if (input1.value != '4') {
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
    if (qId === 'q12') {
        const input1 = document.getElementById('q12input1');

        if (input1.value != '7') {
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
    if (qId === 'q14') {
        const input1 = document.getElementById('q14input1');
        const input2 = document.getElementById('q14input2');

        if (input1.value != '5') {
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

        if (input2.value != '7') {
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
    if (qId === 'q18') {
        let input1 = document.getElementById('q18input1');
        let input2 = document.getElementById('q18input2');
        let input3 = document.getElementById('q18input3');
        let input4 = document.getElementById('q18input4');
        let input5 = document.getElementById('q18input5');

        if (input1.value != '8') {
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

        if (input2.value != '80') {
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
        if (input3.value != '800') {
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
        if (input4.value != '8000') {
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
        if (input5.value != '80000') {
            if (input5.value === "") {
                input5.style.color = "#FF0000A8";
                input5.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input5.style.color = "black";
                    input5.value = "";
                }, 2000);
            }
            input5.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input5.style.color = "black";
            }, 2000);
        }
    }
    if (qId === 'q19') {
        let input1 = document.getElementById('q19input1');
        let input2 = document.getElementById('q19input2');

        if (input1.value != '2') {
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

        if (input2.value != '6') {
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
    if (qId === 'q20') {
        let input1 = document.getElementById('q20input1');
        let input2 = document.getElementById('q20input2');

        if (input1.value != '2') {
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

        if (input2.value != '3') {
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
    if (qId === 'q28') {
        let input1 = document.getElementById('q28input1');
        let input2 = document.getElementById('q28input2');


        if (input1.value != '7') {
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
        if (input2.value != '7') {
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
    if (qId === 'q29') {
        let input5 = document.getElementById('q29input5');
        let input6 = document.getElementById('q29input6');
        let input7 = document.getElementById('q29input7');

        if (input5.value != '2') {
            if (input5.value === "") {
                input5.style.color = "#FF0000A8";
                input5.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input5.style.color = "black";
                    input5.value = "";
                }, 2000);
            }
            input5.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input5.style.color = "black";
            }, 2000);
        }
        if (input6.value != '2') {
            if (input6.value === "") {
                input6.style.color = "#FF0000A8";
                input6.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input6.style.color = "black";
                    input6.value = "";
                }, 2000);
            }
            input6.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input6.style.color = "black";
            }, 2000);
        }
        if (input7.value != '5') {
            if (input7.value === "") {
                input7.style.color = "#FF0000A8";
                input7.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input7.style.color = "black";
                    input7.value = "";
                }, 2000);
            }
            input7.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input7.style.color = "black";
            }, 2000);
        }
    }
    if (qId === 'q23') {
        let input1 = document.getElementById('q23input1');
        let input2 = document.getElementById('q23input2');

        if (input1.value != '6') {
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
        if (input2.value != '9') {
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
    if (qId === 'q30') {
        let input3 = document.getElementById('q30input3');
        let input4 = document.getElementById('q30input4');
        let input5 = document.getElementById('q30input5');
        let input6 = document.getElementById('q30input6');
        let input7 = document.getElementById('q30input7');

        if (input3.value != '3') {
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
        if (input4.value != '1') {
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
        if (input5.value != '3') {
            if (input5.value === "") {
                input5.style.color = "#FF0000A8";
                input5.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input5.style.color = "black";
                    input5.value = "";
                }, 2000);
            }
            input5.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input5.style.color = "black";
            }, 2000);
        }
        if (input6.value != '6') {
            if (input6.value === "") {
                input6.style.color = "#FF0000A8";
                input6.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input6.style.color = "black";
                    input6.value = "";
                }, 2000);
            }
            input6.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input6.style.color = "black";
            }, 2000);
        }
        if (input7.value != '9') {
            if (input7.value === "") {
                input7.style.color = "#FF0000A8";
                input7.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input7.style.color = "black";
                    input7.value = "";
                }, 2000);
            }
            input7.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input7.style.color = "black";
            }, 2000);
        }
    }
    if (qId === 'q31') {
        let input8 = document.getElementById('q31input8');
        let input9 = document.getElementById('q31input9');
        let input10 = document.getElementById('q31input10');
        let input11 = document.getElementById('q31input11');

        if (input8.value != '4') {
            if (input8.value === "") {
                input8.style.color = "#FF0000A8";
                input8.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input8.style.color = "black";
                    input8.value = "";
                }, 2000);
            }
            input8.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input8.style.color = "black";
            }, 2000);
        }
        if (input9.value != '3') {
            if (input9.value === "") {
                input9.style.color = "#FF0000A8";
                input9.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input9.style.color = "black";
                    input9.value = "";
                }, 2000);
            }
            input9.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input9.style.color = "black";
            }, 2000);
        }
        if (input10.value != '6') {
            if (input10.value === "") {
                input10.style.color = "#FF0000A8";
                input10.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input10.style.color = "black";
                    input10.value = "";
                }, 2000);
            }
            input10.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input10.style.color = "black";
            }, 2000);
        }
        if (input11.value != '0') {
            if (input11.value === "") {
                input11.style.color = "#FF0000A8";
                input11.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input11.style.color = "black";
                    input11.value = "";
                }, 2000);
            }
            input11.style.color = "#FF0000A8";
            isCorrect = false;
            setTimeout(() => {
                input11.style.color = "black";
            }, 2000);
        }
    }
    if (qId === 'q24') {
        const input1 = document.getElementById('q24input1');
        const input2 = document.getElementById('q24input2');
        const input3 = document.getElementById('q24input3');
        const input4 = document.getElementById('q24input4');

        if (input1.value != '595') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '677') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '324') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
        if (input4.value != '1478') {
            input4.style.color = '#FF0000A8';
            input4.value = "✖";
            displayHelpAction(qId);
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = 'black';
                input4.value = "";
            }, 1000);
        }
    }
    if (qId === 'q32') {
        const input1 = document.getElementById('q32input1');
        const input2 = document.getElementById('q32input2');
        const input3 = document.getElementById('q32input3');

        if (input1.value != '4') {
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

        if (input2.value != '6') {
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

        if (input3.value != '9') {
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
    if (qId === 'q33') {
        const input1 = document.getElementById('q33input1');
        const input2 = document.getElementById('q33input2');
        const input3 = document.getElementById('q33input3');

        if (input1.value != '5') {
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

        if (input2.value != '6') {
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

        if (input3.value != '7') {
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
    if (qId === 'q37') {
        const input1 = document.getElementById('q37input1');
        const input2 = document.getElementById('q37input2');

        if (input1.value != '8') {
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

        if (input2.value != '7') {
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
    if (qId === 'q38') {
        const input1 = document.getElementById('q38input1');
        const input2 = document.getElementById('q38input2');

        if (input1.value != '6') {
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

        if (input2.value != '9') {
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
    if (qId === 'q39') {
        const input1 = document.getElementById('q39input1');
        const input2 = document.getElementById('q39input2');

        if (input1.value != '9') {
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

        if (input2.value != '1') {
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
    if (qId === 'q40') {
        const input1 = document.getElementById('q40input1');

        if (input1.value != '9') {
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
    if (qId === 'q41') {
        const input1 = document.getElementById('q41input1');

        if (input1.value != '0') {
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
    if (qId === 'q42') {
        const input1 = document.getElementById('q42input1');

        if (input1.value != '4') {
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
    if (qId === 'q44') {
        let input1 = document.getElementById('q44input1');
        let input2 = document.getElementById('q44input2');

        if (input1.value != '3') {
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

        if (input2.value != '4') {
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
    if (qId === 'q45') {
        const input1 = document.getElementById('q45input1');

        if (input1.value != '0') {
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
    if (qId === 'q46') {
        const input1 = document.getElementById('q46input1');

        if (input1.value != '1') {
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
    if (qId === 'q47') {
        const input1 = document.getElementById('q47input1');

        if (input1.value != '3') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
    }
    if (qId === 'q48') {
        const input1 = document.getElementById('q48input1');

        if (input1.value != '0') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
    }
    if (qId === 'q49') {
        const input1 = document.getElementById('q49input1');
        const input2 = document.getElementById('q49input2');
        const input3 = document.getElementById('q49input3');
        const input4 = document.getElementById('q49input4');

        if (input1.value != '3') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '6') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '0') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
        if (input4.value != '10') {
            input4.style.color = '#FF0000A8';
            input4.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = 'black';
                input4.value = "";
            }, 1000);
        }
    }
    if (qId === 'q50') {
        const input1 = document.getElementById('q50input1');
        const input2 = document.getElementById('q50input2');
        const input3 = document.getElementById('q50input3');
        const input4 = document.getElementById('q50input4');

        if (input1.value != '241') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '505') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '434') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
        if (input4.value != '964') {
            input4.style.color = '#FF0000A8';
            input4.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = 'black';
                input4.value = "";
            }, 1000);
        }
    }
    if (qId === 'q51') {
        const input1 = document.getElementById('q51input1');
        const input2 = document.getElementById('q51input2');
        const input3 = document.getElementById('q51input3');
        const input4 = document.getElementById('q51input4');

        if (input1.value != '25') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '2') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '7') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
        if (input4.value != '36') {
            input4.style.color = '#FF0000A8';
            input4.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = 'black';
                input4.value = "";
            }, 1000);
        }
    }
    if (qId === 'q52') {
        const input1 = document.getElementById('q52input1');
        const input2 = document.getElementById('q52input2');
        const input3 = document.getElementById('q52input3');
        const input4 = document.getElementById('q52input4');

        if (input1.value != '0') {
            input1.style.color = '#FF0000A8';
            input1.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
                input1.value = "";
            }, 1000);
        }
        if (input2.value != '15') {
            input2.style.color = '#FF0000A8';
            input2.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
                input2.value = "";
            }, 1000);
        }
        if (input3.value != '29') {
            input3.style.color = '#FF0000A8';
            input3.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
                input3.value = "";
            }, 1000);
        }
        if (input4.value != '100') {
            input4.style.color = '#FF0000A8';
            input4.value = "✖";
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = 'black';
                input4.value = "";
            }, 1000);
        }
    }

    if (isCorrect) {
        //print alert
        alert("Weldone");
    }
}

function displayHelpAction(qId) {
    let id = "explanation-action-" + qId;
    const action = document.getElementById(id);
    action.style.display = "inline-block";
}

function openHelpAction(id) {
    const helpModal = document.getElementById(id);
    helpModal.style.display = "block";
}

function closeHelpAction(id) {
    const helpModal = document.getElementById(id);
    helpModal.style.display = "none";
}

function checkTotalValue(id, actual) {
    const input = document.getElementById(id);
    if (input.value == actual) {
        input.style.color = '#46cd46';
        dogclap = true;
        setTimeout(() => {
            dogclap = false;
        }, 3000)
    } else {
        input.style.color = '#FF0000A8';
        setTimeout(() => {
            input.style.color = 'black';
            input.value = "";
        }, 1500);
    }
}

function handleAnswerClick(id, num) {
    const input = document.getElementById(id);
    if (num === 0) {
        input.style.borderColor = '#FF0000A8';
        input.style.color = '#FF0000A8';
        setTimeout(() => {
            input.style.backgroundColor = 'transparent';
            input.style.borderColor = '#64B8FF93';
            input.style.color = 'black';
        }, 1000);
    } else {
        input.style.backgroundColor = 'white';
        alert('weldone');
    }
}

function handleAnswerClickNew(id, num) {
    const input = document.getElementById(id);
    if (num === 0) {
        input.style.borderColor = '#FF0000A8';
        input.style.color = '#FF0000A8';
        setTimeout(() => {
            input.style.borderColor = '#64B8FF93';
            input.style.color = 'black';
        }, 2000);
    } else {
        alert('weldone');
    }
}

// function checkPatternQ9() {
//     let input1 = document.getElementById('q9answer1');
//     let input2 = document.getElementById('q9answer2');
//     let children1 = input1.children;
//     let children2 = input2.children;
//     let isCorrect = false;
//     if (children1[0].getAttribute("canswer") !== "orange") {
//         if (children1[0].getAttribute("canswer") !== undefined)
//             var element = document.getElementById("q9input" + 3);
//         element.style.backgroundColor = "#46cd46";
//         children1[0].parentElement.style.backgroundColor = "#FF0000A8";
//         setTimeout(() => {
//             element.style.backgroundColor = "white";
//             children1[0].parentElement.style.backgroundColor = "white";
//         }, 2000);
//     } else if (children2[0].getAttribute("canswer") !== "green") {
//         if (children2[0].getAttribute("canswer") !== undefined)
//             var element = document.getElementById("q9input" + 2);
//         element.style.backgroundColor = "#46cd46";
//         children2[0].parentElement.style.backgroundColor = "#FF0000A8";
//         setTimeout(() => {
//             element.style.backgroundColor = "white";
//             children2[0].parentElement.style.backgroundColor = "white";
//         }, 2000);
//     } else {
//         isCorrect = true;
//     }
//     if (isCorrect) {
//         alert("weldone");
//     }
// }

function checkPatternQ34() {
    let input1 = document.getElementById('q34answer1');
    let input2 = document.getElementById('q34answer2');
    let input3 = document.getElementById('q34answer3');
    let children1 = input1.children;
    let children2 = input2.children;
    let children3 = input3.children;
    let isCorrect = false;
    if (children1[0].getAttribute("canswer") !== "star") {
        if (children1[0].getAttribute("canswer") !== undefined)
            var element = document.getElementById("q34input" + 2);
        element.style.backgroundColor = "#46cd46";
        children1[0].parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children1[0].parentElement.style.backgroundColor = "white";
        }, 2000);
    } else if (children2[0].getAttribute("canswer") !== "heart") {
        if (children2[0].getAttribute("canswer") !== undefined)
            var element = document.getElementById("q34input" + 1);
        element.style.backgroundColor = "#46cd46";
        children2[0].parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children2[0].parentElement.style.backgroundColor = "white";
        }, 2000);
    } else if (children3[0].getAttribute("canswer") !== "triangle") {
        if (children3[0].getAttribute("canswer") !== undefined)
            var element = document.getElementById("q34input" + 3);
        element.style.backgroundColor = "#46cd46";
        children3[0].parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children3[0].parentElement.style.backgroundColor = "white";
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
    if (input.value == actual) {
        input.style.color = "#46cd46";
    } else {
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
        }, 2000);
    }
}

function checkBox(id) {
    let x = document.getElementById(id);
    if (x.firstElementChild.id === "check") {
        x.firstElementChild.innerHTML = "";
        x.firstElementChild.id = "";
        x.style.color = "";
        x.style.fontWeight = "bold";
        x.style.backgroundColor = '#77c0ff';
    } else {
        x.firstElementChild.innerHTML = "✓";
        x.firstElementChild.id = "check";
        x.style.color = "white";
        x.style.fontWeight = "bold";
        x.style.backgroundColor = '#3B95E0FF';
    }
}

function checkAllCheckBoxes() {
    var input1 = document.getElementById('q13input2');
    var input2 = document.getElementById('q13input4');
    var input3 = document.getElementById('q13input1');
    var input4 = document.getElementById('q13input3');

    if (input2.firstElementChild.id === "check" && input1.firstElementChild.id === "check") {
        if (input3.firstElementChild.id === "" && input4.firstElementChild.id === "") {
            alert("weldone");
        } else {
            alert("try again");
        }

    } else {
        alert("try again");
    }
}

function checkAllCheckBoxes2() {
    var input1 = document.getElementById('q61input1');
    var input2 = document.getElementById('q61input2');
    var input3 = document.getElementById('q61input3');
    var input4 = document.getElementById('q61input4');

    if (input2.firstElementChild.id === "check"
        && input3.firstElementChild.id === "check"
        && input4.firstElementChild.id === "check") {
        if (input1.firstElementChild.id === "") {
            alert("weldone");
        } else {
            alert("try again");
        }
    } else {
        alert("try again");
    }
}

function checkAllCheckBoxes3() {
    var input1 = document.getElementById('q62input1');
    var input2 = document.getElementById('q62input2');
    var input3 = document.getElementById('q62input3');
    var input4 = document.getElementById('q62input4');

    if (input1.firstElementChild.id === "check"
        && input3.firstElementChild.id === "check"
        && input4.firstElementChild.id === "check") {
        if (input2.firstElementChild.id === "") {
            alert("weldone");
        } else {
            alert("try again");
        }
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

function checkInputAnswer() {
    var input1 = document.getElementById('q12input1');
    if (input1.value === '7') {
        alert('weldone');
    } else {
        alert('try again');
    }
}

var helpAnswer1 = "";
var helpContainer1 = document.getElementById('step4-btn-con1');
if (helpContainer1 !== null) {
    let children1 = helpContainer1.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help4-input3") {
                document.getElementById('step4-wrong-row1').style.display = "none";
                document.getElementById('step4-right-row1').style.display = "block";
            } else {
                document.getElementById('step4-wrong-row1').style.display = "block";
                document.getElementById('step4-right-row1').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked",
                    ""
                );
                this.className += " q1-step3-btn-clicked";

            }
        });
    }
}

var helpContainer2 = document.getElementById('step3-btn-con1');
if (helpContainer2 !== null) {
    let children1 = helpContainer2.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help3") {
                document.getElementById('step3-wrong').style.display = "none";
                document.getElementById('step3-right').style.display = "block";
            } else {
                document.getElementById('step3-wrong').style.display = "block";
                document.getElementById('step3-right').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked1");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked1";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked1",
                    ""
                );
                this.className += " q1-step3-btn-clicked1";

            }
        });
    }
}
var helpContainer3 = document.getElementById('step3-btn-con2');
if (helpContainer3 !== null) {
    let children1 = helpContainer3.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help3-input2") {
                document.getElementById('step3-wrong-row2').style.display = "none";
                document.getElementById('step3-right-row2').style.display = "block";
            } else {
                document.getElementById('step3-wrong-row2').style.display = "block";
                document.getElementById('step3-right-row2').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked2");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked2";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked2",
                    ""
                );
                this.className += " q1-step3-btn-clicked2";

            }
        });
    }
}
var helpContainer4 = document.getElementById('step4-btn-con2');
if (helpContainer4 !== null) {
    let children1 = helpContainer4.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help4-input5") {
                document.getElementById('step4-wrong-row2').style.display = "none";
                document.getElementById('step4-right-row2').style.display = "block";
            } else {
                document.getElementById('step4-wrong-row2').style.display = "block";
                document.getElementById('step4-right-row2').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked3");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked3";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked3",
                    ""
                );
                this.className += " q1-step3-btn-clicked3";

            }
        });
    }
}

var helpContainer5 = document.getElementById('step4-btn-con3');
if (helpContainer5 !== null) {
    let children1 = helpContainer5.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help4-input11") {
                document.getElementById('step4-wrong-row3').style.display = "none";
                document.getElementById('step4-right-row3').style.display = "block";
            } else {
                document.getElementById('step4-wrong-row3').style.display = "block";
                document.getElementById('step4-right-row3').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked4");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked4";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked4",
                    ""
                );
                this.className += " q1-step3-btn-clicked4";

            }
        });
    }
}
var helpContainer6 = document.getElementById('step6-btn-con1');
if (helpContainer6 !== null) {
    let children1 = helpContainer6.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help6-input2") {
                document.getElementById('step6-wrong-row1').style.display = "none";
                document.getElementById('step6-right-row1').style.display = "block";
            } else {
                document.getElementById('step6-wrong-row1').style.display = "block";
                document.getElementById('step6-right-row1').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked5");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked5";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked5",
                    ""
                );
                this.className += " q1-step3-btn-clicked5";

            }
        });
    }
}

var helpContainer7 = document.getElementById('step6-btn-con2');
if (helpContainer7 !== null) {
    let children1 = helpContainer7.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help6-input7") {
                document.getElementById('step6-wrong-row2').style.display = "none";
                document.getElementById('step6-right-row2').style.display = "block";
            } else {
                document.getElementById('step6-wrong-row2').style.display = "block";
                document.getElementById('step6-right-row2').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked6");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked6";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked6",
                    ""
                );
                this.className += " q1-step3-btn-clicked6";

            }
        });
    }
}

var helpContainer8 = document.getElementById('step6-btn-con3');
if (helpContainer8 !== null) {
    let children1 = helpContainer8.getElementsByClassName('help-answer-button');
    for (var i = 0; i < children1.length; i++) {
        children1[i].addEventListener("click", function () {
            helpAnswer1 = this.innerHTML;
            if (this.id === "help6-input11") {
                document.getElementById('step6-wrong-row3').style.display = "none";
                document.getElementById('step6-right-row3').style.display = "block";
            } else {
                document.getElementById('step6-wrong-row3').style.display = "block";
                document.getElementById('step6-right-row3').style.display = "none";
            }

            var current = document.getElementsByClassName("q1-step3-btn-clicked7");
            if (current.length === 0) {
                this.className += " q1-step3-btn-clicked7";
            } else {
                current[0].className = current[0].className.replace(
                    " q1-step3-btn-clicked7",
                    ""
                );
                this.className += " q1-step3-btn-clicked7";

            }
        });
    }
}

function checkPatternQ35() {
    let isCorrect = false;
    const input1 = document.getElementById('q35answer1');
    const input2 = document.getElementById('q35answer2');
    const input3 = document.getElementById('q35answer3');
    const input4 = document.getElementById('q35answer4');
    const input5 = document.getElementById('q35answer5');
    const input6 = document.getElementById('q35answer6');
    const input7 = document.getElementById('q35answer7');

    if (input1.firstElementChild.getAttribute("canswer") !== "blue") {
        if (input1.firstElementChild.getAttribute("canswer") !== undefined)
            var element = document.getElementById("blueBk");
        element.style.backgroundColor = "#46cd46";
        input1.firstElementChild.parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            input1.firstElementChild.parentElement.style.backgroundColor = "white";
        }, 2000);
    } else if (input2.firstElementChild.getAttribute("canswer") !== "orange") {
        if (input2.firstElementChild.getAttribute("canswer") !== undefined)
            var element = document.getElementById("orangeBk");
        element.style.backgroundColor = "#46cd46";
        input2.firstElementChild.parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            input2.firstElementChild.parentElement.style.backgroundColor = "white";
        }, 2000);
    } else if (input3.firstElementChild.getAttribute("canswer") !== "green") {
        if (input3.firstElementChild.getAttribute("canswer") !== undefined)
            var element = document.getElementById("greenBk");
        element.style.backgroundColor = "#46cd46";
        input3.firstElementChild.parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            input3.firstElementChild.parentElement.style.backgroundColor = "white";
        }, 2000);
    } else if (input4.firstElementChild.getAttribute("canswer") !== "green") {
        if (input4.firstElementChild.getAttribute("canswer") !== undefined)
            var element = document.getElementById("greenBk");
        element.style.backgroundColor = "#46cd46";
        input4.firstElementChild.parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            input4.firstElementChild.parentElement.style.backgroundColor = "white";
        }, 2000);
    } else if (input5.firstElementChild.getAttribute("canswer") !== "green") {
        if (input5.firstElementChild.getAttribute("canswer") !== undefined)
            var element = document.getElementById("greenBk");
        element.style.backgroundColor = "#46cd46";
        input5.firstElementChild.parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            input5.firstElementChild.parentElement.style.backgroundColor = "white";
        }, 2000);
    } else if (input6.firstElementChild.getAttribute("canswer") !== "green") {
        if (input6.firstElementChild.getAttribute("canswer") !== undefined)
            var element = document.getElementById("greenBk");
        element.style.backgroundColor = "#46cd46";
        input6.firstElementChild.parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            input6.firstElementChild.parentElement.style.backgroundColor = "white";
        }, 2000);
    } else if (input7.firstElementChild.getAttribute("canswer") !== "orange") {
        if (input7.firstElementChild.getAttribute("canswer") !== undefined)
            var element = document.getElementById("orangeBk");
        element.style.backgroundColor = "#46cd46";
        input7.firstElementChild.parentElement.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            input7.firstElementChild.parentElement.style.backgroundColor = "white";
        }, 2000);
    } else {
        isCorrect = true;
    }
    if (isCorrect) {
        alert("weldone");
    }
}

function checkPatternQ36() {
    let isCorrect = false;
    const input = document.getElementById("q36-drop-con");
    const children = input.children;
    if (children[0].getAttribute("canswer") !== "488" && children[0].getAttribute("canswer") !== "367") {
        if (children[0].getAttribute("canswer") !== undefined)
            var element = document.getElementById("q36input4");
        element.style.backgroundColor = "#46cd46";
        children[0].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children[0].style.backgroundColor = "white";
        }, 2000);
    } else if (children[2].getAttribute("canswer") !== "367" && children[2].getAttribute("canswer") !== "488") {
        if (children[2].getAttribute("canswer") !== undefined)
            var element = document.getElementById("q36input6");
        element.style.backgroundColor = "#46cd46";
        children[2].style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            element.style.backgroundColor = "white";
            children[2].style.backgroundColor = "white";
        }, 2000);
    } else {
        isCorrect = true;
    }
    if (isCorrect) {
        alert("weldone");
    }
}
