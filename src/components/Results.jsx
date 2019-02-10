import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import JudgeMarks from "./JudgeMarks";
import AverageMarks from "./AverageMarks";
import FinalResult from "./FinalResult";
import Master from "./Master";

class Results extends Component {
  state = {
    judges: [],
    nominees: []
  };

  fetchData() {
    fetch("/api/judges")
      .then(res => res.json())
      .then(judges =>
        this.setState({
          judges: judges.filter(j => j.dept === this.props.dept)
        })
      );

    fetch("/api/nominees")
      .then(res => res.json())
      .then(nominees =>
        this.setState({
          nominees: nominees.filter(
            n => n.dept === this.props.dept && n.cat === this.props.cat
          )
        })
      );
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps() {
    this.fetchData();
  }

  render() {
    const { judges, nominees } = this.state;
    const { dept, cat } = this.props;
    return (
      <div>
        <div className="btn-group container row text-center">
          <div className="p-1 col-sm-3">
            <NavLink
              className="btn btn-primary btn-block"
              to="/results/judge-marks"
            >
              Marks per judge
            </NavLink>
          </div>
          <div className="p-1 col-sm-3">
            <NavLink
              className="btn btn-primary btn-block"
              to="/results/average-marks"
            >
              Avergae marks per student
            </NavLink>
          </div>
          <div className="p-1 col-sm-3">
            <NavLink
              className="btn btn-primary btn-block"
              to="/results/final-result"
            >
              Final result
            </NavLink>
          </div>
          <div className="p-1 col-sm-3">
            <NavLink className="btn btn-primary btn-block" to="/results/master">
              Master sheet
            </NavLink>
          </div>
        </div>

        <hr />

        <Route
          path="/results/judge-marks"
          component={() => (
            <JudgeMarks
              judges={judges}
              nominees={nominees}
              dept={dept}
              cat={cat}
            />
          )}
        />
        <Route
          path="/results/average-marks"
          component={() => (
            <AverageMarks nominees={nominees} dept={dept} cat={cat} />
          )}
        />
        <Route
          path="/results/final-result"
          component={() => (
            <FinalResult nominees={nominees} dept={dept} cat={cat} />
          )}
        />
        <Route path="/results/master" component={Master} />
      </div>
    );
  }
}

export default Results;
