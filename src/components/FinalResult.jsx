import React, { Component } from "react";
import { database } from "../database/config.js";

class FinalResult extends Component {
  totals = [];
  total_winner = {};

  constructor(props) {
    super(props);

    this.state = {
      innovative_winner: {},
      technical_winner: {},
      marketable_winner: {},
      overall_winner: {},
      total_winner: {}
    };

    this.dbMaster = database.ref().child("master");

    this.onClickInnovative = this.onClickInnovative.bind(this);
    this.onClickTechnical = this.onClickTechnical.bind(this);
    this.onClickMarketable = this.onClickMarketable.bind(this);
    this.onClickOverall = this.onClickOverall.bind(this);
  }

  onClickInnovative(e) {
    this.setState({
      innovative_winner: {
        ...this.totals.find(t => t.name === e.target.innerHTML)
      }
    });
  }

  onClickTechnical(e) {
    this.setState({
      technical_winner: {
        ...this.totals.find(t => t.name === e.target.innerHTML)
      }
    });
  }

  onClickMarketable(e) {
    this.setState({
      marketable_winner: {
        ...this.totals.find(t => t.name === e.target.innerHTML)
      }
    });
  }

  onClickOverall(e) {
    this.setState({
      overall_winner: {
        ...this.totals.find(t => t.name === e.target.innerHTML)
      }
    });
  }

  onSave = () => {
    let data = [];
    switch (this.props.dept) {
      case "CE":
        switch (this.props.cat) {
          case "Structure & Materials":
            data["ce_structure_best_winner"] = this.total_winner;
            break;
          case "Highway & Geotechnical":
            data["ce_highway_innovative_winner"] = this.state.innovative_winner;
            data["ce_highway_technical_winner"] = this.state.technical_winner;
            data["ce_highway_marketable_winner"] = this.state.marketable_winner;
            break;
          case "Water & Waste-water":
            data["ce_water_innovative_winner"] = this.state.innovative_winner;
            data["ce_water_technical_winner"] = this.state.technical_winner;
            data["ce_water_marketable_winner"] = this.state.marketable_winner;
            break;
          default:
            break;
        }
        break;
      case "ME":
        switch (this.props.cat) {
          case "Modelling & Simulation":
            data[
              "me_modelling_innovative_winner"
            ] = this.state.innovative_winner;
            data["me_modelling_technical_winner"] = this.state.technical_winner;
            data[
              "me_modelling_marketable_winner"
            ] = this.state.marketable_winner;
            break;
          case "Design & Analysis":
            data["me_design_innovative_winner"] = this.state.innovative_winner;
            data["me_design_technical_winner"] = this.state.technical_winner;
            data["me_design_marketable_winner"] = this.state.marketable_winner;
            break;
          case "Experimental Research":
            data[
              "me_experimental_innovative_winner"
            ] = this.state.innovative_winner;
            data[
              "me_experimental_technical_winner"
            ] = this.state.technical_winner;
            data[
              "me_experimental_marketable_winner"
            ] = this.state.marketable_winner;
            break;
          default:
            break;
        }
        break;
      case "EEEP":
        switch (this.props.cat) {
          case "Software Development":
            data[
              "eeep_software_innovative_winner"
            ] = this.state.innovative_winner;
            data[
              "eeep_software_technical_winner"
            ] = this.state.technical_winner;
            data[
              "eeep_software_marketable_winner"
            ] = this.state.marketable_winner;
            break;
          case "System Design":
            data[
              "eeep_system_innovative_winner"
            ] = this.state.innovative_winner;
            data["eeep_system_technical_winner"] = this.state.technical_winner;
            data[
              "eeep_system_marketable_winner"
            ] = this.state.marketable_winner;
            break;
          case "Research & Development":
            data[
              "eeep_research_innovative_winner"
            ] = this.state.innovative_winner;
            data[
              "eeep_research_technical_winner"
            ] = this.state.technical_winner;
            data[
              "eeep_research_marketable_winner"
            ] = this.state.marketable_winner;
            break;
          default:
            break;
        }
        break;
      default:
        break;
    }

    for (let key in data) this.dbMaster.child(key).update(data[key]);
  };

  componentWillUnmount() {
    this.dbMaster.off();
  }

  render() {
    this.totals = [];
    return (
      <div className="container-fluid">
        <h5 className="btn btn-danger">Final Result</h5>
        <h5 className="lead mb-3">
          {this.props.dept}: [{this.props.cat}]
        </h5>

        <table className="table table-bordered table-responsive-md m-2">
          <thead className="thead-dark">
            <tr>
              <th width="20%">Category</th>
              <th width="20%">Student's Name</th>
              <th width="35%">Project Title</th>
              <th width="20%">Supervisor</th>
              <th width="5%">mark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>The Most Innovative Winner</th>
              <td>{this.state.innovative_winner.name}</td>
              <td>{this.state.innovative_winner.title}</td>
              <td>{this.state.innovative_winner.supervisor}</td>
              <td>{this.state.innovative_winner.innovative_total}</td>
            </tr>
            <tr>
              <th>The Most Technical Winner</th>
              <td>{this.state.technical_winner.name}</td>
              <td>{this.state.technical_winner.title}</td>
              <td>{this.state.technical_winner.supervisor}</td>
              <td>{this.state.technical_winner.technical_total}</td>
            </tr>
            <tr>
              <th>The Most Marketable Winner</th>
              <td>{this.state.marketable_winner.name}</td>
              <td>{this.state.marketable_winner.title}</td>
              <td>{this.state.marketable_winner.supervisor}</td>
              <td>{this.state.marketable_winner.marketable_total}</td>
            </tr>
            {/*<tr>
              <th>The Overall Winner</th>
              <td>{this.state.overall_winner.name}</td>
              <td>{this.state.overall_winner.title}</td>
              <td>{this.state.overall_winner.supervisor}</td>
              <td>{this.state.overall_winner.overall_total}</td>
            </tr>*/}
          </tbody>
        </table>

        {this.props.nominees.forEach(nominee => {
          let averages = { ...nominee };
          delete averages.judges;

          let marks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
          nominee.judges.map(judge =>
            judge["marks"].map((mark, i) => {
              marks[i] += Number(mark);
              return mark;
            })
          );
          Object.defineProperty(averages, "marks", {
            value: marks.map(mark => mark / nominee.judges.length)
          });

          let m = averages.marks;

          let total = { ...averages };
          delete total.marks;
          const innovative_total = Number(m[0]) + Number(m[1]) + Number(m[2]);
          const technical_total = Number(m[3]) + Number(m[4]) + Number(m[5]);
          const marketable_total = Number(m[6]) + Number(m[7]) + Number(m[8]);
          const overall_total = Number(m[9]) + Number(m[10]) + Number(m[11]);
          const total_points = m.reduce((t, v) => Number(t) + Number(v));

          Object.defineProperty(total, "innovative_total", {
            value: innovative_total,
            enumerable: true
          });
          Object.defineProperty(total, "technical_total", {
            value: technical_total,
            enumerable: true
          });
          Object.defineProperty(total, "marketable_total", {
            value: marketable_total,
            enumerable: true
          });
          Object.defineProperty(total, "overall_total", {
            value: overall_total,
            enumerable: true
          });
          Object.defineProperty(total, "total_points", {
            value: total_points,
            enumerable: true
          });

          this.totals.push(total);
        })}

        <div>
          <div className="badge badge-warning m-2 p-2">
            Please click on a student's name to select as the winner
          </div>
          <button onClick={this.onSave} className="btn btn-success float-right">
            Save the results
          </button>
          <div className="card m-2">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th width="5%">#</th>
                  <th width="80%">
                    Ranking based on the most innovative award
                  </th>
                  <th width="15%">Points</th>
                </tr>
              </thead>
              <tbody>
                {this.totals
                  .sort(
                    (a, b) =>
                      Number(b.innovative_total) - Number(a.innovative_total)
                  )
                  .map(
                    (t, i) =>
                      i < 3 && (
                        <tr key={t.id} onClick={this.onClickInnovative}>
                          <td width="5%">{++i}</td>
                          <td>{t.name}</td>
                          <td>{t.innovative_total}</td>
                        </tr>
                      )
                  )}
              </tbody>
            </table>
          </div>
          <div className="card m-2">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th width="5%">#</th>
                  <th width="80%">Ranking based on the most technical award</th>
                  <th width="15%">Points</th>
                </tr>
              </thead>
              <tbody>
                {this.totals
                  .sort(
                    (a, b) =>
                      Number(b.technical_total) - Number(a.technical_total)
                  )
                  .map(
                    (t, i) =>
                      i < 3 && (
                        <tr key={t.id} onClick={this.onClickTechnical}>
                          <td width="5%">{++i}</td>
                          <td>{t.name}</td>
                          <td>{t.technical_total}</td>
                        </tr>
                      )
                  )}
              </tbody>
            </table>
          </div>
          <div className="card m-2">
            <table className="table table-hover">
              <thead className="thead-light">
                <tr>
                  <th width="5%">#</th>
                  <th width="80%">
                    Ranking based on the most marketable award
                  </th>
                  <th width="15%">Points</th>
                </tr>
              </thead>
              <tbody>
                {this.totals
                  .sort(
                    (a, b) =>
                      Number(b.marketable_total) - Number(a.marketable_total)
                  )
                  .map(
                    (t, i) =>
                      i < 3 && (
                        <tr key={t.id} onClick={this.onClickMarketable}>
                          <td width="5%">{++i}</td>
                          <td>{t.name}</td>
                          <td>{t.marketable_total}</td>
                        </tr>
                      )
                  )}
              </tbody>
            </table>
          </div>
          <div className="card m-2">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th width="5%">#</th>
                  <th width="80%">Ranking based on the best overall award</th>
                  <th width="15%">Points</th>
                </tr>
              </thead>
              <tbody>
                {this.totals
                  .sort(
                    (a, b) => Number(b.overall_total) - Number(a.overall_total)
                  )
                  .map(
                    (t, i) =>
                      i < 3 && (
                        <tr key={t.id} /*onClick={this.onClickOverall}*/>
                          <td width="5%">{++i}</td>
                          <td>{t.name}</td>
                          <td>{t.overall_total}</td>
                        </tr>
                      )
                  )}
              </tbody>
            </table>
          </div>
          <div className="card m-2">
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th width="5%">#</th>
                  <th width="80%">Ranking based on the total points</th>
                  <th width="15%">Points</th>
                </tr>
              </thead>
              <tbody>
                {this.totals
                  .sort(
                    (a, b) => Number(b.total_points) - Number(a.total_points)
                  )
                  .map((t, i) => {
                    if (i === 0) this.total_winner = t;
                    return (
                      i < 3 && (
                        <tr key={t.id}>
                          <td width="5%">{++i}</td>
                          <td>{t.name}</td>
                          <td>{t.total_points}</td>
                        </tr>
                      )
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default FinalResult;
