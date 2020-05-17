import React from "react";
import Header from "../part/Header";
import { Container, Row, Col } from "react-bootstrap";
import Sidebar from "../part/Sidebar";
import CardLink from "../component/CardLink";
import ShowLayout from "../component/ShowLayout";
import MyTemplate from "../component/MyTemplate";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container fluid={true}>
          <Row>
            <Col sm={3}>
              <Sidebar />
            </Col>
            <Col sm={9}>
              <div>
                <ul className="nav nav-tabs d-flex justify-content-between" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Page Information
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Page links
                    </a>
                  </li>
                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="contact-tab"
                      data-toggle="tab"
                      href="#contact"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      My Templete
                    </a>
                  </li>

                  <li className="nav-item" role="presentation">
                    <a
                      className="nav-link"
                      id="tes-tab"
                      data-toggle="tab"
                      href="#tes"
                      role="tab"
                      aria-controls="tes"
                      aria-selected="false"
                    >
                      Link analytics
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <br />
                    <p>No Content</p>
                  </div>
                  <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Row>
                      <CardLink />
                      <ShowLayout />
                    </Row>
                  </div>
                  <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <Row>
                      <MyTemplate />
                      <ShowLayout />
                    </Row>
                  </div>
                  <div className="tab-pane fade" id="tes" role="tabpanel" aria-labelledby="tes-tab">
                    <br />
                    <p>No Content</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
