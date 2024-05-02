import Chart from 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.min.css'

(function () {
    // clear the input field on load - SR TAMIM
    document.getElementById('numInputArea').value = ""
})();

let data = [];

let graphTypeSelect = document.getElementById('graphType');

graphTypeSelect.addEventListener('change', function () {
    let selectedGraphType = this.value;
    console.log('The selected graph type is: ' + selectedGraphType);
    createGraph(selectedGraphType)
});

function createGraph(graphType = 'bar') {
    // Destroy chart if already exists
    let chart = Chart.getChart('acquisitions');
    if (chart) {
        chart.destroy();
    }

    // Create new chart
    new Chart(
        document.getElementById('acquisitions'),
        {
            type: graphType,
            data: {
                labels: data.map(row => row.interval),
                datasets: [
                    {
                        label: 'Frequency',
                        data: data.map(row => row.frequency)
                    }
                ]
            }
        }
    );
}

document.getElementById('myButton').addEventListener('click', () => {
    let elements = document.getElementsByClassName('initially-hidden');
    console.log(elements);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.visibility = 'visible';
    }

    document.getElementById('horizontal-gap').style.marginBottom = '0px';

    var string = document.getElementById('numInputArea').value;
    console.log("input text :\n", string);

    var numArray = string.split(" ");
    console.log("input array :\n", numArray);

    generateTable(numArray);
    createGraph();
});

function generateTable(numArray) {
    var length = numArray.length;
    var numOfClass = Math.ceil(1 + 3.322 * Math.log10(length));
    console.log("sturgesFormula (Number of class) :\n", numOfClass);

    var sortedArray = numArray.sort((a, b) => a - b);
    var min = parseInt(sortedArray[0]);
    var max = parseInt(sortedArray[length - 1]);

    var range = max - min;
    var interval = Math.ceil(range / numOfClass);

    console.log("min :\n", min);
    console.log("max :\n", max);
    console.log("range :\n", range);
    console.log("interval :\n", interval);

    var classInterval = [];
    var classFrequency = [];
    var classCumulativeFrequency = [];

    for (let i = 0; i < numOfClass; i++) {
        classInterval.push([min + (i * interval), min + (i + 1) * interval]);
        classFrequency.push(0);
        classCumulativeFrequency.push(0);
    }

    for (let i = 0, j = 0; i < length; i++) {
        if (sortedArray[i] >= classInterval[j][1]) {
            j++;
        }
        classFrequency[j]++;
    }

    console.log("classInterval :\n", classInterval);
    console.log("classFrequency :\n", classFrequency);

    // add to data
    data = [];
    for (let i = 0; i < numOfClass; i++) {
        data.push({ interval: classInterval[i][0] + '-' + classInterval[i][1], frequency: classFrequency[i] });
        classCumulativeFrequency[i] = classFrequency[i] + (i > 0 ? classCumulativeFrequency[i - 1] : 0);
    }
    console.log("classCumulativeFrequency :\n", classCumulativeFrequency);
    let total = classCumulativeFrequency[numOfClass - 1];

    // display table
    var freqTable = document.getElementById("freqTable");
    while (freqTable.hasChildNodes()) {
        freqTable.removeChild(freqTable.childNodes[0]);
    }

    var table = document.createElement('table');
    table.className = 'table table-striped table-hover table-responsive';
    var thead = document.createElement('thead');
    var tbody = document.createElement('tbody');
    var tr = document.createElement('tr');
    var th = document.createElement('th');
    th.innerHTML = 'Class Interval';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = 'Frequency or count';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = 'Cumulative Frequency (ascending)';
    tr.appendChild(th);
    th = document.createElement('th');
    th.innerHTML = 'Cumulative Frequency (descending)';
    tr.appendChild(th);
    thead.appendChild(tr);
    table.appendChild(thead);
    for (let i = 0; i < numOfClass; i++) {
        tr = document.createElement('tr');
        var td = document.createElement('td');
        td.innerHTML = classInterval[i][0] + '-' + classInterval[i][1];
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = classFrequency[i];
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = classCumulativeFrequency[i];
        tr.appendChild(td);
        td = document.createElement('td');
        td.innerHTML = total - (i >= 1 ? classCumulativeFrequency[i-1] : 0);
        tr.appendChild(td);
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    freqTable.appendChild(table);
};
