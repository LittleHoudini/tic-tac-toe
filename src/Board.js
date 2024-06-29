import './Board.css'
import Square from './Square'

function Board({ squares, onClick }) {
  return (
    <div className='board-container'>
      <div className="board-row">
        {squares.slice(0, 3).map((value, index) => (
          <Square key={index} value={value} onClick={() => onClick(index)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(3, 6).map((value, index) => (
          <Square key={index} value={value} onClick={() => onClick(index + 3)} />
        ))}
      </div>
      <div className="board-row">
        {squares.slice(6, 9).map((value, index) => (
          <Square key={index} value={value} onClick={() => onClick(index + 6)} />
        ))}
      </div>
    </div>
  )
}

export default Board;