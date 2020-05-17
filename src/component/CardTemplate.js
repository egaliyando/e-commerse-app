import React from "react";
import "../part/Style.css";
import IconHome from "../assets/img/home3.png";

export default class CardTemplate extends React.Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }
  render() {
    return (
      <div className="col-md-6">
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
            <input type="checkbox" checked />
            <span className="slider round" />
          </label>
        </div>
      </div>
    );
  }
}
