import React from "react";
import Toggle from "./Toggle";

const Header = (props) => {
  const { view, toggleHandler } = props;
  let subheader;

  if (view === "trophy") {
    subheader = <h2>By Trophy</h2>;
  } else {
    subheader = <h2>By Result</h2>;
  }

  return (
    <header>
      <h1>Trophy Touchers</h1>
      {subheader}
      <Toggle view={view} toggleHandler={toggleHandler} />
    </header>
  );
};

export default Header;
