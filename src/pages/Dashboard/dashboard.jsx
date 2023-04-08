import { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Logo from "../../assests/ncuhlogo.png";
import Image from "../../assests/Nitya.jpg";
import "./dashboard.css";
import { Menu } from "antd";
import {
  AppstoreFilled,
  BookOutlined,
  ContactsOutlined,
  HomeFilled,
  PaperClipOutlined,
  PlayCircleOutlined,
  BellFilled,
} from "@ant-design/icons";
const Dashboard = () => {
  const Navigate = useNavigate();
  const [authenticated, setauthenticated] = useState(false);
  useEffect(() => {
    const loggedInUser = localStorage.getItem("authenticated");
    if (loggedInUser) {
      setauthenticated(loggedInUser);
    }
  }, []);

  if (!authenticated) {
    // return <Navigate replace to="/login" />;
    console.log("hello from dashboard");
  } else {
    return (
      <div className="dashboard_container">
        {/* header part */}
        <div className="dashboard_header">
          <a href="https://www.cuh.ac.in/" target={"blank"}>
            <img src={Logo} alt="logo" className="cuh_logo" />
          </a>

          <div className="dashboard_logout">
            <BellFilled
              className="bell"
              onClick={() => Navigate("/dashboard/notification")}
            />
            <button className="dashboard_button" onClick={() => Navigate("/")}>
              Log Out
            </button>
          </div>
        </div>
        {/* header part */}

        {/* main-section */}
        <div className="dashboard_main_section">
          <div className="dashboard_sidebar">
            <div className="dashboard_profile">
              <img src={Image} alt="dashboard" height={100} width={100} />
              <div className="dash_user">
                <p>
                  Hello!
                  <br /> Nitya
                </p>
              </div>
            </div>
            <div className="dash_route">
              <Menu
                onClick={({ key }) => {
                  Navigate(key);
                  console.log("hello");
                }}
                defaultSelectedKeys={[window.location.pathname]}
                items={[
                  {
                    label: "Home / Profile",
                    key: "/dashboard/home",
                    icon: <AppstoreFilled />,
                  },
                  {
                    label: "Academics",
                    icon: <BookOutlined />,
                    children: [
                      {
                        label: "Student Subject",
                        key: "/dashboard/student-subjects",
                      },
                      { label: "Time Table", key: "/dashboard/time-table" },
                      { label: "Attendence", key: "/dashboard/attendance" },
                      {
                        label: "General Elective Registration",
                        key: "/dashboard/gec-register",
                      },
                    ],
                  },
                  {
                    label: "Examination",
                    icon: <PaperClipOutlined />,
                    children: [
                      {
                        label: "Internal Marks Details",
                        key: "/dashboard/internals",
                      },
                      {
                        label: "Earlier Marks Details",
                        key: "/dashboard/earlier-marks",
                      },
                      {
                        label: "Current Semester Result",
                        key: "/dashboard/result",
                      },
                      {
                        label: "Exam Registration",
                        key: "/dashboard/examform",
                      },
                    ],
                  },
                  {
                    label: "Hostel",
                    icon: <HomeFilled />,
                    children: [
                      {
                        label: "Hostel Room Detail",
                        key: "/dashboard/room-details",
                      },
                      {
                        label: "Instruction Guide",
                        key: "/dashboard/instructions",
                      },
                    ],
                  },
                  {
                    label: "Bus Pass Details",
                    key: "/dashboard/bus",
                    icon: <PlayCircleOutlined />,
                  },
                  {
                    label: "Contact Us",
                    key: "/dashboard/contact",
                    icon: <ContactsOutlined />,
                  },
                ]}
                className="dash_menu"
              >
                {" "}
              </Menu>
            </div>
          </div>

          {/* outlet */}
          <div className="dashboard_outlet">
            <Outlet />
          </div>
        </div>
      </div>
    );
  }
};

export default Dashboard;
