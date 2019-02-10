import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import DataEntry from "./components/DataEntry";
import Result from "./components/Result";
import Home from "./components/Home";
import Pass from "./components/Pass";

class App extends Component {
  render() {
    return (
      <div>
        <div className="navbar navbar-dark bg-dark mb-3">
          <Link to="/">
            <h5 className="text-light">FYP-Award Judging Online System</h5>
          </Link>
        </div>

        <div className="container">
          <Route exact path="/" component={Home} />
          <Route path="/data-entry" component={DataEntry} />
          <Route path="/results" component={Result} />
          <Route path="/pass" component={Pass} />
        </div>
      </div>
    );
  }
}

export default App;
