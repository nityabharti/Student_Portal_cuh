import React from "react";
import pic from "../../../assests/schedule.jpg";

import Record from "./student.json";
import "./student.css";

function Student() {
  return (
    <div className="time-table">
      <h1>Your Departmental Time Schedule</h1>

      <div className="inner">
        {Record &&
          Record.map((record) => {
            return (
              <div key={record.id}>
                <img src={pic} alt="academics" />

                <br />
                {/* <h3>
                    { record.caption }
                    </h3> */}
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Student;
