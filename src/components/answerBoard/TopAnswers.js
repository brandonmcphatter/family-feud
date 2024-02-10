import styles from './TopAnswers.module.css';
import HiddenAnswer from "./HiddenAnswer";
import {useGame} from "../../context/GameContext";
import EmptyAnswer from "./EmptyAnswer";


function TopAnswers({rd, multiplier}) {
    const {gameData} = useGame();
    const answers1 = gameData[rd].answers.slice(0, 4);
    const answers2 = gameData[rd].answers.slice(4, 8);

    return (
        <div className={styles.topAnswers}>
            <div className='d-flex justify-content-center gap-3'>
                <div className={styles.firstCol}>
                    {answers1.map((answer, index) => {
                        if (answer.answer === '') {
                            return <EmptyAnswer/>
                        } else return <HiddenAnswer answer={answer.answer}
                                                    points={answer.points}
                                                    rd={rd}
                                                    multiplier={multiplier}
                                                    key={index}>
                            {index + 1}
                        </HiddenAnswer>
                    })}
                </div>


                <div className={styles.secondCol}>
                    {answers2.map((answer, index) => {
                        if (answer.answer === '') {
                            return <EmptyAnswer/>
                        } else return <HiddenAnswer answer={answer.answer}
                                                    points={answer.points}
                                                    rd={rd}
                                                    multiplier={multiplier}
                                                    key={index}>
                            {index + 5}
                        </HiddenAnswer>
                    })}
                </div>
            </div>
        </div>
    )
}

export default TopAnswers;