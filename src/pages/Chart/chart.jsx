import React from "react";
import pie from "../../assests/pie-chart.jpeg";
import "./chart.css";
function chart() {
  return (
    <div>
      <img src={pie} alt="chart" height={250} className="chart" />
    </div>
  );
}

export default chart;
