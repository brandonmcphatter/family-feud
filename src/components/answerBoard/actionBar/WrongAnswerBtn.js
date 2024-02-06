import styles from './WrongAnswerBtn.module.css'
import {useGame} from "../../../context/GameContext";
import React from 'react';
import useSound from "use-sound";
import wrong from '../../../audio/buzzer.mp3'
export default function WrongAnswerBtn({num}) {
    const {strikes, setStrikes, addStrike} = useGame();
    const [play] = useSound(wrong, {volume: 1});
    const removeStrike = () => {
        setStrikes(strikes - 1);
    }

    const wrongAnswer = () => {
        addStrike();
        play();
    }

    return (
        <>
            {strikes >= num && strikes !== 0  &&
            <button onClick={removeStrike}
                    className={`${styles.wrongAnswer} ${styles.on}  mx-2 text-center`}>
                <span>&#10005;</span></button>
            }

            {(strikes ===0 || strikes < num )&&
            <button onClick={wrongAnswer}
                    className={`${styles.wrongAnswer} ${styles.off}  mx-2 text-center`}>
                <span>&#10005;</span></button>
            }

        </>
    );
}

