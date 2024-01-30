import styles from './SetupAnswer.module.css'

export default function SetupAnswer({answerNum}) {
    return (
        <div className={styles.answerWrapper}>
            <label className={styles.aLabel} htmlFor={`answer-${answerNum}`}>A{answerNum}:</label>
            <input className={styles.aInput} type="text" id={`answer-${answerNum}`}/>
            <label className={styles.pLabel} htmlFor={`points-${answerNum}`}>P{answerNum}:</label>
            <input className={styles.pInput} type="number" id={`points-${answerNum}`}/>
        </div>
    )
}