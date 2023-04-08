import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./registor.css";
import image from "../../assests/logocuh.png";
export const Registor = (props) => {
  const Navigate = useNavigate();
  const [text, setText] = useState(""); // to set the data of the user
  const [pass, setPass] = useState("");
  const [verpass, setVerpass] = useState("");
  // const [num, setNum] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(text);
    // console.log(num);
  };
  const handleusername = (e) => {
    setText(e.target.value);
  };
  // const handleRoll = (e) => {
  //   setNum(e.target.value);
  // };

  const handlepassword = (e) => {
    setPass(e.target.value);
  };
  const handlevpass = (e) => {
    setVerpass(e.target.value);
  };
  return (
    <div className="auth-form-container">
      <div className="registor_image">
        <img src={image} alt="regimage" />
      </div>
      <div className="r_from">
        <h2>Welcome to CUH Student Portal</h2>
        <h2>Register</h2>
        <form className="registor-form" onSubmit={handleSubmit}>
          <label htmlFor="text">Name</label>
          <input
            value={text}
            type="text"
            placeholder="Full Name"
            id="text"
            name="text"
            onChange={handleusername}
          />
          {/* <label htmlFor="Roll No.">Roll No.</label>
          <input
            value={num}
            type="phone"
            placeholder="Roll No."
            id="number"
            onChange={handleRoll}
          /> */}
          <label htmlFor="registor as">Registor As</label>
          <select>
            <option value="admin">Admin</option>
            <option value="admin">Professor</option>
            <option value="admin">Student</option>
          </select>
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={handlepassword}
          />
          <label htmlFor="verify-password">Password</label>
          <input
            value={verpass}
            type="password"
            placeholder="verify-password"
            id="vpassword"
            name="vpassword"
            onChange={handlevpass}
          />

          <button
            className="registor_button"
            type="submit"
            onClick={() => Navigate("/dashboard/home")}
          >
            Sign Up
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFromSwitch("login")}
        >
          Already have an account? Login
        </button>
      </div>
    </div>
  );
};
