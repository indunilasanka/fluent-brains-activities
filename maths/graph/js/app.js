function playSound(text) {
    const msg = new SpeechSynthesisUtterance();
    msg.volume = 1;
    msg.rate = 0.9;
    msg.pitch = 1;
    msg.text = text;
    msg.lang = "en-GB";
    speechSynthesis.speak(msg);
}

function submitGraphQ1() {
    const ans = document.getElementById("q1answer1");
    var parent = ans.parentElement.parentElement.id;
    if (parent == "left-block") {
        window.alert("welldone");
    } else {
        window.alert("try again");
    }
}

function setHeight(height) {
    for (var i = 1; i < 6; i++) {
        var bar = document.getElementById("h" + i);
        bar.style.background = null;
        bar.style.border = null;
        bar.setAttribute("selected", "false");
    }
    const h = document.getElementById(height);
    h.style.background = "#40af40";
    h.style.border = "1px solid #3B95E0FF";
    h.style.borderBottem = "none";
    h.setAttribute("selected", "true");
}

function submitGraphQ2() {
    const ans = document.getElementById("h3");
    var att = ans.getAttribute("selected");
    if (att == "true") {
        window.alert("welldone");
    } else {
        window.alert("try again");
    }
}

// Q5 -----------------------------------------------
function checkAnswerQ5(id) {
    const input = document.getElementById(id);
    var answer = input.value.toLowerCase();
    answer = answer.replace(/\s/g, "");

    var isCorrect = checkQ5(id, answer);

    if (isCorrect == true) {
        input.style.color = "#46cd46";
        return true;
    } else if (answer == "") {
        input.style.color = "#FF0000A8";
        input.value = "✖";
        setTimeout(() => {
            input.style.color = "black";
            input.value = "";
        }, 2000);
        return false;
    } else {
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
        }, 2000);
        return false;
    }
}

function checkQ5(id, answer) {
    if (id == "q5input1") {
        if (answer == "cloudy") {
            return true;
        }
    }

    if (id == "q5input2") {
        if (answer == "stormy") {
            return true;
        }
    }

    if (id == "q5input3") {
        if (
            answer == "4" ||
            answer == "04" ||
            answer == "4days" ||
            answer == "04days" ||
            answer == "four" ||
            answer == "fourdays"
        ) {
            return true;
        }
    }

    if (id == "q5input4") {
        if (
            answer == "9" ||
            answer == "09" ||
            answer == "9days" ||
            answer == "09days" ||
            answer == "nine" ||
            answer == "ninedays"
        ) {
            return true;
        }
    }

    if (id == "q5input5") {
        if (
            answer == "2" ||
            answer == "02" ||
            answer == "2days" ||
            answer == "02days" ||
            answer == "two" ||
            answer == "twodays"
        ) {
            return true;
        }
    }

    if (id == "q5input6") {
        if (
            answer == "18" ||
            answer == "18days" ||
            answer == "eighteen" ||
            answer == "eighteendays"
        ) {
            return true;
        }
    }

    if (id == "q5input7") {
        if (answer == "yes" || answer == "right") {
            return true;
        }
    }

    if (id == "q5input8") {
        if (
            answer == "31" ||
            answer == "31days" ||
            answer == "thirtyone" ||
            answer == "thirtyonedays"
        ) {
            return true;
        }
    }

    return false;
}

// Q6 -----------------------------------------------

function checkAnswerQ6(id) {
    const input = document.getElementById(id);
    var answer = input.value.toLowerCase();
    answer = answer.replace(/\s/g, "");

    var isCorrect = checkQ6(id, answer);

    if (isCorrect == true) {
        input.style.color = "#46cd46";
        return true;
    } else if (answer == "") {
        input.style.color = "#FF0000A8";
        input.value = "✖";
        setTimeout(() => {
            input.style.color = "black";
            input.value = "";
        }, 2000);
        return false;
    } else {
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
        }, 2000);
        return false;
    }
}

function checkQ6(id, answer) {
    if (id == "q6input1") {
        if (
            answer == "80" ||
            answer == "80cupcakes" ||
            answer == "eighty" ||
            answer == "eightycupcakes"
        ) {
            return true;
        }
    }

    if (id == "q6input2") {
        if (answer == "saturday") {
            return true;
        }
    }

    if (id == "q6input3") {
        if (
            answer == "140" ||
            answer == "140cupcakes" ||
            answer == "onehundredforty" ||
            answer == "onehundredfortycupcakes"
        ) {
            return true;
        }
    }

    if (id == "q6input4") {
        if (
            answer == "60" ||
            answer == "60cupcakes" ||
            answer == "sixty" ||
            answer == "sixtycupcakes"
        ) {
            return true;
        }
    }

    if (id == "q6input5") {
        if (answer == "false") {
            return true;
        }
    }

    if (id == "q6input6") {
        if (
            answer == "540" ||
            answer == "540cupcakes" ||
            answer == "fivehundredforty" ||
            answer == "fivehundredfortycupcakes"
        ) {
            return true;
        }
    }

    return false;
}

// Q7 -----------------------------------------------

function checkAnswerQ7(id, actual) {
    const input = document.getElementById(id);
    var answer = input.value.toLowerCase();
    answer = answer.replace(/\s/g, "");

    if (answer == actual) {
        input.style.color = "#46cd46";
        return true;
    } else if (answer == "") {
        input.style.color = "#FF0000A8";
        input.value = "✖";
        setTimeout(() => {
            input.style.color = "black";
            input.value = "";
        }, 2000);
        return false;
    } else {
        input.style.color = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
        }, 2000);
        return false;
    }
}

// Q8 --------------------------------------------
function selectAnswerQ8(id) {
    const input = document.getElementById(id);
    var val = input.getAttribute("imValue");

    if (val == "true") {
        input.src = "../img/child_black_n_white.svg";
        input.setAttribute("imValue", "false");
    } else if (val == "false") {
        input.src = "../img/child.svg";
        input.setAttribute("imValue", "true");
    }
}

// Q9 -----------------------------------------------

function checkAnswerQ9(id) {
    const input = document.getElementById(id);

    if (id == "q9a3") {
        window.alert("welldone");
    } else {
        input.style.color = "#FF0000A8";
        input.style.borderColor = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
            input.style.borderColor = "#4FAEFFFF";
        }, 2000);
    }
}

// Q10 -----------------------------------------------

function checkAnswerQ10(id) {
    const input = document.getElementById(id);

    if (id == "q10a4") {
        window.alert("welldone");
    } else {
        input.style.color = "#FF0000A8";
        input.style.borderColor = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
            input.style.borderColor = "#4FAEFFFF";
        }, 2000);
    }
}

// Q11 -----------------------------------------------

function checkAnswerQ11(id) {
    const input = document.getElementById(id);

    if (id == "q11a4") {
        window.alert("welldone");
    } else {
        input.style.color = "#FF0000A8";
        input.style.borderColor = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
            input.style.borderColor = "#4FAEFFFF";
        }, 2000);
    }
}

// Q12 -----------------------------------------------

function checkAnswerQ12(id) {
    const input = document.getElementById(id);

    if (id == "q12a4") {
        window.alert("welldone");
    } else {
        input.style.color = "#FF0000A8";
        input.style.borderColor = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
            input.style.borderColor = "#4FAEFFFF";
        }, 2000);
    }
}

// Q13 -------------------------------------------------

function checkAnswerQ13() {
    const ans1 = document.getElementById("q13answer1");
    var parent1 = ans1.parentElement.parentElement.id;

    const ans2 = document.getElementById("q13answer2");
    var parent2 = ans2.parentElement.parentElement.id;

    const ans3 = document.getElementById("q13answer3");
    var parent3 = ans3.parentElement.parentElement.id;

    if (
        parent1 == "right-block" &&
        parent2 == "middle-block" &&
        parent3 == "right-block"
    ) {
        window.alert("welldone");
    } else {
        window.alert("try again");
    }
}

// Q14 -----------------------------------------------

function checkAnswerQ14(id) {
    const input = document.getElementById(id);

    if (id == "q14a3") {
        window.alert("welldone");
    } else {
        input.style.color = "#FF0000A8";
        input.style.borderColor = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
            input.style.borderColor = "#4FAEFFFF";
        }, 2000);
    }
}

// Q15 -----------------------------------------------

function checkAnswerQ15(id) {
    const input = document.getElementById(id);

    if (id == "q15a4") {
        window.alert("welldone");
    } else {
        input.style.color = "#FF0000A8";
        input.style.borderColor = "#FF0000A8";
        setTimeout(() => {
            input.style.color = "black";
            input.style.borderColor = "#4FAEFFFF";
        }, 2000);
    }
}

// Check all answers --------------------------
function checkAllAnswers(qId) {
    if (qId == "q5") {
        var correctCount = 0;
        var isCorrect;

        for (var i = 1; i < 9; i++) {
            isCorrect = checkAnswerQ5("q5input" + i);
            if (isCorrect == true) {
                correctCount++;
            }
        }

        if (correctCount == 8) {
            window.alert("welldone");
        }
    }

    if (qId == "q6") {
        var correctCount = 0;
        var isCorrect;

        for (var i = 1; i < 7; i++) {
            isCorrect = checkAnswerQ6("q6input" + i);
            if (isCorrect == true) {
                correctCount++;
            }
        }

        if (correctCount == 6) {
            window.alert("welldone");
        }
    }

    if (qId == "q7") {
        var correctCount = 0;
        var isCorrect;

        var answerArr = [7, 3, 4, 8];

        for (var i = 1; i < 5; i++) {
            isCorrect = checkAnswerQ7("q7input" + i, answerArr[i - 1]);

            if (isCorrect == true) {
                correctCount++;
            }
        }

        if (correctCount == 4) {
            window.alert("welldone");
        }
    }

    if (qId == "q8") {
        var correctCount = 0;
        var input;
        var isCorrect;

        for (var i = 1; i < 9; i++) {
            input = document.getElementById("q8input" + i);
            isCorrect = input.getAttribute("imValue");

            if (isCorrect == "true") {
                correctCount++;
            }
        }

        if (correctCount == 3) {
            window.alert("welldone");
        } else {
            window.alert("try again");
        }
    }
}

// Drag and drop start -------------------------------
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
        var tmp = document.createElement("span");
        tmp.className = "hide";
        drop_target.before(tmp);
        drag_target.before(drop_target);
        tmp.replaceWith(drag_target);
    }
}

// Drag and drop end ---------------------------------

// Line graph Q3 start ========================================================

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
    function submitGraphQ3() {
        if (
            correctPoint01 == true &&
            correctPoint02 == true &&
            correctPoint03 == true &&
            correctPoint04 == true
        ) {
            window.alert("welldone");
        } else {
            window.alert("try again");
        }
    }
}

// Line graph Q3 end ====================================================================

// Line graph Q4 start ================================================================

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
    function submitGraphQ4() {
        if (
            correctPoint01Q4 == true &&
            correctPoint02Q4 == true &&
            correctPoint03Q4 == true
        ) {
            window.alert("welldone");
        } else {
            window.alert("try again");
            clearGraphQ4();
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

// Line graph Q4 end =====================================================================================

// Pie chart Q9 start ===================================================================================

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
                console.log(chart.chartArea);

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

// Pie chart Q9 end ======================================================================================

// Pie chart Q12 start ===================================================================================

var canvas4 = document.getElementById("chart-pie-q12");

if (canvas4) {
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
                console.log(chart.chartArea);

                if (chart.chartArea.right < 450) {
                    ctx.font = "12px 'Verdana'";
                } else if (chart.chartArea.right < 300) {
                    ctx.font = "8px 'Verdana'";
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
                        edgePointX = point2X < chartCenterPoint.x ? 115 : chart.width - 115;
                    } else {
                        edgePointX = point2X < chartCenterPoint.x ? 100 : chart.width - 100;
                    }

                    // add points to array (opt) --------------------
                    if (point2X < chartCenterPoint.x) {
                        leftLabelCoordinates.push(point2Y);
                    } else {
                        rightLabelCoordinates.push(point2Y);
                    }

                    //Draw line ------------------------------------------
                    ctx.strokeStyle = color;

                    if (chart.chartArea.right > 360) {
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
                                ? edgePointX - 115
                                : edgePointX + 115;
                    } else if (chart.chartArea.right < 300) {
                        labelX =
                            edgePointX < chartCenterPoint.x
                                ? edgePointX - 100
                                : edgePointX + 100;
                    } else {
                        labelX =
                            edgePointX < chartCenterPoint.x
                                ? edgePointX - 95
                                : edgePointX + 100;
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
        labels: [
            "Chocolate(3/10)",
            "Strawberry(2/5)",
            "Vanilla(1/5)",
            "Blueberry(1/10)",
        ],
        datasets: [
            {
                fill: true,
                backgroundColor: ["#e6a9ec", "#f7b386", "#84ddf7", "#f7dc6b"],
                data: [3 / 10, 4 / 10, 2 / 10, 1 / 10],
                borderColor: "black",
                borderWidth: 1,
            },
        ],
    };

    // pie chart options *****************************************************
    var options = {
        rotation: -0.65 * Math.PI,
        legend: {
            display: false,
        },
        responsive: true,
        animation: null,
        tooltips: {enabled: false},
        hover: {mode: null},
    };

    // Draw pie chart *******************************************************
    can = canvas4.getContext("2d");
    var myPieChart = new Chart(can, {
        type: "pie",
        data: data,
        options: options,
        plugins: plugins,
    });
}

// Pie chart Q12 end ======================================================================================
