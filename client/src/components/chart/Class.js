import React from 'react';
// import createPlotlyComponent from 'react-plotlyjs';
// //See the list of possible plotly bundles at https://github.com/plotly/plotly.js/blob/master/dist/README.md#partial-bundles or roll your own
// import Plotly from 'plotly.js/dist/plotly-cartesian';
// const PlotlyComponent = createPlotlyComponent(Plotly);
import Plot from "react-plotly.js";
import Moment from 'moment'

class Stock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: '',
      open: '',
      close: '',
      high: '',
      low: ''
    
    }
  }

  componentDidMount() {
    this.fetchStock();
  }

  fetchStock() {
    const pointerToThis = this;
    console.log(pointerToThis);

    let API_Call = '/api/quotes/data'
    let id = []
    let time = [];
    let open = [];
    let close = [];
    let high = [];
    let low = [];

    fetch(API_Call)
      .then(
        function(response) {
          return response.json();
        }
      )
      .then(
        function(data) {
          // console.log(data);

          for (var key in data) {
            id.push(key);
            time.push(data[key]['time']);
            open.push(data[key]['open']);
            close.push(data[key]['close']);
            low.push(data[key]['low']);
            high.push(data[key]['high']);
          }

         
          // console.log(close);
          // console.log(time);
          // console.log(high);
          // console.log(low);
          pointerToThis.setState({
            x: time,
            open: open,
            close: close,
            high: high,
            low: low,

          });
         
        }
      )
  }

  render() {
 

    var trace1 = {
  
      x: ['2021-05-17', '2021-05-18', '2021-05-19', '2021-05-20', '2021-05-23', '2021-05-24', '2021-05-25', '2021-05-26', '2021-05-27', '2021-05-30', '2021-05-31', '2021-06-01', '2021-06-02', '2021-06-03', '2021-06-06', '2021-06-07', '2021-06-08', '2021-06-09', '2021-06-10'],
      
      close: this.state.close, 
      
      decreasing: {line: {color: '#FF0000'}}, 
      
      high: this.state.high, 
      
      increasing: {line: {color: '#008000'}}, 
      
      line: {color: 'rgba(31,119,180,1)'}, 
      
      low: this.state.low, 
      
      open: this.state.open, 

      type: 'candlestick', 
      xaxis: 'x', 
      yaxis: 'y'
    };
    
    var data = [trace1];
    
    var layout = {
      dragmode: 'zoom', 
      margin: {
        r: 10, 
        t: 25, 
        b: 40, 
        l: 60
      }, 
      showlegend: false, 
      xaxis: {
        autorange: true, 
        domain: [0, 1], 
        range: ['2021-05-17 12:00', '2021-06-11 12:00'], 
        rangeslider: {range: ['2021-05-17 12:00', '2021-06-11 12:00']}, 
        title: 'Date', 
        type: 'date'
      }, 
      yaxis: {
        autorange: true, 
        domain: [0, 1], 
        range: [95.609999778, 120.410004222], 
        type: 'linear'
      }
    }
    return (
      <div>
        
        <Plot className="behappy" data={data} layout={layout} />

      </div>
    )
  }
}

export default Stock;