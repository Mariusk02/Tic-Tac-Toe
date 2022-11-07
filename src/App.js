import { useState } from "react";
import "./App.css";
import Board from "./components/Board";
import Counter from "./components/counter";
import ResetBtn from "./components/ResetBtn";

function App() {
  const WIN_CONDITIN = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const [board, setBoard] = useState(Array(9).fill(null));
  const [xPlaying, setXPlaying] = useState(true);
  const [score, setScore] = useState({ xScore: 0, oScore: 0 });
  const [gameOver, setGameOver] = useState(false);

  const handleBoard = (boxIdx) => {
    const updateBoard = board.map((value, idx) => {
      if (idx === boxIdx) {
        return xPlaying === true ? "X" : "O";
      } else {
        return value;
      }
    });

    const winner = checkWinner(updateBoard);

if(winner){
  if(winner === "O"){
    let {oScore} = score;
    oScore +=1
    setScore({...score, oScore})
  }else{
    let {xScore} = score;
    xScore +=1
    setScore({...score, xScore})
  }
}

    setBoard(updateBoard);
    setXPlaying(!xPlaying);
  };

  const checkWinner = (board) => {
    for (let i = 0; i < WIN_CONDITIN.length; i++) {
      const [x, y, z] = WIN_CONDITIN[i];
      if (board[x] && board[x] === board[y] && board[y] === board[z]) {
        setGameOver(true);
        return board[x];
      }
    }
  };

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  };

  return (
    <div className="general">
      <Counter score={score} xPaying={xPlaying} />
      <Board board={board} onClick={gameOver ? resetBoard : handleBoard} />

      <ResetBtn resetBoard={resetBoard} />
    </div>
  );
}

export default App;
