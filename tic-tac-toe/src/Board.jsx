import Square from "./Square";
import "./Board.css";
import { useReducer, useState } from "react";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] == squares[b] && squares[a] == squares[c]) {
      return squares[a];
    }
  }

  return null;
}

const initialState = {
  squares: Array(9).fill(null),
  xIsNext: true,
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "click":
      const { squares, xIsNext } = state;
      const { index, winner } = action.payload;
      const nextState = JSON.parse(JSON.stringify(state));
      console.log(action);

      if (squares[index] || winner) {
        return state;
      }

      if (xIsNext) {
        nextState.squares[index] = "X";
      } else {
        nextState.squares[index] = "O";
      }

      nextState.xIsNext = !nextState.xIsNext;

      return nextState;

    default:
      break;
  }
  return state;
};

export default function Board() {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  function handleClick(i) {
    const winner = calculateWinner(state.squares);
    dispatch({ type: "click", payload: { index: i, winner: winner } });
  }

  return (
    <div className="board">
      <p>Winner is: {calculateWinner(state.squares)}</p>
      <div className="board-row">
        <Square
          value={state.squares[0]}
          onSquareClick={() => handleClick(0)}
        ></Square>
        <Square
          value={state.squares[1]}
          onSquareClick={() => handleClick(1)}
        ></Square>
        <Square
          value={state.squares[2]}
          onSquareClick={() => handleClick(2)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={state.squares[3]}
          onSquareClick={() => handleClick(3)}
        ></Square>
        <Square
          value={state.squares[4]}
          onSquareClick={() => handleClick(4)}
        ></Square>
        <Square
          value={state.squares[5]}
          onSquareClick={() => handleClick(5)}
        ></Square>
      </div>
      <div className="board-row">
        <Square
          value={state.squares[6]}
          onSquareClick={() => handleClick(6)}
        ></Square>
        <Square
          value={state.squares[7]}
          onSquareClick={() => handleClick(7)}
        ></Square>
        <Square
          value={state.squares[8]}
          onSquareClick={() => handleClick(8)}
        ></Square>
      </div>
    </div>
  );
}
