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

// Q3 functions start --------------------------------------------

var canvas = document.getElementById("line-chart");

if (canvas) {
    var correctPoint01 = false;
    var correctPoint02 = false;
    var correctPoint03 = false;
    var correctPoint04 = false;

    // graph data ****************************************
    var data = {
        // x axis lables----------
        labels: [2007, 2009, 2011, 2013],

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

            //gray color hidden data points in back ---------

            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [0, 0, 0, 0],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [10, 10, 10, 10],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [20, 20, 20, 20],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [30, 30, 30, 30],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [40, 40, 40, 40],
            },
            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [50, 50, 50, 50],
            },
        ],
    };

    // graph option **********************************************
    var option = {
        title: {
            display: true,
            text: "Games won by the Woodside baseball team",
        },
        responsive: true,
        legend: {display: false},
        animation: null,
        tooltips: {enabled: false},
        hover: {
            mode: "nearest",
            intersect: true,
        },

        //x and y axis config ---------------
        scales: {
            yAxes: [
                {
                    gridLines: {
                        color: "#4FAEFFFF",
                    },
                    ticks: {min: 0, max: 50, stepSize: 10},
                    scaleLabel: {
                        display: true,
                        labelString: "Games won",
                    },
                },
            ],
            xAxes: [
                {
                    gridLines: {
                        color: "#4FAEFFFF",
                    },
                    scaleLabel: {
                        display: true,
                        labelString: "Year",
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

                adddata(index, value); //display selected data in the graph

                //Compare correct point selected
                if (label == 2007) {
                    if (value == 0) {
                        correctPoint01 = true;
                    } else {
                        correctPoint01 = false;
                    }
                } else if (label == 2009) {
                    if (value == 40) {
                        correctPoint02 = true;
                    } else {
                        correctPoint02 = false;
                    }
                } else if (label == 2011) {
                    if (value == 30) {
                        correctPoint03 = true;
                    } else {
                        correctPoint03 = false;
                    }
                } else if (label == 2013) {
                    if (value == 40) {
                        correctPoint04 = true;
                    } else {
                        correctPoint04 = false;
                    }
                }
            }
        },
    };

    //draw graph for selected point *********************************
    function adddata(ind, val) {
        myLineChart.data.datasets[0].data[ind] = val;
        myLineChart.update();
    }

    //Initialize graph **********************************************
    Chart.defaults.global.defaultFontSize = 15;

    var myLineChart = Chart.Line(canvas, {
        data: data,
        options: option,
    });

    // Q3 Submit button action ************************************
    function submitAnswerQ3() {
        let isCorrect = true;

        if (
            correctPoint01 == true &&
            correctPoint02 == true &&
            correctPoint03 == true &&
            correctPoint04 == true
        ) {
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
}

// Q3 functions end --------------------------------------------
