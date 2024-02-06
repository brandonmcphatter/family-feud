import styles from './RoundScore.module.css';
import {useGame} from "../../context/GameContext";

function RoundScore() {
    const {roundScore} = useGame();
    return (
        <div className={`${styles.scoreArea} pt-3 mb-2 `}>
            <div className={styles.roundScore}>
                <div className='fw-bolder display-1'>{roundScore}</div>
            </div>
        </div>
    );
}

export default RoundScore;