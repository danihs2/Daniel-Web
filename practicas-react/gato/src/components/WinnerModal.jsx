import { Square } from './Square.jsx';

export function WinnerModal( {winner, restartGame}){
    const winnerText = winner === false ? 'Empate' : 'Gano el jugador ' + winner + '!';
    if (winner === null) {
        return null;
    }
    return (
        <section className='winner'>
            <h2> {winnerText} </h2>
            <header className='win'>
                { winner && <Square>{winner}</Square> }
            </header>
            <footer>
                <button onClick={restartGame}>
                    Reiniciar
                </button>
            </footer>
        </section>
    )
}