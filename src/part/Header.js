import React from "react";
import { Navbar, Container, Form } from "react-bootstrap";
import "./Style.css";
import Icon from "../assets/icon.png";
import IconUser from "../assets/iconuser.png";
import Elips from "../assets/elips.svg";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container fluid={true}>
        <Navbar.Brand className="navbar-brand" href="#">
          Demo
        </Navbar.Brand>
        <div className="d-flex justify-content-between width-100">
          <Form className="form-inline my-2 my-lg-0 ml-auto">
            <input placeholder="&#xF002; Search for anything here" className="input-search" type="text" />
            <button className="btn-upgrade" type="submit">
              <img src={Icon} alt="" /> Upgrade
            </button>
            <span className="text-dummy">Dummy User</span>
            <div
              style={{
                alignItems: "center",
                display: "flex",
                justifyContent: "center",
                margin: "auto",
                position: "relative",
              }}
            >
              <img src={Elips} alt="" />
              <img style={{ position: "absolute", top: 10, left: 10 }} src={IconUser} alt="" />
            </div>
          </Form>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
