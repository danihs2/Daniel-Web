import { useState } from 'react'
import './App.css'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS } from './constants.js'
import { checkWinnerFrom, checkEndGame } from './logic/board.js'
import { WinnerModal } from './components/WinnerModal.jsx'

function App() {
  const [board, setBoard] = useState( () => {
    const savedBoard = window.localStorage.getItem('board');
    if (savedBoard) {
      return JSON.parse(savedBoard);
    }
    return Array(9).fill(null)
  });
  const [turn, setTurn] = useState(() => {
      const savedTurn = window.localStorage.getItem('turn');
      return savedTurn ?? TURNS.X;
    }
  );
  const [winner, setWinner] = useState(null); // Null empate, false no hay ganador, 

  const updateBoard = (index) => {
    if (board[index] || winner) return; // Si ya hay algo en la casilla o ya hay un ganador, no hacer nada
    
    const newBoard = [...board];  // Copia del tablero
    // POR QUE HACE UN NEWBOARD??? PORQUE NO SE PUEDE MODIFICAR EL ESTADO DIRECTAMENTE YA QUE REACT NO LO PERMITE
    newBoard[index] = turn;       // Modificar la copia
    setBoard(newBoard);           // Actualizar el estado
  
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Guardar partida
    window.localStorage.setItem('board', JSON.stringify(newBoard));
    window.localStorage.setItem('turn', newTurn);
    // Verificar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard);
    if (newWinner) {
      confetti();
      setWinner(newWinner); // Es asincrono por lo que no se actualiza inmediatamente
    }else if (checkEndGame(newBoard)) { // Si no hay ganador y no hay espacios vacios
      setWinner(false);
    }
  }

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
    window.localStorage.removeItem('board');
    window.localStorage.removeItem('turn');
  }

  return (
    <main className='board'>
      <h1>Gato</h1>
      <button onClick={restartGame}> Reinciar Juego </button>
      <section className='game'>
        {
          board.map((cell, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {cell} {/* Si es null, no se muestra nada, si no, se muestra el valor de la celda */}
              </Square>
            )
          })
        }
      </section>

      <section className='turn'>
        <Square
          isSelected={turn === TURNS.X}
        >
          {TURNS.X}
        </Square>
        <Square
          isSelected={turn === TURNS.O}
        >
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} restartGame={restartGame}/>
    </main>
  )
}

export default App
