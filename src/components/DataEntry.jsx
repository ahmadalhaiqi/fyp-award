import React, { Component } from "react";
import NomineeList from "./NomineeList";
import judges from "../data/judges";

class DataEntry extends Component {
  constructor(props) {
    super(props);

    this.state = {
      judges: judges,
      judge: { id: "none", code: "0", name: "" }
    };

    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    // fetch("/api/judges")
    //   .then(res => res.json())
    //   .then(judges => this.setState({ judges }));
  }

  onSelect() {
    this.setState({
      judge: {
        id: this.refs.judge.value,
        name: this.refs.judge.options[this.refs.judge.selectedIndex].label,
        code: this.refs.judge.options[this.refs.judge.selectedIndex].text
      }
    });
    if (this.refs.judge.value === "none") this.refs.code.value = "";
    this.props.history.push("/data-entry");
  }

  render() {
    const { judges, judge } = this.state;
    return (
      <div>
        <div>
          {judges ? (
            <div className="container">
              <div className="row">
                <select
                  className="col-sm m-1 form-control"
                  ref="judge"
                  onChange={this.onSelect}
                >
                  <option value="none">Select a judge...</option>
                  {judges.map(judge => (
                    <option key={judge.id} value={judge.id} label={judge.name}>
                      {judge.code}
                    </option>
                  ))}
                </select>
                <input
                  className="col-sm m-1 form-control"
                  type="text"
                  placeholder="Enter your code..."
                  ref="code"
                />
                <button
                  className="col-sm m-1 form-control btn btn-primary"
                  onClick={this.onSelect}
                >
                  Display my nominees
                </button>
              </div>
            </div>
          ) : (
            <div>Loading...</div>
          )}
        </div>
        {judge.id !== "none" && this.refs.code.value === judge.code && (
          <NomineeList judge={judge} />
        )}
      </div>
    );
  }
}

export default DataEntry;
