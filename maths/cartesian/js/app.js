function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);
}

// q1 -------------------------------------------
function selectAnswerQ1(id) {
    const input = document.getElementById(id);
    var isSelected = input.getAttribute("selected");

    if (isSelected == "false") {
        input.style.borderColor = "#3B95E0FF";
        input.style.backgroundColor = "#4FAEFFFF";
        input.setAttribute("selected", "true");
    } else {
        input.style.borderColor = "#4FAEFFFF";
        input.style.backgroundColor = "white";
        input.setAttribute("selected", "false");
    }
}

// q3 -------------------------------------------
function selectAnswerQ3(id) {
    const input = document.getElementById(id);
    var isSelected = input.getAttribute("selected");

    if (isSelected == "false") {
        input.style.backgroundColor = "#3B95E0FF";
        input.setAttribute("selected", "true");
    } else {
        input.style.backgroundColor = "#77c0ff";
        input.setAttribute("selected", "false");
    }
}

// checkAllAAnswers ----------------------------------------------
function checkAllAnswers(qId) {
    // q1 ------------------
    if (qId == "q1") {
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

    // q3 -------------------
    if (qId == "q3") {
        const input1 = document.getElementById("q3a1");
        const input2 = document.getElementById("q3a2");
        const input3 = document.getElementById("q3a3");
        const input4 = document.getElementById("q3a4");

        var isSelected1 = input1.getAttribute("selected");
        var isSelected2 = input2.getAttribute("selected");
        var isSelected3 = input3.getAttribute("selected");
        var isSelected4 = input4.getAttribute("selected");

        if (
            isSelected1 == "true" &&
            isSelected3 == "false" &&
            isSelected4 == "true" &&
            isSelected2 == "false"
        ) {
            window.alert("welldone");
        } else {
            window.alert("try again");
        }
    }
}

// Q4 -----------------------------------------------
function drag(event) {
    event.detail = event.target.id;
    event.dataTransfer.setData("target_id", event.target.id);
}

function allowDrop(event) {
    event.preventDefault();
}

function dropQ4(event) {
    event.preventDefault();
    //console.log("target element")
    //console.log(event.target);
    var drop_target = event.target;
    var drag_target_id = event.dataTransfer.getData("target_id");
    var drag_target = document.getElementById(drag_target_id);
    //console.log("drop element")
    //console.log(drag_target);
    if (drop_target !== null && drag_target !== null) {
        drop_target.appendChild(document.getElementById(drag_target_id));
        // var tmp = document.createElement("span");
        // tmp.className = "hide";
        // drop_target.before(tmp);
        // drag_target.before(drop_target);
        // tmp.replaceWith(drag_target);
    }
}

function checkAnswerQ4() {
    let input1 = document.getElementById('q4input2');
    let input2 = document.getElementById('q4input3');
    let input3 = document.getElementById('q4input4');
    let input4 = document.getElementById('q4input5');

    if (input3.hasChildNodes()) {
        alert('weldone');
    } else {
        alert('try again');
    }

}

// cartesian plane q1 start =======================================================

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

// cartesian plane q1 end =======================================================

// cartesian plane q2 start =======================================================

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

    // Q3 Submit button action ************************************
    function checkAnswersQ2() {
        if (correctPoint == true) {
            window.alert("welldone");
        } else {
            window.alert("try again");
        }
    }
}

// cartesian plane q2 end =======================================================
