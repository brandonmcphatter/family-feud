import {useGame} from "../../../context/GameContext";
import styles from './ResetStrikesBtn.module.css'

export default function ResetStrikesBtn() {
    const {strikes, setStrikes} = useGame();

    function resetStrikes() {
        setStrikes(0);
    }

    return (
        <button className={`${styles.resetBtn} ${strikes > 0 ? styles.on : styles.off}`} onClick={resetStrikes}>CLEAR</button>
    );
}

