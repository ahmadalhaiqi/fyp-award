import React, { Component } from "react";
import Results from "./Results";

export default class Result extends Component {
  state = {
    selectedDept: "none",
    selectedCat: "none"
  };

  onSelectDept = e => {
    this.setState({
      selectedDept: e.target.value,
      selectedCat: "none"
    });
  };

  onSelectCat = e => {
    this.setState({ selectedCat: e.target.value });
  };

  render() {
    const { selectedDept, selectedCat } = this.state;
    return (
      <div>
        <div className="container row text-center">
          <div className="col-sm-6">
            <select
              className="col-sm mb-3 form-control"
              onChange={this.onSelectDept}
              value={selectedDept}
            >
              <option value="none">Select a department...</option>
              <option value="CE" label="Civil Engineering (CE)" />
              <option value="ME" label="Mechanical Engineering (ME)" />
              <option value="EEEP" label="EE, EP and CC Engineering (EEEP)" />
            </select>
          </div>

          <div className="col-sm-6">
            {selectedDept === "CE" && (
              <select
                className="col-sm mb-3 form-control"
                onChange={this.onSelectCat}
                value={selectedCat}
              >
                <option value="none">Select a category...</option>

                <option
                  value="Structure & Materials"
                  label="Structure & Materials"
                />
                <option
                  value="Highway & Geotechnical"
                  label="Highway & Geotechnical"
                />
                <option
                  value="Water & Waste-water"
                  label="Water & Waste-water"
                />
              </select>
            )}

            {selectedDept === "ME" && (
              <select
                className="col-sm m-1 form-control"
                onChange={this.onSelectCat}
                value={selectedCat}
              >
                <option value="none">Select a category...</option>

                <option
                  value="Modelling & Simulation"
                  label="Modelling & Simulation"
                />
                <option value="Design & Analysis" label="Design & Analysis" />
                <option
                  value="Experimental Research"
                  label="Experimental Research"
                />
              </select>
            )}

            {selectedDept === "EEEP" && (
              <select
                className="col-sm m-1 form-control"
                onChange={this.onSelectCat}
                value={selectedCat}
              >
                <option value="none">Select a category...</option>

                <option
                  value="Software Development"
                  label="Software Development"
                />
                <option value="System Design" label="System Design" />
                <option
                  value="Research & Development"
                  label="Research & Development"
                />
              </select>
            )}
          </div>
        </div>
        {selectedDept !== "none" && selectedCat !== "none" && (
          <Results dept={selectedDept} cat={selectedCat} />
        )}
      </div>
    );
  }
}
