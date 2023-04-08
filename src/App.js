import React, { useState } from "react";
import "./App.css";

import { Registor } from "./pages/Registor/registor";
import Login from "./pages/Login/login";

// import {
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider,
// } from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div className="container">
      {currentForm === "login" ? (
        <Login onFromSwitch={toggleForm} />
      ) : (
        <Registor onFromSwitch={toggleForm} />
      )}
    </div>
  );
}
export default App;
