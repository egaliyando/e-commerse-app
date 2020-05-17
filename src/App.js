import React from "react";
import Header from "./part/Header";
import Sidebar from "./part/Sidebar";
import Dashboard from "./container/Dashboard";
import FrontPage from "./container/FrontPage";
import { Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-3">
              <Sidebar />
            </div>
            <div className="col-md-9">
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/frontpage" component={FrontPage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
