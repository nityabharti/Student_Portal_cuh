import React from "react";
import "./room-details.css";

const data = [
  {
    name: "Normal Rooms",
    room: "108 - 1st Floor - Sharing",
    hostel_name: "Janki Ammal Girls Hostel",
  },
];
const RoomDetails = () => {
  return (
    <div className="room-details">
      <h1>Hostel Registration completed</h1>
      <div className="table">
        <table className="room_table">
          {data.map((val, key) => {
            return (
              <>
                <tr key={key}>
                  <td>Room Type</td>
                  <td>{val.name}</td>
                </tr>
                <tr key={key}>
                  <td>Allotted Room No.</td>
                  <td>{val.room}</td>
                </tr>
                <tr key={key}>
                  <td>Hostel-Alloted</td>
                  <td>{val.hostel_name}</td>
                </tr>
              </>
            );
          })}
        </table>
        <div className="hostel_link">
          <h3 className="hostel_h3">
            To Know more Details please visit CUH official website
          </h3>
          <a
            href="https://www.cuh.ac.in/Hostel.aspx?category=facilities"
            target={"blank"}
          >
            <button className="hostel_button">Click Here</button>
          </a>
        </div>
      </div>
    </div>
  );
};
export default RoomDetails;
