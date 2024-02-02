import styles from './WrongAnswerBtn.module.css'
import {useGame} from "../../../context/GameContext";

export default function WrongAnswerBtn({num}) {
    const {strikes, setStrikes, addStrike} = useGame();

    const removeStrike = () => {
        setStrikes(strikes - 1);
    }

    return (
        <>
            {strikes >= num && strikes !== 0  &&
            <button onClick={removeStrike}
                    className={`${styles.wrongAnswer} ${styles.on}  mx-2 text-center`}>
                <span>&#10005;</span></button>
            }

            {(strikes ===0 || strikes < num )&&
            <button onClick={addStrike}
                    className={`${styles.wrongAnswer} ${styles.off}  mx-2 text-center`}>
                <span>&#10005;</span></button>
            }

        </>
    );
}

