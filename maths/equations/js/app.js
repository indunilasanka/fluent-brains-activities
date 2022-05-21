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

function drop(event) {
    event.preventDefault();
    //console.log("target element")
    //console.log(event.target);
    var drop_target = event.target;
    var drag_target_id = event.dataTransfer.getData("target_id");
    var drag_target = document.getElementById(drag_target_id);
    //console.log("drop element")
    //console.log(drag_target);
    if (drop_target !== null && drag_target !== null) {
        if (event.target.id === 'q1input1' ||
            event.target.id === 'q1input2' ||
            event.target.id === 'q1input3' ||
            event.target.id === 'q2input3/4' ||
            event.target.id === 'q2input3/8' ||
            event.target.id === 'q2input1/4' ||
            event.target.id === 'q2input1/2') {
            var tmp = document.createElement("span");
            tmp.className = "hide";
            drop_target.before(tmp);
            drag_target.before(drop_target);
            tmp.replaceWith(drag_target);
        }
        // var tmp = document.createElement("span");
        // tmp.className = "hide";
        // drop_target.before(tmp);
        // drag_target.before(drop_target);
        // tmp.replaceWith(drag_target);
    }
}

// q5 -----------------------------
function dropQ5(event) {
    event.preventDefault();
    var drop_target = event.target;
    var drag_target_id = event.dataTransfer.getData("target_id");
    var drag_target = document.getElementById(drag_target_id);

    if (drop_target !== null && drag_target !== null) {
        //console.log(event.target.id);
        if (event.target.id === 'q5-right' || event.target.id === "q5-left") {
            drop_target.appendChild(document.getElementById(drag_target_id));
        }

    }
}

function handleSubmitQ2() {
    let isCorrect = false;
    let block;
    let element;
    let items;
    block = document.getElementById('q2-line-container');
    items = block.getElementsByClassName("box-content-answer");
    if (items[2].children[0].getAttribute("canswer") !== "1/4") {
        //console.log("not found");
        if (items[2].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q2input" + "1/4");
            element.style.backgroundColor = "#46cd46";
            items[2].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = 'white';
                items[2].children[0].style.backgroundColor = "white";
            }, 2000);
        }
    } else if (items[1].children[0].getAttribute("canswer") !== "1/2") {
        //console.log("not found");
        if (items[1].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q2input" + "1/2");
            element.style.backgroundColor = "#46cd46";
            items[1].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = 'white';
                items[1].children[0].style.backgroundColor = "white";
            }, 2000);
        }
    } else if (items[0].children[0].getAttribute("canswer") !== "3/4") {
        //console.log("not found");
        if (items[0].children[0].getAttribute("canswer") !== undefined) {
            element = document.getElementById("q2input" + "3/4");
            element.style.backgroundColor = "#46cd46";
            items[0].children[0].style.backgroundColor = "#FF0000A8";
            setTimeout(() => {
                element.style.backgroundColor = 'white';
                items[0].children[0].style.backgroundColor = "white";
            }, 2000);
        }
    } else {
        isCorrect = true;
    }
    if (isCorrect) {
        alert("well done");
    }
}

function handleSubmitQ1(id, value) {
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

// q5 --------------------------------
function handleSubmitQ5() {
    let isCorrect = false;
    let input1 = document.getElementById("q5input1/2");
    let input2 = document.getElementById("q5input3/4")
    let input3 = document.getElementById("q5input2")
    let input4 = document.getElementById("q5input3")
    let input5 = document.getElementById("q5input7/4")

    let parentParent1 = input1.parentElement.parentElement.parentElement.id;
    let parentParent2 = input2.parentElement.parentElement.parentElement.id;
    let parentParent3 = input3.parentElement.parentElement.parentElement.id;
    let parentParent4 = input4.parentElement.parentElement.parentElement.id;
    let parentParent5 = input5.parentElement.parentElement.parentElement.id;

    let parent1 = input1.parentElement.id;
    let parent2 = input2.parentElement.id;
    let parent3 = input3.parentElement.id;
    let parent4 = input4.parentElement.id;
    let parent5 = input5.parentElement.id;


    if (parent1 !== "q5-left" && parent1 !== "q5-drag" && parentParent1 === "q5-drop") {
        input1.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input1.style.backgroundColor = "#3B95E0FF";
        }, 2000);
    } else if (parent2 !== "q5-left" && parent2 !== "q5-drag" && parentParent2 === "q5-drop") {
        input2.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input2.style.backgroundColor = "#3B95E0FF";
        }, 2000);
    } else if (parent5 !== "q5-left" && parent5 !== "q5-drag" && parentParent5 === "q5-drop") {
        input5.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input5.style.backgroundColor = "#3B95E0FF";
        }, 2000);
    } else if (parent3 !== "q5-right" && parent3 !== "q5-drag" && parentParent3 === "q5-drop") {
        input3.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input3.style.backgroundColor = "#3B95E0FF";
        }, 2000);
    } else if (parent4 !== "q5-right" && parent4 !== "q5-drag" && parentParent4 === "q5-drop") {
        input4.style.backgroundColor = "#FF0000A8";
        setTimeout(() => {
            input4.style.backgroundColor = "#3B95E0FF";
        }, 2000);
    } else {
        if (parent1 === "q5-drag" || parent2 === "q5-drag" || parent3 === "q5-drag" ||
            parent4 === "q5-drag" || parent5 === "q5-drag") {
            isCorrect = false;
        } else {
            isCorrect = true;
        }
    }

    if (isCorrect) {
        alert('weldone');
    }
}

// Q6 ---------------------------------
function handleSubmitQ6(id, value) {
    let input = document.getElementById(id);
    if (value === 1) {
        alert("well done");
    } else {
        input.style.borderColor = "#FF0000A8";
        setTimeout(() => {
            input.style.borderColor = "#64B8FF93";
        }, 2000)
    }
}
