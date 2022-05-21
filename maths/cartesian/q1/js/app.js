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
var canvas1 = document.getElementById("cartesian1");

if (canvas1) {
    // plugin for axis coordination ticks ********************************
    const plugin1 = [
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
    var data1 = {
        datasets: [
            {
                label: "Scatter Dataset",

                data: [
                    {x: -4, y: -1},
                    {x: -3, y: -1},
                    {x: -2, y: -1},
                    {x: -1, y: -1},
                    {x: 0, y: -1},
                    {x: 1, y: -1},
                    {x: 2, y: -1},
                    {x: 3, y: -1},
                    {x: 4, y: -1},
                ],

                borderColor: "orange",
                showLine: true,
                fill: false,
                tension: 0,
                pointRadius: 0,
            },
        ],
    };

    // cartesian options ***********************************************
    var option1 = {
        responsive: true,
        legend: false,
        tooltips: false,
        hover: {mode: null},
        animation: null,

        // x and y axis config --------------
        scales: {
            xAxes: [
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
    };

    // draw cartesian coordinate system ***************************************
    Chart.defaults.global.defaultFontSize = 16;

    var cartesian = new Chart(canvas1, {
        type: "scatter",
        plugins: plugin1,
        data: data1,
        options: option1,
    });
}


function selectAnswerQ1(id) {
    const input = document.getElementById(id);
    var isSelected = input.getAttribute("selected");

    if (isSelected == "false") {
        input.style.backgroundColor = "#21bfde";
        input.setAttribute("selected", "true");
    } else {
        input.style.backgroundColor = "#5adbf5";
        input.setAttribute("selected", "false");
    }
}

function q1CheckAllAnswers() {
    const input1 = document.getElementById("q1a1");
    const input2 = document.getElementById("q1a2");
    const input3 = document.getElementById("q1a3");
    const input4 = document.getElementById("q1a4");

    var isSelected1 = input1.getAttribute("selected");
    var isSelected2 = input2.getAttribute("selected");
    var isSelected3 = input3.getAttribute("selected");
    var isSelected4 = input4.getAttribute("selected");

    if (
        isSelected1 == "true" &&
        isSelected3 == "true" &&
        isSelected4 == "true" &&
        isSelected2 == "false"
    ) {
        window.alert("welldone");
    } else {
        window.alert("try again");
    }
}
