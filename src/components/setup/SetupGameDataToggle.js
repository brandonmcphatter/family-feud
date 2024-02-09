import styles from './SetupGameDataToggle.module.css'
import {useGame} from "../../context/GameContext";

export default function SetupGameDataToggle() {
    const {gameChoice, setGameChoice, setGameData, ogGameData, userGameData} = useGame();

    function changeGameChoice() {
        if (gameChoice === true) {
            setGameChoice(false)
            setGameData(ogGameData)
        } else {
            setGameChoice(true);
            setGameData(userGameData)
        }
        return gameChoice;
    }

    return (
        <div className={gameChoice ? styles.toggleBoxOn : styles.toggleBoxOff}>
            <label htmlFor="gameChoice"><span className={'h4'}>USE YOUR CUSTOM GAME DATA ?</span></label>
            <input className={styles.gameToggle} type={'checkbox'} onChange={changeGameChoice} checked={gameChoice}/>
        </div>
    );
}

