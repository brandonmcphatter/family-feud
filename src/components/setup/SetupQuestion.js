import styles from './SetupQuestion.module.css'

export default function SetupQuestion({roundNum}) {
    return (
        <div className={styles.questionWrapper}>
            <label className={styles.qLabel} htmlFor={`round-${roundNum}`}>Question: </label>
            <input className={styles.qInput} type="text" id={`round-${roundNum}`}/>
        </div>
    );
}

