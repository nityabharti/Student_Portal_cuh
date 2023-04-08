import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Login from "./pages/Login/login";
import Dashboard from "./pages/Dashboard/dashboard";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/contact";
import Notification from "./pages/Notification/notification";
import Student from "./pages/Academics/StudentsSubjects/student";
import JsonData from "./pages/Academics/Subjects/table";
import Registration from "./pages/Academics/RegistrationForm/registration";
import Form from "./pages/BusDetails/form";
import Attendance from "./pages/Academics/Attendance/attendance";
import Internal from "./pages/Examination/Internals/internals";
import Marks from "./pages/Examination/EarlierMarks/marks";
import Result from "./pages/Examination/Result/result";
import ExamForm from "./pages/Examination/ExamRegister/examform";
import Graph from "./pages/Graph/graph";
import Review from "./pages/Review/review";
import Chart from "./pages/Chart/chart";
import RoomDetails from "./pages/Hostel/Room-details/room-details";
import Instruction from "./pages/Hostel/Room-details/Instruction/instruction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="notification" element={<Notification />} />
          <Route path="time-table" element={<Student />} />
          <Route path="student-subjects" element={<JsonData />}></Route>
          <Route path="gec-register" element={<Registration />}></Route>
          <Route path="bus" element={<Form />}></Route>
          <Route path="attendance" element={<Attendance />}></Route>
          <Route path="internals" element={<Internal />}></Route>
          <Route path="earlier-marks" element={<Marks />}></Route>
          <Route path="result" element={<Result />}></Route>
          <Route path="examform" element={<ExamForm />}></Route>
          <Route path="graph" element={<Graph />}></Route>
          <Route path="review" element={<Review />} />
          <Route path="chart" element={<Chart />} />
          <Route path="room-details" element={<RoomDetails />} />
          <Route path="instructions" element={<Instruction />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
