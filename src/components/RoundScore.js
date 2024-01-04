import './RoundScore.css';
import {useGame} from "../context/GameContext";

function RoundScore() {
    const {roundScore} = useGame();
    return (
        <div className='scoreArea mt-3 mb-2 d-flex justify-content-center align-items-center'>
            <div className='roundScore d-flex justify-content-center align-items-center'>
                <div className='fw-bolder display-1'>{roundScore}</div>
            </div>
        </div>
    );
}

export default RoundScore;