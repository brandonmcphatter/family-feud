import './Answer.css';
import {useState} from "react";
import {useGame} from "../context/GameContext";


function Answer({children, answer, points}) {
    const {roundScore, setRoundScore} = useGame();
    const [hide, setHide] = useState(true);

    function toggleAnswer() {
        setHide(false);
        setRoundScore(roundScore + points);
    }
    return (
        <div className='answer col-6 w-50 d-flex justify-content-center align-items-center'
        onClick={toggleAnswer}>
            <h1 className='text-center fw-bolder display-3'>{hide ? children : answer + points}</h1>
        </div>
    );
}

export default Answer;