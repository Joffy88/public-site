// import { useD3 } from "../../hooks/D3Hook";
import React from "react";
import * as d3 from "d3";

class BarChart extends React.Component {
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
      "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json",
      true
    );
    req.send();
    req.onload = function () {
      const json = JSON.parse(req.responseText);
      let gdpArray = json.data;

      var w = 900;
      var h = 400;
      var margin = { top: 50, right: 50, bottom: 50, left: 50 };

      const minDate = new Date(d3.min(gdpArray, (d) => d[0]));
      const maxDate = new Date(d3.max(gdpArray, (d) => d[0]));
      const barWidth = w / gdpArray.length;
      const xScale = d3
        .scaleTime()
        .domain([minDate, maxDate])
        .range([margin.left, w - margin.right]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(gdpArray, (d) => d[1])])
        .range([h - margin.bottom, margin.top]);
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);

      const svg = d3
        .select("#title")
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
        .selectAll("rect")
        .data(gdpArray)
        .enter()
        .append("rect")
        .attr("class", "bar")
        .attr("data-date", (d) => d[0])
        .attr("data-gdp", (d) => d[1])
        .attr("prettyGDP", function (arr, i) {
          return arr[1].toLocaleString();
        })
        .attr("prettyDate", function (arr) {
          const quarter = arr[0].slice(5, 7);
          const year = arr[0].slice(0, 4);
          if (quarter === "01") {
            return "Q1 " + year;
          } else if (quarter === "02") {
            return "Q2 " + year;
          } else if (quarter === "03") {
            return "Q3 " + year;
          } else return "Q4 " + year;
        })

        .attr("x", (d) => xScale(new Date(d[0])))
        .attr("y", (d) => yScale(d[1]))
        .attr("width", barWidth)
        .attr("height", (d) => h - yScale(d[1]) - margin.top)
        .attr("fill", "green")
        .on("mouseover", function () {
          tooltip.transition().duration(300).style("opacity", 0.9);
          tooltip
            .style("position", "absolute")
            .style("left", this.getAttribute("x") + "px")
            .style("top", h - 100 + "px")
            .attr("data-date", this.getAttribute("data-date"))
            .html(
              this.getAttribute("prettyDate") +
                "<br>" +
                "$" +
                this.getAttribute("prettyGDP") +
                " Billion"
            );
        })
        .on("mouseout", function () {
          tooltip.transition().duration(300).style("opacity", 0);
        });

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

export default BarChart;
