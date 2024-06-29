import "./App.css";
import Board from "./Board.js";
import { useState } from "react";

function App() {
	const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);


  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) return squares[a];
    }
    return null;
  }

  const winner = calculateWinner(squares);
  const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? 'X' : 'O'}`;

  function handleClick(i) {
    if (winner || squares[i]) return;
    const squaresCopy = [...squares];
    squaresCopy[i] = xIsNext ? 'X' : 'O';
    setSquares(squaresCopy);
    setXIsNext(prev => !prev);
  }



	return (
		<div>
			<Board squares={squares} onClick={handleClick}/>
      <div className="status">{status}</div>
      <button onClick={() => setSquares(Array(9).fill(null))}>Reset Game</button>
		</div>
	);
}

export default App;
