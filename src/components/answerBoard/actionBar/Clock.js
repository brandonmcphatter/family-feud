import {useEffect, useState} from "react";
import styles from './Clock.module.css'
import {useGame} from "../../../context/GameContext";


export default function Clock() {
    const [time, setTime] = useState(5);
    const [pause, setPause] = useState(true);
    const {addStrike} = useGame();

    // adds strike on 0
    useEffect(() => {
        if (time === 0) addStrike();
        setTime(5);
    }, [time]);

    useEffect(() => {
        let timer;
        if (!pause) {
            timer = setInterval(() => {
                setTime(prevTime => prevTime > 0 ? prevTime - 1 : 0);
            }, 1000);
        }

        return () => {
            clearInterval(timer);
        };
    }, [pause]);

    function startTimer() {
        setPause(!pause);
    }

    function reset() {
        setTime(5);
    }

    return (
        <div className={styles.clock}>
            <button onClick={startTimer} className={styles.clockBtn}><span className={'display-6 fw-bold'}>⏱️ : {time}</span></button>
            <button onClick={reset}>reset</button>
        </div>
    )
}