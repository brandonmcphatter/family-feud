import {useGame} from "../../context/GameContext";
import styles from "./TopAnswers.module.css";
import HiddenAnswer from "./HiddenAnswer";
import EmptyAnswer from "./EmptyAnswer";

export default function TopAnswersSD({rd}) {
    const {gameData} = useGame();
    const theAnswer = gameData[rd].answer;
    const points = gameData[rd].points;

    return (
        <div className={styles.topAnswers}>
            <div className='answer-area row row-cols-2  '>
                <div className='first-col d-flex flex-column  justify-content-between'>
                    <HiddenAnswer answer={theAnswer} points={points}>1</HiddenAnswer>
                    <EmptyAnswer/>
                    <EmptyAnswer/>
                    <EmptyAnswer/>
                </div>

                <div className='second-col d-flex flex-column justify-content-between'>
                    <EmptyAnswer/><EmptyAnswer/><EmptyAnswer/><EmptyAnswer/>
                </div>
            </div>
        </div>

)
}