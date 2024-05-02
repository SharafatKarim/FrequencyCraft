import Chart from 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.min.css'

// let data = [
//     { interval: 2010, frequency: 10 },
//     { interval: 2011, frequency: 20 },
//     { interval: 2012, frequency: 15 },
//     { interval: 2013, frequency: 25 },
//     { interval: 2014, frequency: 22 },
//     { interval: 2015, frequency: 30 },
//     { interval: 2016, frequency: 28 },
// ];

let data = [];

let graphTypeSelect = document.getElementById('graphType');

graphTypeSelect.addEventListener('change', function () {
    let selectedGraphType = this.value;
    console.log('The selected graph type is: ' + selectedGraphType);
    createGraph(selectedGraphType)
});

// (async function () {
//     new Chart(
//         document.getElementById('acquisitions'),
//         {
//             type: type,
//             data: {
//                 labels: data.map(row => row.interval),
//                 datasets: [
//                     {
//                         label: 'Frequency',
//                         data: data.map(row => row.frequency)
//                     }
//                 ]
//             }
//         }
//     );
// })();

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
    var classCumulativeFrequencyDescending = [];

    for (let i = 0; i < numOfClass; i++) {
        classInterval.push([min + (i * interval), min + (i + 1) * interval]);
        classFrequency.push(0);
        classCumulativeFrequency.push(0);
        classCumulativeFrequencyDescending.push(0);
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
    for (let i = 0; i < numOfClass; i++) {
        data.push({ interval: classInterval[i][0] + '-' + classInterval[i][1], frequency: classFrequency[i] });
    }
};


// 32 27 19 40 31 17 15 18 21 27 38 15 33 34 29 26 16 25 33 36 24 22 26 19 36 18 25 20 25 25 31 24 16 28 30 24 29 42 29 28 26 27 47 43 22 25 28 22 24 23