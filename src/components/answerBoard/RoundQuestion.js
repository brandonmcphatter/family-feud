import {useGame} from "../../context/GameContext";
import styles from './RoundQuestion.module.css';

function RoundQuestion() {
    const {roundQuestionHidden, gameData} = useGame();

    return (
        <div className={`${styles.roundQuestion} my-3`}>
            <h1 className='text-center text-white'>{roundQuestionHidden ? '' : gameData[0].question} </h1>
        </div>
    );
}

export default RoundQuestion;