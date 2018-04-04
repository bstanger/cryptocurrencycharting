const stub = require('./../data/janFeb2018.json');
const moment = require('moment');
// const Bluebird = require('bluebird');

function parseData(callback){
  const dataPoints = [];
  const labels = [];
  stub.forEach( dayData => {
    let dataCoords = {};
    dataPoints.push(dayData.price_close);
    labels.push(moment(dayData.time_period_start).format('MMM DD'));
  });
  let resultsObj = {
    dataPoints: dataPoints,
    labels: labels
  }
  if(callback){
    callback(resultsObj);
  }
}

module.exports = {
  // parseData: Bluebird.promisify(parseData)
  parseData: parseData
}
