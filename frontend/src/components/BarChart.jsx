import { useD3 } from '../hooks/useD3';
import React from 'react';
import * as d3 from 'd3';

function BarChart({ data, title, subtitle, note, timePeriod, buildingName }) {
  // default values
  if (!data) {
    data = [
      {xValue: 6, w: 3, yValue: 6.78},
      {xValue: 5, w: 4, yValue: 7.97},
      {xValue: 4, w: 9, yValue: 9.27},
      {xValue: 3, w: 9, yValue: 8.75},
      {xValue: 2, w: 4, yValue: 8.24},
      {xValue: 1, w: 8, yValue: 8.94},
    ];
  }
  if (!timePeriod) {
    timePeriod = "Months Ago"
  }
  // used to filter by building
  const building = buildingName;
  
  const ref = useD3(
    // set up sizing and margins
    (svg) => {
      const height = 500;
      const width = 300;
      const margin = { top: 20, right: 30, bottom: 100, left: 40 };
      // create x-axis values
      const x = d3
        .scaleBand()
        .domain(data.map((d) => d.xValue))
        .rangeRound([margin.left, width - margin.right])
        .padding(0.1);
      // create y-axis values
      const y1 = d3
        .scaleLinear()
        .domain([0, d3.max(data, (d) => d.w)])
        .rangeRound([height - margin.bottom, margin.top]);
      // build x-axis
      const xAxis = (g) =>
        g.attr("transform", `translate(0,${height - margin.bottom})`).call(
          d3
            .axisBottom(x)
            .tickValues(
              d3
                .ticks(...d3.extent(x.domain()), width / 40)
                .filter((v) => x(v) !== undefined)
            )
            .tickSizeOuter(0)
        )
        // add label
        .call((g) => 
          g
          .append("text")
          .attr("x", width/2)
          .attr("y", margin.bottom - 70)
          .attr("fill", "black")
          .attr("text-anchor", "start")
          .text(timePeriod)
        )
      // build y-axis
      const y1Axis = (g) =>
        g
          .attr("transform", `translate(${margin.left},0)`)
          .style("color", "black")
          .call(d3.axisLeft(y1).ticks(null, "s"))
          .call((g) => g.select(".domain").remove())
          .call((g) =>
          // add y-axis label
            g
              .append("text")
              .attr("x", -margin.left + 10)
              .attr("y", 10)
              .attr("fill", "black")
              .attr("text-anchor", "start")
              .text("Report Count")
          );
      // put x-axis, y-axis components in place
      svg.select(".x-axis").call(xAxis);
      svg.select(".y-axis").call(y1Axis);
      // add bars to graph
      svg
        .select(".plot-area")
        .attr("fill", "lightgrey")
        .selectAll(".bar")
        .data(data)
        .join("rect")
        .attr("class", "bar")
        // return to original aesthetic when hovering is finished
        .on("mouseout", function() {
          d3.select(this)
          .transition()
          .duration(400)
          .attr('width', x.bandwidth())
          .style("fill", "lightgrey")
        })
        // set up sizing of bars
        .attr("x", (d) => x(d.xValue))
        .attr("width", x.bandwidth())
        .attr("y", (d) => y1(d.w))
        .attr("height", (d) => y1(0) - y1(d.w))
        // change brightness depending on yValue2 value
        .style("filter", (d) => "brightness(" +  ((d.yValue - 4)/6) + ")")
        // add animation for mouse hover
        .on("mouseover", function() {
          d3.select(this)
          .transition()
          .duration(400)
          .attr('width', x.bandwidth() + 5)
          .style("fill", "blanchedalmond")
        })
      
    },
    [data.length]
  );

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
      <div>
        <h1 style={{fontSize: 25, textAlign: "center"}}>{title}</h1>
        <h2 style={{fontSize: 12, marginRight: 0, textAlign: "center"}}>{subtitle}</h2>
        <h3 style={{fontSize: 10, marginTop: 0, textAlign: "center", fontWeight: 'normal'}}>{note}</h3>
        <svg
          ref={ref}
          style={{
            align: "center",
            height: 500,
            width: "100%",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <g className="plot-area" />
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </div>
    
  );
}

export default BarChart;