import {useNavigate} from "react-router";
import {useFastMoney} from "../../context/FastMoneyContext";
import styles from './FastMoneyToolbar.module.css'
import Player1Modal from "./Player1Modal";
import Player2Modal from "./Player2Modal";

export default function FastMoneyToolbar() {


    const {setp1Modal, setp2Modal, showAnswers, setShowAnswers} = useFastMoney();


    const navigate = useNavigate();

    function toHome() {
        navigate('/')
    }

    function openPlayer1() {
        setp1Modal(true);
    }


    function openPlayer2() {
        setp2Modal(true);
    }

    function toggleAnswers() {
        setShowAnswers(!showAnswers);
    }

    return (
        <>
            <div className={`${styles.fmTools} mt-5 gap-4`}>
                <button onClick={openPlayer1} className={styles.fmButton}>Player 1</button>
                <button onClick={openPlayer2} className={styles.fmButton}>Player 2</button>
                <button onClick={toggleAnswers} className={styles.fmButton}>Show / Hide</button>
                <button onClick={()=> navigate('/game/scoreboard')} className={styles.fmButton}>Back</button>
                <button onClick={toHome} className={styles.fmButton}>End Game</button>
            </div>

            <Player1Modal/>
            <Player2Modal/>


        </>
    );
}