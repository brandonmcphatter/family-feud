import {useState} from "react";
import styles from './SetupGameDataToggle.module.css'





export default function SetupGameDataToggle() {
    const [gameChoice, setGameChoice] = useState(false);

    function changeGameChoice() {
        if (gameChoice === true){
            setGameChoice(false)
        } else setGameChoice(true);
        console.log(gameChoice)
        return gameChoice;
    }
    return (
        <div className={gameChoice ? styles.toggleBoxOn : styles.toggleBoxOff}>
            <label htmlFor="gameChoice"><span className={'h4'}>USE YOUR CUSTOM GAME DATA ?</span></label>
            <input className={styles.gameToggle} type={'checkbox'} onClick={changeGameChoice} checked={gameChoice}/>
        </div>
    );
}

