import React from "react";
import BarChart from "./BarChart";

class DisplayChart extends React.Component {
  render() {
    return (
      <div className="bar-chart-app center-text">
        <h1 className="center-text">United States GDP</h1>
        <BarChart />
      </div>
    );
  }
}

export default DisplayChart;
