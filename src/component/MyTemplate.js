import React from "react";
import "../part/Style.css";
import { Row, Col } from "react-bootstrap";
import CardTemplate from "./CardTemplate";

const MyTemplate = () => {
  return (
    <Col sm="7">
      <h4>My Templete</h4>
      <hr class="hr-line" />
      <Row>
        <CardTemplate />
        <CardTemplate />
      </Row>
    </Col>
  );
};
export default MyTemplate;
