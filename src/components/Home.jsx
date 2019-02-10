import React, { Component } from "react";

class Home extends Component {
  render() {
    const { history } = this.props;
    return (
      <div className="text-center">
        <img src="/images/logo.png" alt="logo" width="300px" />

        <div className="lead shadow p-3 m-3 bg-white rounded">
          Welcome to FYP Award Competition
        </div>

        <div className="container">
          <button
            onClick={() => history.push("/data-entry")}
            type="button"
            className="btn btn-primary btn-lg m-2 p-3 col-xl-6"
          >
            Judge
          </button>
          <button
            onClick={() => history.push("/pass")}
            type="button"
            className="btn btn-primary btn-lg m-2 p-3 col-xl-6"
          >
            Committee
          </button>
        </div>
      </div>
    );
  }
}

export default Home;
