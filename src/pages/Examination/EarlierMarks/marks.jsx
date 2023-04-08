import React, { useState } from "react";
import Data from "../Internals/internals.json";
import "./marks.css";

function Marks() {
  const [markdata, setMarkdata] = useState(Data);

  const handleclick1 = () => {
    const data = Data.filter((data) => {
      return data.sem === 1;
    });
    setMarkdata(data);
  };

  const handleclick2 = () => {
    const data = Data.filter((data) => {
      return data.sem === 2;
    });
    setMarkdata(data);
  };

  const handleclick3 = () => {
    const data = Data.filter((data) => {
      return data.sem === 3;
    });
    setMarkdata(data);
  };
  const DisplayMarks = markdata.map((record) => {
    return (
      <tr>
        <td>{record.code}</td>
        <td>{record.name}</td>
        <td>{record.marks}</td>
        <td>{record.total}</td>
      </tr>
    );
  });

  return (
    <div>
      <h1>Know Your Earlier Marks</h1>

      <div className="clickbtn">
        <button className="btn" onClick={handleclick1}>
          Semester 1
        </button>
        <button className="btn" onClick={handleclick2}>
          Semester 2
        </button>
        <button className="btn" onClick={handleclick3}>
          Semester 3
        </button>
      </div>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Subject Code</th>
            <th>Subject Name</th>
            <th>Marks Obtained</th>
            <th>Maximum Marks</th>
          </tr>
        </thead>
        <tbody>{DisplayMarks}</tbody>
      </table>
    </div>
  );
}

export default Marks;
