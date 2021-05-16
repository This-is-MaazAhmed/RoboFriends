import React from "react";

function Header({ filterRobo }) {
  return (
    <div>
      <h1 className="f1">ROBOFIRENDS</h1>

      {/* Search Box */}
      <input
        className="pa3 ba br3 b--green bg-light-blue ma2"
        type="seach"
        placeholder="Seach robo"
        onChange={filterRobo}
      />
    </div>
  );
}

export default Header;
