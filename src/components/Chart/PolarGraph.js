
import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [65,60,80,80,60],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
        <div className="app">
        <div className="row">
          <div className="mixed-chart">
          <Chart options={this.state.options} series={this.state.series} type="donut" height="350px"width="380" />
          </div>
        </div>
        </div>
    );
  }
}


export default App;