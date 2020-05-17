import React from "react";
import "../part/Style.css";
import CardTemplate from "./CardTemplate";

const MyTemplate = () => {
  return (
    <div className="col-md-7">
      <h4>My Templete</h4>
      <hr className="hr-line" />
      <div className="row">
        <CardTemplate />
        <CardTemplate />
      </div>
    </div>
  );
};
export default MyTemplate;
