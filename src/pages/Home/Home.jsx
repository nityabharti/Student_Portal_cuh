import { Table } from "antd";
import { useNavigate } from "react-router-dom";
import "./home.css";

import userData from "./dataUser.json";
const columns = [
  {
    title: "Student Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Roll No.",
    dataIndex: "roll_no",
    key: "roll_no",
  },
  {
    title: "Institution",
    dataIndex: "institution",
    key: "institution",
  },
  {
    title: "Semester",
    dataIndex: "semester",
    key: "semester",
  },
  {
    title: "Program",
    dataIndex: "program",
    key: "program",
  },
  {
    title: "D.O.B / Gender",
    dataIndex: "dob_gender",
    key: "dob_gender",
  },

  {
    title: "Father's Name / Mother's Name",
    dataIndex: "f_mname",
    key: "f_mname",
  },
];

// const App = () => (
//   <Table columns={columns} dataSource={userData} className="home_table" />
// );
function Home() {
  const Navigate = useNavigate();
  return (
    <div className="home_section">
      <h2 className="home_profile">Student Profile:</h2>
      <Table columns={columns} dataSource={userData} className="home_table" />
      <div className="home_cards">
        <div className="home_opinion">
          <h2>Review </h2>
          <p>
            Excellent Personality with Funcky looks. Little bit shy during
            lectures, but quickly responses....
          </p>
          <button
            className="home_opinion_button"
            onClick={() => Navigate("/dashboard/review")}
          >
            Read More
          </button>
        </div>
        <div className="home_graph">
          <h2>Attendance - Semester Graph</h2>
          <p>
            <i>
              ( Attendence Graph form <br />
              Ist Semester upto Current Semester)
            </i>
          </p>
          <button onClick={() => Navigate("/dashboard/graph")}>
            Click Here
          </button>
        </div>
        <div className="home_paper">
          <h2>Subject Credits</h2>
          <p>
            <i>(Subject Credit is show below using Pie-Chart )</i>
          </p>
          <button onClick={() => Navigate("/dashboard/chart")}>
            Click Here
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
