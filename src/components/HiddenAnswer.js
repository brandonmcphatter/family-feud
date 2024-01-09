import {useState} from "react";
import {useGame} from "../context/GameContext";

function HiddenAnswer({children, answer, points}) {
    const [hide, setHide] = useState(true);
    const {roundScore, setRoundScore} = useGame();
    function showAnswer() {
        setHide(false);
        setRoundScore(roundScore + points);
    }

    return (
        <div>
            {hide &&
            <div className=' hidden-answer d-flex justify-content-center align-items-center'  onClick={showAnswer}>
                <span className='text-center display-1 fw-bolder'>{children}</span>
            </div>}

            {!hide &&
            <div className=' hidden-answer d-flex justify-content-center align-items-center' onClick={showAnswer}>
                <span className='text-center display-1 fw-bolder'>{answer}{points}</span>
            </div>}

        </div>

    );
}



export default HiddenAnswer;