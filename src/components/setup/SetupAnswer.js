import styles from './SetupAnswer.module.css'
import {useCustomGame} from "../../context/CustomGameContext";

export default function SetupAnswer({allAnswers, allPoints, answer, setAnswers, points, setPoints, answerNum, rdNum}) {


    function changeAnswer(e) {
        const newAnswers = allAnswers.map((a, i) => {
            if (i === answerNum-1) {
                return e;
            }
            return a;
        });
        setAnswers(newAnswers);
    }

    function changePoints(e) {
        const newPoints = allPoints.map((p, i) => {
            if (i === answerNum-1) {
                return e;
            }
            return p;
        });
        setPoints(newPoints);
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