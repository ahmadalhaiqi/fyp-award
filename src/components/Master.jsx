import React, { Component } from "react";

class Master extends Component {
  totals = [];

  constructor(props) {
    super(props);

    this.state = {
      nominees: [],
      master: {
        ce_structure_best_winner: {},
        ce_highway_innovative_winner: {},
        ce_highway_technical_winner: {},
        ce_highway_marketable_winner: {},
        ce_water_innovative_winner: {},
        ce_water_technical_winner: {},
        ce_water_marketable_winner: {},
        ce_overall_winner: {},
        me_modelling_best_winner: {},
        me_design_innovative_winner: {},
        me_design_technical_winner: {},
        me_design_marketable_winner: {},
        me_experimental_innovative_winner: {},
        me_experimental_technical_winner: {},
        me_experimental_marketable_winner: {},
        me_overall_winner: {},
        eeep_software_innovative_winner: {},
        eeep_software_technical_winner: {},
        eeep_software_marketable_winner: {},
        eeep_system_innovative_winner: {},
        eeep_system_technical_winner: {},
        eeep_system_marketable_winner: {},
        eeep_research_innovative_winner: {},
        eeep_research_technical_winner: {},
        eeep_research_marketable_winner: {},
        eeep_overall_winner: {}
      }
    };
  }

  componentDidMount() {
    fetch("/api/nominees")
      .then(res => res.json())
      .then(nominees => this.setState({ nominees }));

    fetch("/api/master")
      .then(res => res.json())
      .then(master => this.setState({ master }));
  }

  render() {
    const { master } = this.state;

    this.state.nominees.forEach(nominee => {
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
    });

    return (
      <div className="container-fluid">
        <h5 className="btn btn-danger">
          Master Results Sheet - FYP AWARD Semester 1 2018/19, 25 September 2018
        </h5>

        <table className="table table-bordered table-responsive-md m-2">
          <thead className="thead-dark text-center">
            <tr>
              <th className="bg-info" colSpan="5">
                Civil Engineering
              </th>
            </tr>
            <tr>
              <th width="20%">Category</th>
              <th width="20%">Student's Name</th>
              <th width="35%">Project Title</th>
              <th width="20%">Supervisor</th>
              <th width="5%">Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Highway & Geotechnical Category
              </th>
            </tr>
            <tr>
              <th>The Most Innovative Winner</th>
              <td>{master.ce_highway_innovative_winner.name}</td>
              <td>{master.ce_highway_innovative_winner.title}</td>
              <td>{master.ce_highway_innovative_winner.supervisor}</td>
              <td>{master.ce_highway_innovative_winner.innovative_total}</td>
            </tr>
            <tr>
              <th>The Most Technical Winner</th>
              <td>{master.ce_highway_technical_winner.name}</td>
              <td>{master.ce_highway_technical_winner.title}</td>
              <td>{master.ce_highway_technical_winner.supervisor}</td>
              <td>{master.ce_highway_technical_winner.technical_total}</td>
            </tr>
            <tr>
              <th>The Most Marketable Winner</th>
              <td>{master.ce_highway_marketable_winner.name}</td>
              <td>{master.ce_highway_marketable_winner.title}</td>
              <td>{master.ce_highway_marketable_winner.supervisor}</td>
              <td>{master.ce_highway_marketable_winner.marketable_total}</td>
            </tr>

            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Water & Waste-water Category
              </th>
            </tr>
            <tr>
              <th>The Most Innovative Winner</th>
              <td>{master.ce_water_innovative_winner.name}</td>
              <td>{master.ce_water_innovative_winner.title}</td>
              <td>{master.ce_water_innovative_winner.supervisor}</td>
              <td>{master.ce_water_innovative_winner.innovative_total}</td>
            </tr>
            <tr>
              <th>The Most Technical Winner</th>
              <td>{master.ce_water_technical_winner.name}</td>
              <td>{master.ce_water_technical_winner.title}</td>
              <td>{master.ce_water_technical_winner.supervisor}</td>
              <td>{master.ce_water_technical_winner.technical_total}</td>
            </tr>
            <tr>
              <th>The Most Marketable Winner</th>
              <td>{master.ce_water_marketable_winner.name}</td>
              <td>{master.ce_water_marketable_winner.title}</td>
              <td>{master.ce_water_marketable_winner.supervisor}</td>
              <td>{master.ce_water_marketable_winner.marketable_total}</td>
            </tr>

            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Structure & Materials Category
              </th>
            </tr>
            <tr>
              <th>Best Structure & Materials Project</th>
              <td>{master.ce_structure_best_winner.name}</td>
              <td>{master.ce_structure_best_winner.title}</td>
              <td>{master.ce_structure_best_winner.supervisor}</td>
              <td>{master.ce_structure_best_winner.innovative_total}</td>
            </tr>

            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Best Overall Civil Engineering Project
              </th>
            </tr>

            {this.totals
              .filter(t => t.dept === "CE")
              .sort((a, b) => Number(b.total_points) - Number(a.total_points))
              .map(
                (t, i) =>
                  i < 1 && (
                    <tr key={t.id}>
                      <th>Best of the best</th>
                      <td>{t.name}</td>
                      <td>{t.title}</td>
                      <td>{t.supervisor}</td>
                      <td>{t.total_points}</td>
                    </tr>
                  )
              )}
          </tbody>
        </table>

        <table className="table table-bordered table-responsive-md m-2">
          <thead className="thead-dark text-center">
            <tr>
              <th className="bg-info" colSpan="5">
                Mechanical Engineering
              </th>
            </tr>
            <tr>
              <th width="20%">Category</th>
              <th width="20%">Student's Name</th>
              <th width="35%">Project Title</th>
              <th width="20%">Supervisor</th>
              <th width="5%">Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Design & Analysis Category
              </th>
            </tr>
            <tr>
              <th>The Most Innovative Winner</th>
              <td>{master.me_design_innovative_winner.name}</td>
              <td>{master.me_design_innovative_winner.title}</td>
              <td>{master.me_design_innovative_winner.supervisor}</td>
              <td>{master.me_design_innovative_winner.innovative_total}</td>
            </tr>
            <tr>
              <th>The Most Technical Winner</th>
              <td>{master.me_design_technical_winner.name}</td>
              <td>{master.me_design_technical_winner.title}</td>
              <td>{master.me_design_technical_winner.supervisor}</td>
              <td>{master.me_design_technical_winner.technical_total}</td>
            </tr>
            <tr>
              <th>The Most Marketable Winner</th>
              <td>{master.me_design_marketable_winner.name}</td>
              <td>{master.me_design_marketable_winner.title}</td>
              <td>{master.me_design_marketable_winner.supervisor}</td>
              <td>{master.me_design_marketable_winner.marketable_total}</td>
            </tr>

            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Experimental Research Category
              </th>
            </tr>
            <tr>
              <th>The Most Innovative Winner</th>
              <td>{master.me_experimental_innovative_winner.name}</td>
              <td>{master.me_experimental_innovative_winner.title}</td>
              <td>{master.me_experimental_innovative_winner.supervisor}</td>
              <td>
                {master.me_experimental_innovative_winner.innovative_total}
              </td>
            </tr>
            <tr>
              <th>The Most Technical Winner</th>
              <td>{master.me_experimental_technical_winner.name}</td>
              <td>{master.me_experimental_technical_winner.title}</td>
              <td>{master.me_experimental_technical_winner.supervisor}</td>
              <td>{master.me_experimental_technical_winner.technical_total}</td>
            </tr>
            <tr>
              <th>The Most Marketable Winner</th>
              <td>{master.me_experimental_marketable_winner.name}</td>
              <td>{master.me_experimental_marketable_winner.title}</td>
              <td>{master.me_experimental_marketable_winner.supervisor}</td>
              <td>
                {master.me_experimental_marketable_winner.marketable_total}
              </td>
            </tr>

            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Modelling & Simulation Category
              </th>
            </tr>
            <tr>
              <th>Best Modelling & Simulation Project</th>
              <td>{master.me_modelling_best_winner.name}</td>
              <td>{master.me_modelling_best_winner.title}</td>
              <td>{master.me_modelling_best_winner.supervisor}</td>
              <td>{master.me_modelling_best_winner.innovative_total}</td>
            </tr>

            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Best Overall Mechanical Engineering Project
              </th>
            </tr>

            {this.totals
              .filter(t => t.dept === "ME")
              .sort((a, b) => Number(b.total_points) - Number(a.total_points))
              .map(
                (t, i) =>
                  i < 1 && (
                    <tr key={t.id}>
                      <th>Best of the best</th>
                      <td>{t.name}</td>
                      <td>{t.title}</td>
                      <td>{t.supervisor}</td>
                      <td>{t.total_points}</td>
                    </tr>
                  )
              )}
          </tbody>
        </table>

        <table className="table table-bordered table-responsive-md m-2">
          <thead className="thead-dark text-center">
            <tr>
              <th className="bg-info" colSpan="5">
                EE, EP and CC Engineering
              </th>
            </tr>
            <tr>
              <th width="20%">Category</th>
              <th width="20%">Student's Name</th>
              <th width="35%">Project Title</th>
              <th width="20%">Supervisor</th>
              <th width="5%">Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Software Development Category
              </th>
            </tr>
            <tr>
              <th>The Most Innovative Winner</th>
              <td>{master.eeep_software_innovative_winner.name}</td>
              <td>{master.eeep_software_innovative_winner.title}</td>
              <td>{master.eeep_software_innovative_winner.supervisor}</td>
              <td>{master.eeep_software_innovative_winner.innovative_total}</td>
            </tr>
            <tr>
              <th>The Most Technical Winner</th>
              <td>{master.eeep_software_technical_winner.name}</td>
              <td>{master.eeep_software_technical_winner.title}</td>
              <td>{master.eeep_software_technical_winner.supervisor}</td>
              <td>{master.eeep_software_technical_winner.technical_total}</td>
            </tr>
            <tr>
              <th>The Most Marketable Winner</th>
              <td>{master.eeep_software_marketable_winner.name}</td>
              <td>{master.eeep_software_marketable_winner.title}</td>
              <td>{master.eeep_software_marketable_winner.supervisor}</td>
              <td>{master.eeep_software_marketable_winner.marketable_total}</td>
            </tr>

            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                System Design Category
              </th>
            </tr>
            <tr>
              <th>The Most Innovative Winner</th>
              <td>{master.eeep_system_innovative_winner.name}</td>
              <td>{master.eeep_system_innovative_winner.title}</td>
              <td>{master.eeep_system_innovative_winner.supervisor}</td>
              <td>{master.eeep_system_innovative_winner.innovative_total}</td>
            </tr>
            <tr>
              <th>The Most Technical Winner</th>
              <td>{master.eeep_system_technical_winner.name}</td>
              <td>{master.eeep_system_technical_winner.title}</td>
              <td>{master.eeep_system_technical_winner.supervisor}</td>
              <td>{master.eeep_system_technical_winner.technical_total}</td>
            </tr>
            <tr>
              <th>The Most Marketable Winner</th>
              <td>{master.eeep_system_marketable_winner.name}</td>
              <td>{master.eeep_system_marketable_winner.title}</td>
              <td>{master.eeep_system_marketable_winner.supervisor}</td>
              <td>{master.eeep_system_marketable_winner.marketable_total}</td>
            </tr>

            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Research & Development Category
              </th>
            </tr>
            <tr>
              <th>The Most Innovative Winner</th>
              <td>{master.eeep_research_innovative_winner.name}</td>
              <td>{master.eeep_research_innovative_winner.title}</td>
              <td>{master.eeep_research_innovative_winner.supervisor}</td>
              <td>{master.eeep_research_innovative_winner.innovative_total}</td>
            </tr>
            <tr>
              <th>The Most Technical Winner</th>
              <td>{master.eeep_research_technical_winner.name}</td>
              <td>{master.eeep_research_technical_winner.title}</td>
              <td>{master.eeep_research_technical_winner.supervisor}</td>
              <td>{master.eeep_research_technical_winner.technical_total}</td>
            </tr>
            <tr>
              <th>The Most Marketable Winner</th>
              <td>{master.eeep_research_marketable_winner.name}</td>
              <td>{master.eeep_research_marketable_winner.title}</td>
              <td>{master.eeep_research_marketable_winner.supervisor}</td>
              <td>{master.eeep_research_marketable_winner.marketable_total}</td>
            </tr>

            <tr>
              <th colSpan="5" className="text-center lead bg-warning">
                Best Overall Electrical/Electronics Engineering Project
              </th>
            </tr>

            {this.totals
              .filter(t => t.dept === "EEEP")
              .sort((a, b) => Number(b.total_points) - Number(a.total_points))
              .map(
                (t, i) =>
                  i < 1 && (
                    <tr key={t.id}>
                      <th>Best of the best</th>
                      <td>{t.name}</td>
                      <td>{t.title}</td>
                      <td>{t.supervisor}</td>
                      <td>{t.total_points}</td>
                    </tr>
                  )
              )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Master;
