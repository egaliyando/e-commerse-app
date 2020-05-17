import React from "react";
import IconDashboard from "../assets/dashboard.png";
import IconFrontPage from "../assets/fontpage.png";

const Sidebar = () => {
  return (
    <section className="menu d-flex">
      <div className="sidebar">
        <div className="mt-c d-blok text-center">
          <img className="img_dashboard" src={IconDashboard} alt="" />
          <span className="dashboard">Dashboard</span>
          <hr className="line-dashbord" />
        </div>
        <div className="mt-c d-blok text-center mr-cc">
          <img className="img-fontpage" src={IconFrontPage} alt="" />
          <span className="front-page">Front page</span>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
