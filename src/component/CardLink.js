import React from "react";
import "../part/Style.css";
import IconLink from "../assets/home1.png";
import IconStore from "../assets/img/toggle.png";

const CardLink = () => {
  return (
    <div className="col-md-7">
      <h4>Link to display</h4>
      <hr className="hr-line"></hr>
      <div className="box">
        <div className="d-flex justify-content-around">
          <span className="text-w600">
            {" "}
            <img src={IconLink} alt="" /> Store link
          </span>
          <span>
            <img src={IconStore} alt="" /> Active store link
          </span>
        </div>

        <div className="d-flex mt-3">
          <div className="img-titik">
            <span className="material-icons">drag_indicator</span>
          </div>
          <div className="content-r1">
            <div className="form-group row mtt">
              <span className="mrr text-w600">Link title</span>
              <input className="wdd" type="text" placeholder="Start shopping!" />
            </div>
            <div className="form-group row mttr">
              <span className="mrr text-w600">Link URL</span>
              <input className="wdd colorr" type="text" placeholder="demo.link/dummylink/store" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLink;
