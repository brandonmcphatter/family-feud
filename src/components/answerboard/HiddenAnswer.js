import {useState} from "react";
import {useGame} from "../../context/GameContext";
import './HiddenAnswer.css';

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
                <div className=' hidden-answer ' onClick={showAnswer}>
                    <div className='inner-box d-flex justify-content-center align-items-center'>
                        <span className='answer-number text-center display-2 fw-bolder'>{children}</span>
                    </div>
                </div>}

            {!hide &&
                <div className=' hidden-answer d-flex justify-content-center align-items-center' >
                    <div className='inner-box d-flex'>
                        <div className='answer-box d-flex align-items-center justify-content-center'>
                            <span className=' answer display-1 fw-bolder'>{answer}</span>
                        </div>
                        <div className='points-box d-flex align-items-center justify-content-center'>
                            <span className='points display-1 fw-bolder'>{points}</span>
                        </div>
                    </div>
                </div>}

        </div>

    );
}


export default HiddenAnswer;