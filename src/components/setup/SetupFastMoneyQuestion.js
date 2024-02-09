import {useCustomGame} from "../../context/CustomGameContext";
import styles from './SetupFastMoneyQuestion.module.css';


export default function SetupFastMoneyQuestion({changeQuestionNum, key, qNum, question}) {
    const {fastMoneyQuestions, setFastMoneyQuestions} = useCustomGame();

    function changeFMQuestion(e){
        const newQuestions = fastMoneyQuestions.map((q, i) => {
            if (i === qNum-1) {
                return e;
            } else return q;
        });
        setFastMoneyQuestions(newQuestions);
    }
    return (
        <div className={'d-flex justify-content-center align-items-center'} onClick={() => changeQuestionNum(qNum)}>
            <label className={styles.qLabel} htmlFor="">Q{qNum}:</label>
            <input className={styles.qInput} type={'text'} value={question} onChange={(e)=> changeFMQuestion(e.target.value)}/>
        </div>
    )
}