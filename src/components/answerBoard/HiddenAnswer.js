import {useState} from "react";
import {useGame} from "../../context/GameContext";
import styles from './HiddenAnswer.module.css';
import useSound from "use-sound";
import correct from '../../audio/family-feud-good-answer.mp3'

function HiddenAnswer({children, answer, points}) {
    const [hide, setHide] = useState(true);
    const {roundScore, setRoundScore} = useGame();
    const [play] = useSound(correct, {volume: 1});
    function showAnswer() {
        setHide(false);
        setRoundScore(roundScore + Number(points));
        play();
    }

    return (
        <div>
            {hide &&
                <div className={styles.hiddenAnswer} onClick={showAnswer}>
                    <div className={styles.innerBox}>
                        <span className={`display-2 ${styles.answerNumber}`}>{children}</span>
                    </div>
                </div>}

            {!hide &&
                <div className={` ${styles.hiddenAnswer} d-flex justify-content-center align-items-center animate__animated animate__flipInX`} >
                    <div className={`${styles.innerBox} d-flex`}>
                        <div className={styles.answerBox}>
                            <span className={`${styles.answer} display-1`}>{answer}</span>
                        </div>
                        <div className={styles.pointsBox}>
                            <span className={`display-1 ${styles.points}`}>{points}</span>
                        </div>
                    </div>
                </div>}

        </div>

    );
}


export default HiddenAnswer;