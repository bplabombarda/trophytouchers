import React from "react";
import Year from "./Year";

const Table = (props) => {
  const { data, view } = props;

  return (
    <ul id="data-list">
      <li className="data-header">
        <div>year</div>
        <div>{view === "result" ? "winner" : "Wales"}</div>
        <div>{view === "result" ? "loser" : "Campbell"}</div>
      </li>
      {data.map((matchup) => (
        <Year key={matchup.year} data={matchup} view={view} />
      ))}
    </ul>
  );
};

export default Table;
