import React from "react";
import JsonData from "./data.json";
import "./table.css";
function JsonDataDisplay() {
  const DisplayData = JsonData.map((info, key) => {
    return (
      <tr key={key}>
        <td>{info.id}</td>
        <td>{info.name}</td>
        <td>{info.code}</td>
        <td>{info.faculty}</td>
      </tr>
    );
  });

  return (
    <div className="head">
      <h1>Subject Offered </h1>
      <br />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Subject Name</th>
            <th>Subject Code</th>
            <th>Faculty Name</th>
          </tr>
        </thead>
        <tbody>{DisplayData}</tbody>
      </table>
    </div>
  );
}

export default JsonDataDisplay;
