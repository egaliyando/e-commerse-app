import React from "react";
import Jumbotron from "../component/Jumbotron";
import CardDashboard from "../component/CardDashboard";
import IconVisitor from "../assets/img/visitor.png";
import IconPageViews from "../assets/img/page_view.png";
import IconProductSold from "../assets/img/produk_sold.png";
import IconVisitorTotalSales from "../assets/img/total_sales.png";
import ImageCinta from "../assets/img/cinta.png";
import ImageSayang from "../assets/img/sayang.png";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="four-box">
          <CardDashboard title="Visitor" values="20 Visitor" IconUrl={IconVisitor} />
          <CardDashboard title="Page Views" values="124 Views" IconUrl={IconPageViews} />
          <CardDashboard title="Product Sold" values="23 Sold" IconUrl={IconProductSold} />
          <CardDashboard title="Total Sales" values="Rp. 350,000" IconUrl={IconVisitorTotalSales} />
        </div>
        <div className="f_t">
          <h4 className="h4_f">Send feedbacks to us!</h4>
          <span>We want Dazlink to always evolve and help you better.</span>
          <span>Your feedbacks and ideas would mean a lot to us!</span>
          <div className="box_bwh">
            <img className="cinta" src={ImageCinta} alt="" />
            <img className="sayang" src={ImageSayang} alt="" />
            <p className="p_f">Enter your feedbacks and ideas here</p>
          </div>
          <button className="bttn_submit">SUBMIT</button>
        </div>
      </div>
    );
  }
}
