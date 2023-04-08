import React from "react";
import "./review.css";
function review() {
  return (
    <div className="review_top">
      <div className="review_head">
        <h1>Review's by Professors</h1><hr/>
      </div>
      <div className="review_feedback">
        <h2>
          <ul typeof="disc">
            <li className="list">Little bit shy during lectures, but quickly responses.</li>
            <li className="list">Great athletism and Hard Working.</li>
            <li className="list">Highly enthusiastic towards sports and Cultural Events.</li>
            <li className="list"> Nice Communication skills with good behaviour</li>
            <li className="list">Ambitious for his dreams and good leadership qualities</li>
          </ul>
        </h2>
      </div>
    </div>
  );
}

export default review;