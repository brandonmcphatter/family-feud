import {useGame} from "../context/GameContext";
import './RoundQuestion.css';

function RoundQuestion() {
    const {roundQuestionHidden, gameData} = useGame();

    return (
        <div className='roundQuestion d-flex justify-content-center align-items-center '>
            <h1 className='text-center'>{roundQuestionHidden ? '' : gameData[0].question} </h1>
        </div>
    );
}

export default RoundQuestion;