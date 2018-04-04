import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Line } from 'react-chartjs-2';

export default class Chart extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      chartData: {}
    }
  }

  componentDidMount(){
    axios.get('/api/closingprices')
      .then(closingPricesData => {
        let chartData = {
          datasets: [{
            label: "Bitfinex - USD - Closing Prices",
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: closingPricesData.data.dataPoints,
          }],
          labels: closingPricesData.data.labels
        }
        this.setState({
          chartData: chartData
        });
      });
  }

  render(){
    return (
      <Line data={this.state.chartData} />
    )
  }
}
