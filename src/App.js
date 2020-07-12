import React, { useEffect, useState } from 'react';
import './App.css';
import { drawChart, initChart } from './charts/D3_Qasim';

const dataset = [
    [10, 30, 40, 20, 64,100,25]
]
var i = 0;

function App() {
  // const [data, setData] = useState([]);

  useEffect(() => {
      initChart(400, 600);
      loadChartRand();
  }, []);

    const loadChartRand = () => {
        drawChart(400, 600, dataset[i++]);
        if(i === dataset.length) i = 0;
    }


    return (
        <div className="App">
            <h2>React with D3 | Kepler Worx</h2>
            {/* <button onClick={loadChartRand}>Change Data</button> */}
            <div id="keplerworx">
            </div>
        </div>
    );
}

export default App;