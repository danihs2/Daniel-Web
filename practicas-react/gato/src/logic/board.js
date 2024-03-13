import { WINNER_COMBOS } from '../constants';

export const checkWinnerFrom = (boardToCheck) => {
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&               // Si hay algo en la posicion
        boardToCheck[a] === boardToCheck[b] &&  // Si el valor de la posicion a es igual al valor de la posicion b
        boardToCheck[a] === boardToCheck[c]     // Si el valor de la posicion a es igual al valor de la posicion c
        ) {
        return boardToCheck[a];
      }
    }
    return null; // Si no se cumple la condicion, no hay ganador
}

export const checkEndGame = (boardToCheck) => {
  return boardToCheck.every(cell => cell !== null); // Si todas las celdas tienen algo, no hay espacios vacios y retorna true
}