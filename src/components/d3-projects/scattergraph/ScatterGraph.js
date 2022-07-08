// import { useD3 } from "../../hooks/D3Hook";
import React from "react";
import * as d3 from "d3";

class ScatterGraph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "title",
    };
  }
  componentDidMount() {
    this.drawChart();
  }

  drawChart() {
    const req = new XMLHttpRequest();
    req.open(
      "GET",
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json",
      true
    );

    req.send();
    req.onload = function () {
      const json = JSON.parse(req.responseText);
      let yearArr = [];
      let timeArr = [];
      let parsedArr = [];
      json.map(function (d) {
        yearArr.push(d.Year);
        timeArr.push(d.Time);
        parsedArr.push([d.Year, d.Time]);
      });
      console.log(parsedArr);
      var w = 900;
      var h = 400;
      var margin = { top: 50, right: 50, bottom: 50, left: 50 };

      let maxYear = Math.max(...yearArr);
      let minYear = Math.min(...yearArr);
      let parseYear = d3.timeParse("%Y");

      const xScale = d3
        .scaleTime()
        .domain([parseYear(minYear - 1), parseYear(maxYear + 1)])
        .range([margin.left, w - margin.right]);

      const yScale = d3
        .scaleTime()
        .domain(d3.extent(timeArr))
        .range([h - margin.bottom, margin.top]);

      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);

      const svg = d3
        .select("body")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .attr("margin", margin)
        .attr("transform", `translate(${margin.left},${margin.bottom})`);

      const tooltip = d3
        .select("#title")
        .append("div")
        .attr("id", "tooltip")
        .style("opacity", 0);

      svg
        .selectAll("circle")
        .data(parsedArr)
        .enter()
        .append("circle")
        .attr("cx", (d) => d[0])
        .attr("cy", (d) => d[1])
        .attr("r", 5);

      // svg
      //   .selectAll("text")
      //   .data(timeArr)
      //   .enter()
      //   .append("text")
      //   .attr("x", (d) => d[0] + 5)
      //   .attr("y", (d) => h - d[1])
      //   .text((d) => d[0] + ", " + d[1]);

      svg
        .append("g")
        .attr("id", "x-axis")
        .attr("transform", "translate(0, " + (h - margin.bottom) + ")")
        .call(xAxis);
      svg
        .append("g")
        .attr("id", "y-axis")
        .attr("transform", "translate(" + margin.left + "," + 0 + ")")
        .call(yAxis);
    };
  }

  render() {
    return <div id="title"></div>;
  }
}

export default ScatterGraph;
