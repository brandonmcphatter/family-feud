import {useGame} from "../../../context/GameContext";
import styles from './ShowQuestionBtn.module.css';

export default function ShowQuestionBtn() {
    const {showQuestion} = useGame();

    return (
            <button className={styles.showQuestion} onClick={showQuestion}>Show ?</button>
    )
}