function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = 'en-GB';
    speechSynthesis.speak(msg);
}

function checkTotalValue(id, actual) {
    const input = document.getElementById(id);
    if (input.value === actual) {
        input.style.color = '#46cd46';
    } else {
        input.style.color = '#FF0000A8';
        setTimeout(() => {
            input.style.color = 'black';
        }, 2000);
    }
}

function checkMissingValuesAll(qId) {
    let isCorrect = true;

    if (qId === 'q1') {
        const input1 = document.getElementById('q1input1');
        const input2 = document.getElementById('q1input2');
        const input3 = document.getElementById('q1input3');
        const input4 = document.getElementById('q1input4');

        if (input1.value != '8') {
            if (input1.value == '') {
                input1.style.color = '#FF0000A8';
                input1.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input1.style.color = 'black';
                    input1.value = "";
                }, 2000);
            }
            input1.style.color = '#FF0000A8';
            isCorrect = false;
            setTimeout(() => {
                input1.style.color = 'black';
            }, 2000);
        }
        if (input2.value != '4') {
            if (input2.value == '') {
                input2.style.color = '#FF0000A8';
                input2.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input2.style.color = 'black';
                    input2.value = "";
                }, 2000);
            }
            input2.style.color = '#FF0000A8';
            isCorrect = false;
            setTimeout(() => {
                input2.style.color = 'black';
            }, 2000);
        }
        if (input3.value != '14') {
            if (input3.value == '') {
                input3.style.color = '#FF0000A8';
                input3.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input3.style.color = 'black';
                    input3.value = "";
                }, 2000);
            }
            input3.style.color = '#FF0000A8';
            isCorrect = false;
            setTimeout(() => {
                input3.style.color = 'black';
            }, 2000);
        }
        if (input4.value != '9') {
            if (input4.value == '') {
                input4.style.color = '#FF0000A8';
                input4.value = "✖";
                isCorrect = false;
                setTimeout(() => {
                    input4.style.color = 'black';
                    input4.value = "";
                }, 2000);
            }
            input4.style.color = '#FF0000A8';
            isCorrect = false;
            setTimeout(() => {
                input4.style.color = 'black';
            }, 2000);
        }
        if (isCorrect) {
            alert("Weldone");
        }
    }
}
