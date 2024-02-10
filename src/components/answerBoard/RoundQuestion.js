import {useGame} from "../../context/GameContext";
import styles from './RoundQuestion.module.css';

function RoundQuestion({rd}) {
    const {roundQuestionHidden, gameData} = useGame();

    return (
        <div className={`${styles.roundQuestion} my-3`}>
            <h1 className='text-center text-white'>{roundQuestionHidden ? '' : gameData[rd].question} </h1>
        </div>
    );
}

export default RoundQuestion;