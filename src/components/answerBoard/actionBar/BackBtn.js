import {useNavigate} from "react-router";
import {useGame} from "../../../context/GameContext";
import styles from './BackBtn.module.css'

export default function BackBtn() {
    const {setRoundScore} = useGame();
    const navigate = useNavigate();

    function toScoreBoard() {
        setRoundScore(0);
        navigate('/game/scoreboard')
    }
    return (
        <button onClick={toScoreBoard} className={`${styles.backBtn}`}>Back &larr;</button>
    );
}

