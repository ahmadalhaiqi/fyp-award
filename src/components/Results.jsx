import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import JudgeMarks from "./JudgeMarks";
import AverageMarks from "./AverageMarks";
import FinalResult from "./FinalResult";
import Master from "./Master";
import judges from "../data/judges";
import { database } from "../database/config.js";

class Results extends Component {
  constructor(props) {
    super(props);

    this.state = {
      judges: [],
      nominees: []
    };

    this.dbNominees = database.ref().child("nominees");
  }

  fetchData() {
    this.setState({
      judges: judges.filter(j => j.dept === this.props.dept)
    });

    this.dbNominees.once("value", dataSnapshot => {
      let nominees = dataSnapshot.val();
      this.setState({
        nominees: nominees.filter(
          n => n.dept === this.props.dept && n.cat === this.props.cat
        )
      });
    });
  }

  componentDidMount() {
    this.fetchData();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props !== prevProps) this.fetchData();
  }

  componentWillUnmount() {
    this.dbNominees.off();
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
              Average marks per student
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
