import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import image from "../../assests/logocuh.png";
import "./login.css";

const Login = (props) => {
  const [name, setName] = useState(""); // to set the data of the user
  const [pass, setPass] = useState("");
  // const [number, setNumber] = useState("");
  const navigate = useNavigate();
  // for authentication
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  const users = [{ name: "Nitya", pass: "123" }];
  // after updating for storing the value after submission we use usehandling

  const handlename = (e) => {
    setName(e.target.value);
  };
  const handlepassword = (e) => {
    setPass(e.target.value);
  };
  console.log(authenticated);
  // const handlenumber = (e) => {
  //   setNumber(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(pass);
    const account = users.find((user) => user.name === name);
    if (account && account.pass === pass) {
      setauthenticated(true);
      localStorage.setItem("authenticated", true);
      console.log("Nitya");
      navigate("/dashboard/home");
    } else {
      console.warn("please check your Name, Password");
      alert("Please check your Name, Password and Login again");
    }
  };
  return (
    <div className="auth-form-container">
      <div className="login_image">
        <img src={image} alt="logo" />
      </div>
      <div className="log_form">
        <h2>Welcome to CUH Student Portal</h2>
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={name}
            type="text"
            placeholder="Full Name"
            id="name"
            name="name"
            onChange={handlename}
          />
          {/* <label for="number">Roll No.</label>
          <input
            value={number}
            type="phone"
            placeholder="Roll No."
            id="number"
            onChange={handlenumber}
          /> */}
          <label htmlFor="password">Password</label>
          <input
            value={pass}
            type="password"
            placeholder="password"
            id="password"
            name="password"
            onChange={handlepassword}
          />
          <button className="login_button" type="submit">
            Log In
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFromSwitch("registor")}
        >
          Don't have an account? Registor
        </button>
      </div>
    </div>
  );
};

export default Login;
