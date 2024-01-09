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
           <div className='col-6'>
                <div className='hidden-answer' onClick={toggleAnswer}>
                    {hide ? children : answer}
                </div>
            </div>

    );
}

export default Answer;