import React from "react";
import { Col } from "react-bootstrap";
import "../part/Style.css";
import IconHome from "../assets/img/home3.png";

const CardTemplate = () => {
  return (
    <Col sm="6">
      <div className="boxs">
        <div className="bg-header1">
          <div className="circle"></div>
        </div>
        <div className="content-btn text-center">
          <div className="btn1">
            <button className="btn-home">
              <img src={IconHome} alt="" />
            </button>
          </div>
          <div className="btn2">
            <button className="btn-link">Your link</button>
          </div>
        </div>
      </div>
      <div className="text-f">
        <span>Basic Templete</span>
        <label className="switch">
          <span className="tombol-active">active</span>
          <input type="checkbox" checked />
          <span className="slider round"></span>
        </label>
      </div>
    </Col>
  );
};

export default CardTemplate;
