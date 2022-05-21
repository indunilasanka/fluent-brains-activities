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

// Q4 functions start --------------------------------------------

var canvas2 = document.getElementById("line-chartq4");

if (canvas2) {
    var correctPoint01Q4 = false;
    var correctPoint02Q4 = false;
    var correctPoint03Q4 = false;

    var clickedCount = 0;

    // graph data ****************************************
    var data = {
        // x axis lables----------
        labels: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],

        datasets: [
            //orange data points -------
            {
                fill: false,
                lineTension: 0,
                borderColor: "orange",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "orange",
                pointBackgroundColor: "orange",
                pointBorderWidth: 4,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "orange",
                pointHoverBorderColor: "orange",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,

                data: [],
            },
            {
                fill: false,
                lineTension: 0,
                borderColor: "orange",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "orange",
                pointBackgroundColor: "orange",
                pointBorderWidth: 4,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "orange",
                pointHoverBorderColor: "orange",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,

                data: [],
            },
            {
                fill: false,
                lineTension: 0,
                borderColor: "orange",
                borderCapStyle: "butt",
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: "miter",
                pointBorderColor: "orange",
                pointBackgroundColor: "orange",
                pointBorderWidth: 4,
                pointHoverRadius: 8,
                pointHoverBackgroundColor: "orange",
                pointHoverBorderColor: "orange",
                pointHoverBorderWidth: 2,
                pointRadius: 5,
                pointHitRadius: 10,

                data: [],
            },

            //gray color hidden data points in back ---------

            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
            },
        ],
    };

    // graph option **********************************************
    var option = {
        responsive: true,
        legend: {display: false},
        animation: null,
        tooltips: {enabled: false},
        hover: {
            mode: "nearest",
            intersect: true,
        },

        spanGaps: true,

        //x and y axis config ---------------
        scales: {
            yAxes: [
                {
                    gridLines: {
                        color: "#4FAEFFFF",
                    },
                    ticks: {min: 0, max: 10, stepSize: 2},
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        color: "#4FAEFFFF",
                    },
                },
            ],
        },

        //onClick on point action -----------------
        onClick: function (evt) {
            var element = myLineChart.getElementAtEvent(evt);

            if (element.length > 0) {
                var firstPoint = element[0];

                var label = myLineChart.data.labels[firstPoint._index]; //get selected label (x axis)
                var index = myLineChart.data.labels.indexOf(label); //selected label index

                var value =
                    myLineChart.data.datasets[firstPoint._datasetIndex].data[
                        firstPoint._index
                        ]; //get selected y axis value

                clickedCount++;

                //display selected data in the graph
                if (clickedCount == 1) {
                    adddata(0, index, value);
                    adddata(2, index, value);
                } else if (clickedCount == 2) {
                    adddata(0, index, value);
                    adddata(1, index, value);
                } else if (clickedCount == 3) {
                    adddata(1, index, value);
                    adddata(2, index, value);
                }

                //Compare correct point selected
                if (label == 2) {
                    if (value == 2) {
                        correctPoint01Q4 = true;
                    } else {
                        correctPoint01Q4 = false;
                    }
                } else if (label == 5) {
                    if (value == 8) {
                        correctPoint02Q4 = true;
                    } else {
                        correctPoint02Q4 = false;
                    }
                } else if (label == 8) {
                    if (value == 2) {
                        correctPoint03Q4 = true;
                    } else {
                        correctPoint03Q4 = false;
                    }
                }
            }
        },
    };

    //draw graph for selected point *********************************
    function adddata(datasetInd, ind, val) {
        myLineChart.data.datasets[datasetInd].data[ind] = val;
        myLineChart.update();
    }

    //Initialize graph **********************************************
    Chart.defaults.global.defaultFontSize = 15;

    var myLineChart = Chart.Line(canvas2, {
        data: data,
        options: option,
    });

    // Q4 Submit button action ************************************
    function submitAnswerQ4() {
        let isCorrect = true;

        if (
            correctPoint01Q4 == true &&
            correctPoint02Q4 == true &&
            correctPoint03Q4 == true
        ) {
            isCorrect = true;
        } else {
            isCorrect = false;
            clearGraphQ4();
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

    // Q4 clear button action ************************************
    function clearGraphQ4() {
        myLineChart.data.datasets[0].data = [];
        myLineChart.data.datasets[1].data = [];
        myLineChart.data.datasets[2].data = [];
        myLineChart.update();
        clickedCount = 0;
        correctPoint01Q4 = false;
        correctPoint02Q4 = false;
        correctPoint03Q4 = false;
    }
}

// Q4 functions end --------------------------------------------
