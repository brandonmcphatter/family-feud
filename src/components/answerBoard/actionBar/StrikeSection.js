import ResetStrikesBtn from "./ResetStrikesBtn";
import WrongAnswerBtn from "./WrongAnswerBtn";
import styles from './StrikeSection.module.css'
import React from "react";
import CounterBtn from "./CounterBtn";
import {useGame} from "../../../context/GameContext";
import useSound from "use-sound";
import wrong from "../../../audio/buzzer.mp3";
import BigRedX from "./BigRedX";

export default function StrikeSection() {
    const {strikes, setStrikes} = useGame();
    const [play] = useSound(wrong, {volume: 1});

    function addStrike() {
        if (strikes < 3) {
        setStrikes(strikes => strikes + 1)
        }
        play();
    }

    function removeStrike() {
        if (strikes > 0) {
            setStrikes(strikes => strikes - 1)
        }
    }

    return (
        <div className={`${styles.strikeSection} col-6 gap-4`}>
            <div className={'d-flex'}>
                <CounterBtn symbol={'-'} onClick={removeStrike}  />
                <WrongAnswerBtn num={1}/>
                <WrongAnswerBtn num={2}/>
                <WrongAnswerBtn num={3}/>
                <CounterBtn symbol={'+'} onClick={addStrike}/>
            </div>
            <BigRedX/>
        </div>
    );
}



