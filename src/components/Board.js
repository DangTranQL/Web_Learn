import React from "react";
import Square from "./Square";

export default function Board({ squares, handleClick }) {
  return (
    <div className="board">
      <div>
        {/* {
          for (let i=0; i<3; i++){
            return {<div className="board-row">"Your code here"</div>}
          }
        } */}
        <div className="board-row">
          <Square value={squares[0]} toClick={() => handleClick(0)}/>
          <Square value={squares[1]} toClick={() => handleClick(1)}/>
          <Square value={squares[2]} toClick={() => handleClick(2)}/>
        </div>
        <div className="board-row">
          <Square value={squares[3]} toClick={() => handleClick(3)}/>
          <Square value={squares[4]} toClick={() => handleClick(4)}/>
          <Square value={squares[5]} toClick={() => handleClick(5)}/>
        </div>
        <div className="board-row">
          <Square value={squares[6]} toClick={() => handleClick(6)}/>
          <Square value={squares[7]} toClick={() => handleClick(7)}/>
          <Square value={squares[8]} toClick={() => handleClick(8)}/>
        </div>
      </div>
    </div>
  );
}
