import React, { Component } from "react";
import { database } from "../database/config.js";

class Nominee extends Component {
  constructor(props) {
    super(props);

    let nominee = Object.assign({}, this.props.nominee);
    delete nominee[".key"];
    this.state = {
      nominee: nominee,
      marks: this.props.nominee.judges.find(
        j => j["name"] === this.props.judge.name
      ).marks
    };

    this.dbNominees = database.ref().child("nominees");

    this.onSubmit = this.onSubmit.bind(this);
    this.updateMark = this.updateMark.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      let nominee = Object.assign({}, this.props.nominee);
      delete nominee[".key"];
      this.setState({
        nominee: nominee,
        marks: this.props.nominee.judges.find(
          j => j["name"] === this.props.judge.name
        ).marks
      });
    }
  }

  componentWillUnmount() {
    this.dbNominees.off();
  }

  onSubmit(e) {
    e.preventDefault();
    this.state.nominee.judges.find(
      j => j["name"] === this.props.judge.name
    ).marks = this.state.marks;

    this.dbNominees
      .child(this.props.nominee[".key"])
      .update(this.state.nominee);
  }

  updateMark(e) {
    let marks = this.state.marks;
    marks[e.target.id] = e.target.value;
    this.setState({ marks });
  }

  render() {
    return (
      <div>
        <div className="card border-secondary mb-3">
          <div className="card-header">
            <h5>
              {this.state.nominee.name} [ Table: {this.state.nominee.tab} ]
            </h5>
            <div className="small font-italic mt-1">
              {this.state.nominee.title}
            </div>
          </div>
          <div className="card-body">
            <form className="form" onSubmit={this.onSubmit}>
              <div className="container-fluid">
                <div className="row">
                  <fieldset className="form-group col-sm-6">
                    <legend className="alert alert-dark small">
                      THE MOST INNOVATIVE AWARD
                    </legend>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Design Novelty</h6>
                        <small className="form-text text-muted">
                          The project is new and original, or if the project is
                          a modification of an existing work, it can lead to a
                          new design / product.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="innov-novelty"
                            type="radio"
                            id="0"
                            value="1"
                            checked={this.state.marks[0] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-novelty"
                            type="radio"
                            id="0"
                            value="2"
                            checked={this.state.marks[0] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-novelty"
                            type="radio"
                            id="0"
                            value="3"
                            checked={this.state.marks[0] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-novelty"
                            type="radio"
                            id="0"
                            value="4"
                            checked={this.state.marks[0] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-novelty"
                            type="radio"
                            id="0"
                            value="5"
                            checked={this.state.marks[0] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Design Creativity / Innovativeness</h6>
                        <small className="form-text text-muted">
                          The project is distinctive, creative and innovative in
                          its design implementation.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="innov-creativity"
                            type="radio"
                            id="1"
                            value="1"
                            checked={this.state.marks[1] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-creativity"
                            type="radio"
                            id="1"
                            value="2"
                            checked={this.state.marks[1] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-creativity"
                            type="radio"
                            id="1"
                            value="3"
                            checked={this.state.marks[1] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-creativity"
                            type="radio"
                            id="1"
                            value="4"
                            checked={this.state.marks[1] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-creativity"
                            type="radio"
                            id="1"
                            value="5"
                            checked={this.state.marks[1] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Sustainable Invention</h6>
                        <small className="form-text text-muted">
                          The project is designed with social, economic and
                          ecological sustainability in mind.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="innov-sustainable"
                            type="radio"
                            id="2"
                            value="1"
                            checked={this.state.marks[2] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-sustainable"
                            type="radio"
                            id="2"
                            value="2"
                            checked={this.state.marks[2] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-sustainable"
                            type="radio"
                            id="2"
                            value="3"
                            checked={this.state.marks[2] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-sustainable"
                            type="radio"
                            id="2"
                            value="4"
                            checked={this.state.marks[2] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="innov-sustainable"
                            type="radio"
                            id="2"
                            value="5"
                            checked={this.state.marks[2] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-group col-sm-6">
                    <legend className="alert alert-dark small">
                      THE MOST TECHNICAL AWARD
                    </legend>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Workmanship</h6>
                        <small className="form-text text-muted">
                          The completed project is systematic, and neat with
                          great attentions to details.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="tech-workmanship"
                            type="radio"
                            id="3"
                            value="1"
                            checked={this.state.marks[3] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-workmanship"
                            type="radio"
                            id="3"
                            value="2"
                            checked={this.state.marks[3] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-workmanship"
                            type="radio"
                            id="3"
                            value="3"
                            checked={this.state.marks[3] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-workmanship"
                            type="radio"
                            id="3"
                            value="4"
                            checked={this.state.marks[3] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-workmanship"
                            type="radio"
                            id="3"
                            value="5"
                            checked={this.state.marks[3] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Design Enhancement</h6>
                        <small className="form-text text-muted">
                          The project demonstrates a significant technological
                          contribution to its field.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="tech-enhancement"
                            type="radio"
                            id="4"
                            value="1"
                            checked={this.state.marks[4] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-enhancement"
                            type="radio"
                            id="4"
                            value="2"
                            checked={this.state.marks[4] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-enhancement"
                            type="radio"
                            id="4"
                            value="3"
                            checked={this.state.marks[4] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-enhancement"
                            type="radio"
                            id="4"
                            value="4"
                            checked={this.state.marks[4] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-enhancement"
                            type="radio"
                            id="4"
                            value="5"
                            checked={this.state.marks[4] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Problem Solving</h6>
                        <small className="form-text text-muted">
                          Student identified a need for the project and the
                          proposed solution addresses the problem completely and
                          overcomes all the technical difficulties.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="tech-solving"
                            type="radio"
                            id="5"
                            value="1"
                            checked={this.state.marks[5] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-solving"
                            type="radio"
                            id="5"
                            value="2"
                            checked={this.state.marks[5] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-solving"
                            type="radio"
                            id="5"
                            value="3"
                            checked={this.state.marks[5] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-solving"
                            type="radio"
                            id="5"
                            value="4"
                            checked={this.state.marks[5] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="tech-solving"
                            type="radio"
                            id="5"
                            value="5"
                            checked={this.state.marks[5] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-group col-sm-6">
                    <legend className="alert alert-dark small">
                      THE MOST MARKETABLE AWARD
                    </legend>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Design Practicality</h6>
                        <small className="form-text text-muted">
                          The project is practical, user-friendly, relevant to
                          current needs of industry and / or is superior to
                          similar design in the market.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="market-practicality"
                            type="radio"
                            id="6"
                            value="1"
                            checked={this.state.marks[6] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-practicality"
                            type="radio"
                            id="6"
                            value="2"
                            checked={this.state.marks[6] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-practicality"
                            type="radio"
                            id="6"
                            value="3"
                            checked={this.state.marks[6] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-practicality"
                            type="radio"
                            id="6"
                            value="4"
                            checked={this.state.marks[6] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-practicality"
                            type="radio"
                            id="6"
                            value="5"
                            checked={this.state.marks[6] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Commercialization Potential</h6>
                        <small className="form-text text-muted">
                          The design has potential to deliver business value,
                          and is ready and appropriate for commercialization.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="market-comm"
                            type="radio"
                            id="7"
                            value="1"
                            checked={this.state.marks[7] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-comm"
                            type="radio"
                            id="7"
                            value="2"
                            checked={this.state.marks[7] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-comm"
                            type="radio"
                            id="7"
                            value="3"
                            checked={this.state.marks[7] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-comm"
                            type="radio"
                            id="7"
                            value="4"
                            checked={this.state.marks[7] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-comm"
                            type="radio"
                            id="7"
                            value="5"
                            checked={this.state.marks[7] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Cost Effectiveness</h6>
                        <small className="form-text text-muted">
                          The cost of production/completion of the project is
                          optimized.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="market-cost"
                            type="radio"
                            id="8"
                            value="1"
                            checked={this.state.marks[8] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-cost"
                            type="radio"
                            id="8"
                            value="2"
                            checked={this.state.marks[8] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-cost"
                            type="radio"
                            id="8"
                            value="3"
                            checked={this.state.marks[8] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-cost"
                            type="radio"
                            id="8"
                            value="4"
                            checked={this.state.marks[8] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="market-cost"
                            type="radio"
                            id="8"
                            value="5"
                            checked={this.state.marks[8] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="form-group col-sm-6">
                    <legend className="alert alert-dark small">
                      THE OVERALL BEST AWARD
                    </legend>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Functionality</h6>
                        <small className="form-text text-muted">
                          Project is working and functions well when
                          demonstrated.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="overall-function"
                            type="radio"
                            id="9"
                            value="1"
                            checked={this.state.marks[9] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-function"
                            type="radio"
                            id="9"
                            value="2"
                            checked={this.state.marks[9] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-function"
                            type="radio"
                            id="9"
                            value="3"
                            checked={this.state.marks[9] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-function"
                            type="radio"
                            id="9"
                            value="4"
                            checked={this.state.marks[9] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-function"
                            type="radio"
                            id="9"
                            value="5"
                            checked={this.state.marks[9] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Posters and Presentation</h6>
                        <small className="form-text text-muted">
                          The presentation is clear, concise and coherence. The
                          student is knowledgeable in the subject matter and
                          state-of-the art technology of the project.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="overall-poster"
                            type="radio"
                            id="10"
                            value="1"
                            checked={this.state.marks[10] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-poster"
                            type="radio"
                            id="10"
                            value="2"
                            checked={this.state.marks[10] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-poster"
                            type="radio"
                            id="10"
                            value="3"
                            checked={this.state.marks[10] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-poster"
                            type="radio"
                            id="10"
                            value="4"
                            checked={this.state.marks[10] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-poster"
                            type="radio"
                            id="10"
                            value="5"
                            checked={this.state.marks[10] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                    <div className="form-group container">
                      <div className="row">
                        <h6>Overall</h6>
                        <small className="form-text text-muted">
                          The overall package and ‘feel-good-factor’ of the
                          project.
                        </small>
                      </div>
                      <div className="row">
                        <div className="col-11">
                          <div className="float-left">(lowest)</div>
                          <div className="float-right">(highest)</div>
                        </div>
                      </div>
                      <div className="row">
                        <label className="col-2 text-right">
                          <input
                            name="overall-overall"
                            type="radio"
                            id="11"
                            value="1"
                            checked={this.state.marks[11] === "1"}
                            onChange={this.updateMark}
                          />
                          {"  "}1
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-overall"
                            type="radio"
                            id="11"
                            value="2"
                            checked={this.state.marks[11] === "2"}
                            onChange={this.updateMark}
                          />
                          {"  "}2
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-overall"
                            type="radio"
                            id="11"
                            value="3"
                            checked={this.state.marks[11] === "3"}
                            onChange={this.updateMark}
                          />
                          {"  "}3
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-overall"
                            type="radio"
                            id="11"
                            value="4"
                            checked={this.state.marks[11] === "4"}
                            onChange={this.updateMark}
                          />
                          {"  "}4
                        </label>
                        <label className="col-2 text-right">
                          <input
                            name="overall-overall"
                            type="radio"
                            id="11"
                            value="5"
                            checked={this.state.marks[11] === "5"}
                            onChange={this.updateMark}
                          />
                          {"  "}5
                        </label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div className="row">
                  <button
                    className="btn-default btn-lg btn-block"
                    type="submit"
                    onClick={() => {
                      alert("Data Submitted!");
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Nominee;
