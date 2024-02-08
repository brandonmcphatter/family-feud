import styles from './SetupQuestion.module.css'
import {useCustomGame} from "../../context/CustomGameContext";

export default function SetupQuestion({rdNum}) {
    const {customQuestions, setCustomQuestions} = useCustomGame();

    const changeQuestion = (e) => {
        const newQuestions = customQuestions.map((q, i) => {
            if (i === rdNum) {
                return e;
            }
            return q;
        });
        setCustomQuestions(newQuestions);
    }

    return (

        <div className={styles.questionWrapper}>
            <label className={styles.qLabel} htmlFor={`round-${rdNum+1}`}>Question: </label>
            <input className={styles.qInput} type="text" id={`round-${rdNum+1}`} value={customQuestions[rdNum]} onChange={event => changeQuestion(event.target.value)}/>
        </div>
    );
}

