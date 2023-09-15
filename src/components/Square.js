import React from "react";

function Square({value, toClick}) {
  return (
    <button className={"square"} onClick={toClick}>
      {value}
    </button>
  );
}

export default Square;
