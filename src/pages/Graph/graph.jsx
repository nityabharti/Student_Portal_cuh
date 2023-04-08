import React from "react";
import './graph.css';
import image from "../../assests/semgraph.png";

function Graph() {
  return (
    <div>
      <img src={image} alt="AttendData" className="graph" />
    </div>
  );
}
export default Graph;