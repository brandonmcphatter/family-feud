import {useGame} from "../context/GameContext";
import './GameBoard.css';

function GameBoard() {
    const {team1, team2} = useGame();
    return (
        <div className='gameBoard '>
            <div className='container w-50 d-flex justify-content-between'>
            <h1 className='text-white'>{team1}</h1>
            <h1 className='text-white'>{team2}</h1>
            </div>
        </div>
    );
}

export default GameBoard;