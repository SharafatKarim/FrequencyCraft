import Chart from 'chart.js/auto'
import 'bootstrap/dist/css/bootstrap.min.css'

let data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
];

let type = 'bar';

(async function () {
    new Chart(
        document.getElementById('acquisitions'),
        {
            type: type,
            data: {
                labels: data.map(row => row.year),
                datasets: [
                    {
                        label: 'Frequency',
                        data: data.map(row => row.count)
                    }
                ]
            }
        }
    );
})();
