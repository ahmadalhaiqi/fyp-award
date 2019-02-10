import React, { Component } from "react";

export default class Pass extends Component {
  state = {
    pass: ""
  };
  onSubmit = () => {
    if (this.state.pass === "fyp2") {
      this.props.history.push("/results");
    } else {
      this.props.history.push("/");
    }
  };
  onChange = e => {
    this.setState({
      pass: e.target.value
    });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="pass">Pass Code</label>
          <input
            type="text"
            className="form-control"
            id="pass"
            placeholder="Enter Committee Pass Code..."
            value={this.state.pass}
            onChange={this.onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}
