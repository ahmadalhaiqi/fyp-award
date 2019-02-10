import React from "react";
import { NavLink } from "react-router-dom";

const TempList = props => {
  const nominees = props.nominees;
  return (
    <div>
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
    </div>
  );
};

export default TempList;
