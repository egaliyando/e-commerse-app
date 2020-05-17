import React from "react";
import "../part/StyleDashboard.css";
import ImageBear from "../assets/img/boneka.png";
import IconOne from "../assets/img/ceklis.png";
import IconTwo from "../assets/img/alertseru.png";

const Jumbotron = () => {
  return (
    <div className="header-welcome">
      <div className="box-h d-flex justify-content-center">
        <span>www.demo.com/dummy_link</span>
      </div>
      <div className="row d-flex justify-content-between no-padding">
        <img className="img-dashboard" src={ImageBear} alt="" />

        <div>
          <p className="dummy">Hi Dummy, welcome back!</p>
        </div>

        <ul className="li-up">
          <li>
            <div className="box-right">
              <img className="i-li" src={IconOne} alt="" />
              <span>Add Your first product</span>
            </div>
          </li>

          <li>
            <div className="box-right">
              <img className="i-li" src={IconTwo} alt="" />
              <span>Set Up Payment Link</span>
            </div>
          </li>

          <li>
            <div className="box-right">
              <img className="i-li" src={IconTwo} alt="" />
              <span>Share your link & sosial panel</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Jumbotron;
