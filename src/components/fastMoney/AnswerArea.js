import styles from './AnswerArea.module.css'

export default function AnswerArea({children}) {
    return (
        <div className={styles.fastMoney}>
            {children}
        </div>
    )
}