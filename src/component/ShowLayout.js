import React from "react";
import "../part/Style.css";
import ImageHp from "../assets/img/hp.png";

const Template = () => {
  return (
    <div className="col-md-5">
      <form>
        <ul className="list-style d-flex justify-content-between">
          <li>
            <input type="radio" name="web" value="web" />
            <span className="text-li">Web</span>
          </li>
          <li>
            <input type="radio" name="web" value="mobile" />
            <span className="text-li">Mobile</span>
          </li>
          <li>
            <input type="radio" name="web" value="layout" />
            <span className="text-li">Layout</span>
          </li>
        </ul>
      </form>
      <div className="row d-flex justify-content-center">
        <img src={ImageHp} alt="" width="200" />
      </div>
    </div>
  );
};

export default Template;
