import styles from './SetupAnswer.module.css'
import {useCustomGame} from "../../context/CustomGameContext";

export default function SetupAnswer({answer, points, answerNum, rdNum}) {

    const {customGameData, setRound1Answers} = useCustomGame();

    function changeAnswer(e) {
        const newAnswers = customGameData[rdNum].answers.map((a, i) => {
            if (i === answerNum-1) {
                return {answer: e, points: a.points};
            }
            return {answer: a.answer, points: a.points};
        });
        setRound1Answers(newAnswers);
    }

    function changePoints(e) {
        const newPoints = customGameData[rdNum].answers.map((p, i) => {
            if (i === answerNum-1) {
                return e;
            }
            return p;
        });
        setRound1Answers(newPoints);
    }

    return (
        <div className={styles.answerWrapper}>
            <label className={styles.aLabel} htmlFor={answer}>A{answerNum}:</label>
            <input className={styles.aInput} type="text" id={answer} value={answer}  onChange={(e)=> changeAnswer(e.target.value)}/>
            <label className={styles.pLabel} htmlFor={points}>P{answerNum}:</label>
            <input className={styles.pInput} type="number" id={points} value={points} onChange={(e) => changePoints(e.target.value)}/>
        </div>
    )
}