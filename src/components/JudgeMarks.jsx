import React from "react";

const JudgeMarks = props => {
  const { judges, nominees, dept, cat } = props;
  return (
    <div className="container">
      <h5 className="btn btn-danger">Marks per Judge</h5>
      <h5 className="lead mb-3">
        {dept}: [{cat}]
      </h5>
      {judges &&
        judges.map(judge => {
          let totals = [];
          return (
            <div key={judge.id}>
              <div className="alert alert-dark rounded table-responsive-md">
                {judge.name}
              </div>
              <table className="table table-bordered" width="100%">
                <tbody>
                  <tr>
                    <th rowSpan="2" width="14%">
                      STUDENT
                    </th>
                    <th width="21%" colSpan="4">
                      THE MOST INNOVATIVE AWARD
                    </th>
                    <th width="21%" colSpan="4">
                      THE MOST TECHNICAL AWARD
                    </th>
                    <th width="21%" colSpan="4">
                      THE MOST MARKETABLE AWARD
                    </th>
                    <th width="21%" colSpan="4">
                      THE OVERALL BEST AWARD
                    </th>
                    <th rowSpan="2" width="4%">
                      TOTAL
                    </th>
                  </tr>
                  <tr>
                    <td width="5.25%">Design Novelty</td>
                    <td width="5.25%">Design Creativity / Innovativeness</td>
                    <td width="5.25%">Sustainable Invention</td>
                    <td width="5.25%">
                      <strong>Sum</strong>
                    </td>
                    <td width="5.25%">Workmanship</td>
                    <td width="5.25%">Design Enhancement</td>
                    <td width="5.25%">Problem Solving</td>
                    <td width="5.25%">
                      <strong>Sum</strong>
                    </td>
                    <td width="5.25%">Design Practicality</td>
                    <td width="5.25%">Commercialization Potential</td>
                    <td width="5.25%">Cost Effectiveness</td>
                    <td width="5.25%">
                      <strong>Sum</strong>
                    </td>
                    <td width="5.25%">Functionality</td>
                    <td width="5.25%">Posters and Presentation</td>
                    <td width="5.25%">Overall</td>
                    <td width="5.25%">
                      <strong>Sum</strong>
                    </td>
                  </tr>
                  {nominees
                    .filter(nominee =>
                      nominee.judges.find(j => j["name"] === judge.name)
                    )
                    .map(n => {
                      let m = n.judges.find(j => j.name === judge.name).marks;

                      let total = { ...n };
                      delete total.judges;
                      const innovative_total =
                        Number(m[0]) + Number(m[1]) + Number(m[2]);
                      const technical_total =
                        Number(m[3]) + Number(m[4]) + Number(m[5]);
                      const marketable_total =
                        Number(m[6]) + Number(m[7]) + Number(m[8]);
                      const overall_total =
                        Number(m[9]) + Number(m[10]) + Number(m[11]);
                      const total_points = m.reduce(
                        (t, v) => Number(t) + Number(v)
                      );

                      Object.defineProperty(total, "innovative_total", {
                        value: innovative_total
                      });
                      Object.defineProperty(total, "technical_total", {
                        value: technical_total
                      });
                      Object.defineProperty(total, "marketable_total", {
                        value: marketable_total
                      });
                      Object.defineProperty(total, "overall_total", {
                        value: overall_total
                      });
                      Object.defineProperty(total, "total_points", {
                        value: total_points
                      });

                      totals.push(total);

                      return (
                        <tr key={n.id}>
                          <td width="14%">{n.name}</td>
                          <td width="5.25%">{m[0]}</td>
                          <td width="5.25%">{m[1]}</td>
                          <td width="5.25%">{m[2]}</td>
                          <td width="5.25%">
                            <strong>{innovative_total}</strong>
                          </td>
                          <td width="5.25%">{m[3]}</td>
                          <td width="5.25%">{m[4]}</td>
                          <td width="5.25%">{m[5]}</td>
                          <td width="5.25%">
                            <strong>{technical_total}</strong>
                          </td>
                          <td width="5.25%">{m[6]}</td>
                          <td width="5.25%">{m[7]}</td>
                          <td width="5.25%">{m[8]}</td>
                          <td width="5.25%">
                            <strong>{marketable_total}</strong>
                          </td>
                          <td width="5.25%">{m[9]}</td>
                          <td width="5.25%">{m[10]}</td>
                          <td width="5.25%">{m[11]}</td>
                          <td width="5.25%">
                            <strong>{overall_total}</strong>
                          </td>
                          <td width="4%">
                            <strong>{total_points}</strong>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>

              <div>
                <div className="card m-2 p-2">
                  <table className="table-striped">
                    <tbody>
                      <tr>
                        <th width="5%">#</th>
                        <th width="80%">
                          Ranking based on the most innovative award
                        </th>
                        <th width="15%">Points</th>
                      </tr>
                      {totals
                        .sort(
                          (a, b) =>
                            Number(b.innovative_total) -
                            Number(a.innovative_total)
                        )
                        .map((t, i) => (
                          <tr key={t.id}>
                            <td width="5%">{++i}</td>
                            <td>{t.name}</td>
                            <td>{t.innovative_total}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="card m-2 p-2">
                  <table className="table-striped">
                    <tbody>
                      <tr>
                        <th width="5%">#</th>
                        <th width="80%">
                          Ranking based on the most technical award
                        </th>
                        <th width="15%">Points</th>
                      </tr>
                      {totals
                        .sort(
                          (a, b) =>
                            Number(b.technical_total) -
                            Number(a.technical_total)
                        )
                        .map((t, i) => (
                          <tr key={t.id}>
                            <td width="5%">{++i}</td>
                            <td>{t.name}</td>
                            <td>{t.technical_total}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="card m-2 p-2">
                  <table className="table-striped">
                    <tbody>
                      <tr>
                        <th width="5%">#</th>
                        <th width="80%">
                          Ranking based on the most marketable award
                        </th>
                        <th width="15%">Points</th>
                      </tr>
                      {totals
                        .sort(
                          (a, b) =>
                            Number(b.marketable_total) -
                            Number(a.marketable_total)
                        )
                        .map((t, i) => (
                          <tr key={t.id}>
                            <td width="5%">{++i}</td>
                            <td>{t.name}</td>
                            <td>{t.marketable_total}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="card m-2 p-2">
                  <table className="table-striped">
                    <tbody>
                      <tr>
                        <th width="5%">#</th>
                        <th width="80%">
                          Ranking based on the best overall award
                        </th>
                        <th width="15%">Points</th>
                      </tr>
                      {totals
                        .sort(
                          (a, b) =>
                            Number(b.overall_total) - Number(a.overall_total)
                        )
                        .map((t, i) => (
                          <tr key={t.id}>
                            <td width="5%">{++i}</td>
                            <td>{t.name}</td>
                            <td>{t.overall_total}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
                <div className="card m-2 p-2">
                  <table className="table-striped">
                    <tbody>
                      <tr>
                        <th width="5%">#</th>
                        <th width="80%">Ranking based on the total points</th>
                        <th width="15%">Points</th>
                      </tr>
                      {totals
                        .sort(
                          (a, b) =>
                            Number(b.total_points) - Number(a.total_points)
                        )
                        .map((t, i) => (
                          <tr key={t.id}>
                            <td width="5%">{++i}</td>
                            <td>{t.name}</td>
                            <td>{t.total_points}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>

                <hr />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default JudgeMarks;
