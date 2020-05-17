import React from "react";
import IconDashboard from "../assets/dashboard.png";
import IconFrontPage from "../assets/fontpage.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="menu d-flex">
      <div className="sidebar">
        <div className="mt-c d-blok text-center">
          <img className="img_dashboard" src={IconDashboard} alt="" />
          <Link exact to="/dashboard">
            <span className="dashboard">Dashboard</span>
          </Link>
          <hr className="line-dashbord" />
        </div>
        <div className="mt-c d-blok text-center mr-cc">
          <img className="img-fontpage" src={IconFrontPage} alt="" />
          <Link exact to="/frontpage">
            <span className="front-page">Front page</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
