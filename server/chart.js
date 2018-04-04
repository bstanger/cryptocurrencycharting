const stub = require('./../data/janFeb2018.json');

function parseData(){
  stub.forEach( dayData => {
    console.log(`Price open is ${dayData.price_open}`);
  });
}

parseData();

// var ctx = document.getElementById("myChart").getContext('2d');
//
// var cfg = {
//   type: 'bar',
//   data: {
//     labels: labels,
//     datasets: [{
//       label: 'CHRT - Chart.js Corporation',
//       data: stub,
//       type: 'line',
//       pointRadius: 0,
//       fill: false,
//       lineTension: 0,
//       borderWidth: 2
//     }]
//   },
//   options: {
//     scales: {
//       xAxes: [{
//         type: 'time',
//         distribution: 'series',
//         ticks: {
//           source: 'labels'
//         }
//       }],
//       yAxes: [{
//         scaleLabel: {
//           display: true,
//           labelString: 'Closing price ($)'
//         }
//       }]
//     }
//   }
// };
// var chart = new Chart(ctx, cfg);

// document.getElementById('update').addEventListener('click', function() {
//   var type = document.getElementById('type').value;
//   chart.config.data.datasets[0].type = type;
//   chart.update();
// });
