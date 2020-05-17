import React from "react";
import "../part/StyleDashboard.css";
import IconStaticVisitor from "../assets/img/static_visitor.png";
import IconUp from "../assets/img/up.png";
import IconDown from "../assets/img/down.png";

const CardDashboard = (props, IconUrl) => {
  return (
    <div className="boxs">
      <div className="c_t0">
        <img style={{ marginRight: 5 }} src={props.IconUrl} alt="" />
        <span>
          <b>{props.title}</b>
        </span>
      </div>

      <div className="c_t1">
        <span>{props.values}</span>
      </div>

      <div className="c_t1">
        <img className="img-static" src={IconStaticVisitor} alt="" />
      </div>

      <div className="mini-text">
        <div className="uk mini-1">
          <span>45 visitor</span>
          <span>136 Visitor</span>
        </div>
        <div className="uk mini-1">
          <span>- past 7 days</span>
          <span>- past 30 days</span>
        </div>
        <div className="uk mini-1">
          <span>
            <img src={IconUp} alt="" /> 12.31%
          </span>
          <span>
            <img src={IconDown} alt="" /> 4.76%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardDashboard;
