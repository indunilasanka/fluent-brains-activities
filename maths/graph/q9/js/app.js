// global variables start-------------------------------------------

// let ctx;
// let fps = 4;
// let button = document.getElementById("clapbtn");
// const CANVAS_WIDTH = 1920;
// const CANVAS_HEIGHT = 350;
// let dogclap = false;

/* popup */
let isSwapQuestion = false;
const questionsArray = [
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "q9",
    "q10",
];
let currentQuestionNumber = 1;
let starCount = 3;
let score = 0;
let finalScore = 0;
let scoreFactor = 10;
let salutations = [
    "Great",
    "Well Done",
    "Awesome",
    "Good Job",
    "Congratulations",
    "Superb",
    "Felicitations",
    "Kudos",
];

/* timer */
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

// global variables end-------------------------------------------

// Timer functions start ----------------------------------------

window.addEventListener("load", startTimer);

function startTimer() {
    pauseTimer();
    cron = setInterval(() => {
        timer();
    }, 10);
}

/* -- start the timer -- */
function timer() {
    if ((millisecond += 10) === 1000) {
        millisecond = 0;
        second++;
    }
    if (second === 60) {
        second = 0;
        minute++;
    }
    if (minute === 60) {
        minute = 0;
        hour++;
    }
    document.getElementById("timerhrs").innerText = returnData(hour);
    document.getElementById("timermin").innerText = returnData(minute);
    document.getElementById("timersec").innerText = returnData(second);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`;
}

/* -- stop the timer -- */
function pauseTimer() {
    clearInterval(cron);
}

function resetTime() {
    second = 0;
    minute = 0;
    hour = 0;
}

// Timer functions end -------------------------------------------

// popup functions start-------------------------------------------

function setScore(){
    document.getElementById("current-score").innerHTML = 0;
}

function reduceStarCount() {
    if (starCount !== 1) {
        starCount--;
    }
}

function closePopup() {
    document.querySelector(".popup-container").style.display = "none";
    switchQuestion();
}

function openPopup() {
    calculateScore();
    pauseTimer();
    document.querySelector(".popup-container").style.display = "flex";
}

function switchQuestion(){
    window.location.replace("/maths/en/ptns1/q4/index.html");
}

function calculateScore() {
    let score = (starCount * scoreFactor) / (second + minute * 60 + hour * 3600);
    score = score.toFixed(2);
    sessionStorage.setItem("ptns1-q1", score);
    document.getElementById("current-score").innerHTML = score;
}

function clearSession() {
    sessionStorage.clear();
}

// popup functions end ---------------------------------------------

// sound functions start -------------------------------------------

function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
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

function playTitleSin(text) {
    responsiveVoice.speak(text, "Sinhala", {volume: 2, rate: 1, pitch: 1});
}

// sound functions end -------------------------------------------

// Q9 functions start --------------------------------------------

var canvas3 = document.getElementById("chart-pie-q9");

if (canvas3) {
    //get suitable y value (opt) *************************************
    const getSuitableY = (y, yArray = [], direction) => {
        let result = y;
        yArray.forEach((existedY) => {
            if (existedY - 14 < result && existedY + 14 > result) {
                if (direction === "right") {
                    result = existedY + 14;
                } else {
                    result = existedY - 14;
                }
            }
        });

        return result;
    };

    //Outer label plugin to create lines **********************************

    const plugins = [
        {
            afterDraw: (chart) => {
                const ctx = chart.chart.ctx; //get chart context
                ctx.save();

                if (chart.chartArea.right < 450) {
                    ctx.font = "12px 'Verdana'";
                } else if (chart.chartArea.right < 300) {
                    ctx.font = "10px 'Verdana'";
                } else {
                    ctx.font = "14px 'Verdana'";
                }

                const leftLabelCoordinates = [];
                const rightLabelCoordinates = [];

                // get center point coordinates of pie chart ----------------
                const chartCenterPoint = {
                    x:
                        (chart.chartArea.right - chart.chartArea.left) / 2 +
                        chart.chartArea.left,
                    y:
                        (chart.chartArea.bottom - chart.chartArea.top) / 2 +
                        chart.chartArea.top,
                };

                //loop through each data label and draw arrow line and label -----------------
                chart.config.data.labels.forEach((label, i) => {
                    const meta = chart.getDatasetMeta(0); //get data set meta data -  this include information about each point, bar, etc. depending on the chart type.

                    const arc = meta.data[i]; // get meta data for the looping label/ selected arc

                    const dataset = chart.config.data.datasets[0]; //get dataset values

                    const centerPoint = arc.getCenterPoint(); //get center point of the arc (1st point)
                    const model = arc._model;

                    //label & stroke colors ----------------------
                    let color = "black";
                    let labelColor = "black";

                    // Returns the angle (in radians) to arc centerpoint from the X axis according to the chart center point. ---------
                    const angle = Math.atan2(
                        centerPoint.y - chartCenterPoint.y,
                        centerPoint.x - chartCenterPoint.x
                    );

                    // get chart outer point that bend the line (2nd point) ---------------
                    let point2X =
                        chartCenterPoint.x + Math.cos(angle) * model.outerRadius;
                    let point2Y =
                        chartCenterPoint.y + Math.sin(angle) * model.outerRadius;

                    //suitable y (opt) -------------------------------
                    let suitableY;
                    if (point2X < chartCenterPoint.x) {
                        // on the left
                        suitableY = getSuitableY(point2Y, leftLabelCoordinates, "left");
                    } else {
                        // on the right
                        suitableY = getSuitableY(point2Y, rightLabelCoordinates, "right");
                    }
                    point2Y = suitableY;

                    // end of the drawing line (3rd point) -----------------------
                    var edgePointX;
                    if (chart.chartArea.right > 450) {
                        edgePointX = point2X < chartCenterPoint.x ? 105 : chart.width - 100;
                    } else {
                        edgePointX = point2X < chartCenterPoint.x ? 90 : chart.width - 75;
                    }

                    // add points to array (opt) --------------------
                    if (point2X < chartCenterPoint.x) {
                        leftLabelCoordinates.push(point2Y);
                    } else {
                        rightLabelCoordinates.push(point2Y);
                    }

                    //Draw line ------------------------------------------
                    ctx.strokeStyle = color;

                    if (chart.chartArea.right > 350) {
                        // outer line: connect between outside point and chart's edge
                        ctx.beginPath();
                        ctx.moveTo(point2X, point2Y);
                        ctx.lineTo(edgePointX, point2Y);
                        ctx.stroke();
                    }

                    //fill custom label ----------------------------------
                    const labelAlignStyle =
                        edgePointX < chartCenterPoint.x ? "left" : "right";

                    // label x possition ----------
                    var labelX;
                    if (chart.chartArea.right > 450) {
                        labelX =
                            edgePointX < chartCenterPoint.x
                                ? edgePointX - 105
                                : edgePointX + 100;
                    } else {
                        labelX =
                            edgePointX < chartCenterPoint.x
                                ? edgePointX - 85
                                : edgePointX + 70;
                    }

                    // label y position
                    const labelY = point2Y;

                    ctx.textAlign = labelAlignStyle;
                    ctx.textBaseline = "middle";

                    ctx.fillStyle = labelColor;
                    ctx.fillText(label, labelX, labelY);
                });

                ctx.restore();
            },
        },

        // ref: (opt) - Couldn't see exact use of that code segment.
        // ref2: https://stackoverflow.com/questions/47826483/how-to-display-data-labels-outside-in-pie-chart-with-lines-in-ionic
        // ref3 : https://codesandbox.io/s/wispy-bash-nt7ty?file=/src/Chart.js:870-4417
    ];

    // pie chart data ********************************************************
    var data = {
        labels: ["Burger(1/2)", "Pizza(1/4)", "Hotdog(1/8)", "Sandwich(1/8)"],
        datasets: [
            {
                fill: true,
                backgroundColor: ["#e6a9ec", "#f7b386", "#84ddf7", "#f7dc6b"],
                data: [50, 25, 12.5, 12.5],
                borderColor: "black",
                borderWidth: 1,
            },
        ],
    };

    // pie chart options *****************************************************
    var options = {
        // rotation: -0.7 * Math.PI,
        legend: {
            display: false,
        },
        responsive: true,
        animation: null,
        tooltips: {enabled: false},
        hover: {mode: null},
    };

    // Draw pie chart *******************************************************
    can = canvas3.getContext("2d");
    var myPieChart = new Chart(can, {
        type: "pie",
        data: data,
        options: options,
        plugins: plugins,
    });
}

function checkAnswerQ9(id) {
    const input = document.getElementById(id);
    var isCorrect = false;

    if (id == "q9a3") {
        isCorrect = true;
    } else {
        isCorrect = false;
    }

    if (isCorrect) {
        openPopup();
    } else {
        let styleClasses = document.getElementById("qpanel").classList;
        styleClasses.add("incorrect-answer");

        setTimeout(() => {
            styleClasses.remove("incorrect-answer");
        }, 1000);
        reduceStarCount();
    }
}

// Q9 functions end --------------------------------------------
