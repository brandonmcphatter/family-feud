import styles from './EmptyAnswer.module.css';

function EmptyAnswer() {
    return (
        <div className={styles.hiddenAnswer}>
            <div className={styles.innerBox}>
                <span className=' text-center display-2 fw-bolder'></span>
            </div>
        </div>
    );
}

export default EmptyAnswer;
