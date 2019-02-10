import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Nominee from "./Nominee";
import TempList from "./TempList";

class NomineeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nominees: []
    };
  }

  updateNominees() {
    fetch("/api/nominees")
      .then(res => res.json())
      .then(nominees =>
        this.setState({
          nominees: nominees.filter(nominee =>
            nominee.judges.find(j => j["name"] === this.props.judge.name)
          )
        })
      );
  }
  componentDidMount() {
    this.updateNominees();
  }

  componentWillReceiveProps() {
    this.updateNominees();
  }

  render() {
    const nominees = this.state.nominees;
    return (
      <div className="container-fluid">
        <div className="lead mt-2 mb-2">
          Nominees for Judge {this.props.judge.name}
        </div>
        <TempList nominees={nominees} />
        <div>
          <Switch>
            <Route
              exact
              path="/data-entry/nominee/:nomineeId"
              render={({ match }) => (
                <Nominee
                  nominee={nominees.find(n => n.id === match.params.nomineeId)}
                  judge={this.props.judge}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default NomineeList;
