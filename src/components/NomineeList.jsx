import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import Nominee from "./Nominee";
import { database } from "../database/config.js";

class NomineeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nominees: []
    };

    this.dbNominees = database.ref().child("nominees");
  }

  componentDidMount() {
    this.dbNominees.once("value", dataSnapshot => {
      let nominees = [];

      dataSnapshot.forEach(childSnapshot => {
        let nominee = childSnapshot.val();
        nominee[".key"] = childSnapshot.key;
        nominees.push(nominee);
      });

      this.setState({
        nominees: nominees.filter(nominee =>
          nominee.judges.find(j => j["name"] === this.props.judge.name)
        )
      });
    });
  }

  componentWillUnmount() {
    this.dbNominees.off();
  }

  render() {
    const nominees = this.state.nominees;

    return (
      <div className="container-fluid">
        <div className="lead mt-2 mb-2">
          Nominees for Judge {this.props.judge.name}
        </div>
        {nominees.map(nominee => (
          <div key={nominee.id}>
            <NavLink
              className="card border-rounded m-2 p-2 btn-outline-dark"
              to={`/data-entry/nominee/${nominee.id}`}
            >
              {nominee.name}
            </NavLink>
          </div>
        ))}
        <div>
          <Route
            path="/data-entry/nominee/:nomineeId"
            render={({ match }) => (
              <Nominee
                nominee={nominees.find(n => n.id === match.params.nomineeId)}
                judge={this.props.judge}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default NomineeList;
