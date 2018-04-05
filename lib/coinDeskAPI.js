const axios = require('axios');
const moment = require('moment');

const getClosingData = (startDate, endDate) => {
  return new Promise(function(resolve, reject){
    axios.get(`https://api.coindesk.com/v1/bpi/historical/close.json?start=${startDate}&end=${endDate}`)
      .then((apiResults) => {
        let labels = Object.keys(apiResults.data.bpi);
        let momentLabels = [];
        let dataPoints = [];
        labels.forEach((date) => {
          dataPoints.push(apiResults.data.bpi[date]);
          momentLabels.push(moment(date).format('MM/DD/YYYY'));
        })
        var resultObj = {
          labels: momentLabels,
          dataPoints: dataPoints
        };
        console.log(resultObj);
        resolve(resultObj);
      }).catch((err) => {
        console.log(err);
        reject(err);
      })
  })
}

module.exports = {
  getClosingData: getClosingData
}
