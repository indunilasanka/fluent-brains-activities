function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 2;
    msg.rate = 0.8;
    msg.pitch = 1.25;
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

/* timer */
let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let cron;

window.addEventListener("load", startTimer);

function startTimer() {
    pauseTimer();
    cron = setInterval(() => {
        timer();
    }, 10);
}

/* start the timer */
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
    document.getElementById('timerhrs').innerText = returnData(hour);
    document.getElementById('timermin').innerText = returnData(minute);
    document.getElementById('timersec').innerText = returnData(second);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}

/* stop the timer */
function pauseTimer() {
    clearInterval(cron);
}

function resetTime() {
    second = 0;
    minute = 0;
    hour = 0;
}

/* LOGIC */
var canvas2 = document.getElementById("cartesian2");

if (canvas2) {
    var correctPoint = false;

    // plugin for axis coordination ticks ********************************
    const plugin2 = [
        {
            beforeDraw: (chart) => {
                var xAxis = chart.scales["x-axis-1"];
                var yAxis = chart.scales["y-axis-1"];
                const scales = chart.chart.config.options.scales;

                scales.xAxes[0].ticks.padding =
                    yAxis.top - yAxis.getPixelForValue(0) + 6;
                scales.yAxes[0].ticks.padding =
                    xAxis.getPixelForValue(0) - xAxis.right + 6;
            },
        },
    ];

    // cartesian line data *******************************************
    var data2 = {
        datasets: [
            {
                data: [],

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
                showLine: false,
                fill: false,
                tension: 0,
            },

            //gray color hidden data points in back ---------

            {
                fill: false,
                showLine: false,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: "gray",
                pointHoverBorderColor: "gray",
                pointHoverBorderWidth: 2,

                data: [
                    // y = 4 -----------
                    {x: -3, y: 4},
                    {x: -2, y: 4},
                    {x: -1, y: 4},
                    {x: 0, y: 4},
                    {x: 1, y: 4},
                    {x: 2, y: 4},
                    {x: 3, y: 4},

                    // y = 3 -----------
                    {x: -3, y: 3},
                    {x: -2, y: 3},
                    {x: -1, y: 3},
                    {x: 0, y: 3},
                    {x: 1, y: 3},
                    {x: 2, y: 3},
                    {x: 3, y: 3},

                    // y = 2 -----------
                    {x: -3, y: 2},
                    {x: -2, y: 2},
                    {x: -1, y: 2},
                    {x: 0, y: 2},
                    {x: 1, y: 2},
                    {x: 2, y: 2},
                    {x: 3, y: 2},

                    // y = 1 -----------
                    {x: -3, y: 1},
                    {x: -2, y: 1},
                    {x: -1, y: 1},
                    {x: 0, y: 1},
                    {x: 1, y: 1},
                    {x: 2, y: 1},
                    {x: 3, y: 1},

                    // y = 0 -----------
                    {x: -3, y: 0},
                    {x: -2, y: 0},
                    {x: -1, y: 0},
                    {x: 0, y: 0},
                    {x: 1, y: 0},
                    {x: 2, y: 0},
                    {x: 3, y: 0},

                    // y = -1 -----------
                    {x: -3, y: -1},
                    {x: -2, y: -1},
                    {x: -1, y: -1},
                    {x: 0, y: -1},
                    {x: 1, y: -1},
                    {x: 2, y: -1},
                    {x: 3, y: -1},

                    // y = -2 -----------
                    {x: -3, y: -2},
                    {x: -2, y: -2},
                    {x: -1, y: -2},
                    {x: 0, y: -2},
                    {x: 1, y: -2},
                    {x: 2, y: -2},
                    {x: 3, y: -2},

                    // y = -3 -----------
                    {x: -3, y: -3},
                    {x: -2, y: -3},
                    {x: -1, y: -3},
                    {x: 0, y: -3},
                    {x: 1, y: -3},
                    {x: 2, y: -3},
                    {x: 3, y: -3},

                    // y = -4 -----------
                    {x: -3, y: -4},
                    {x: -2, y: -4},
                    {x: -1, y: -4},
                    {x: 0, y: -4},
                    {x: 1, y: -4},
                    {x: 2, y: -4},
                    {x: 3, y: -4},
                ],
            },
        ],
    };

    // cartesian options ***********************************************
    var option2 = {
        responsive: true,
        legend: false,
        tooltips: false,
        animation: null,

        // x and y axis config --------------
        scales: {
            xAxes: [
                {
                    ticks: {
                        min: -3,
                        max: 3,
                        stepSize: 1,
                        fontSize: 14,
                    },
                    gridLines: {
                        color: "#4FAEFFFF",
                        drawTicks: false,
                        zeroLineColor: "black",
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        min: -4,
                        max: 4,
                        stepSize: 1,
                        fontSize: 14,
                    },
                    gridLines: {
                        color: "#4FAEFFFF",
                        drawTicks: false,
                        zeroLineColor: "black",
                    },
                },
            ],
        },

        //onClick on point action -----------------
        onClick: function (evt) {
            var element = cartesian2.getElementAtEvent(evt);

            if (element.length > 0) {
                var firstPoint = element[0];

                var value =
                    cartesian2.data.datasets[firstPoint._datasetIndex].data[
                        firstPoint._index
                        ]; //get selected point value

                adddata(value); //display selected data in the cartesian plane

                //Compare correct point selected --
                if (value.x == -2 && value.y == 3) {
                    correctPoint = true;
                } else {
                    correctPoint = false;
                }
            }
        },
    };

    //draw graph for selected point ****************************************
    function adddata(val) {
        cartesian2.data.datasets[0].data[0] = val;
        cartesian2.update();
    }

    // draw cartesian coordinate system ***************************************
    Chart.defaults.global.defaultFontSize = 16;

    var cartesian2 = new Chart(canvas2, {
        type: "scatter",
        plugins: plugin2,
        data: data2,
        options: option2,
    });

    function q2CheckAnswers() {
        if (correctPoint == true) {
            window.alert("welldone");
        } else {
            window.alert("try again");
        }
    }
}