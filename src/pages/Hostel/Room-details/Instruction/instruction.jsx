import React from "react";
import "./instruction.css";

function Instruction() {
  return (
    <div>
      <h1>Hostel Instruction Guide </h1>
      <div className="message">
        <p className="msg2">
          To get the instruction guide or to download the do's and dont's,
          please click on the given button.
        </p>
        <a
          href="http://www.cuh.ac.in/admin/uploads/pdf/0Final%20hostel%20Manual.pdf"
          target={"blank"}
        >
          <button className="instructionbtn">Click Here </button>
        </a>
      </div>
    </div>
  );
}

export default Instruction;
