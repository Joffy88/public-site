import React from "react";
import ScatterGraph from "./ScatterGraph";

class DisplayScatterGraph extends React.Component {
  render() {
    return (
      <div className="bar-chart-app center-text">
        <h1 className="center-text">Doping in Professional Bicycle Racing</h1>
        <ScatterGraph />
      </div>
    );
  }
}
export default DisplayScatterGraph;
