import styles from './WinScreen.module.css'
import {useGame} from "../context/GameContext";
import {useNavigate} from "react-router";
import {useFastMoney} from "../context/FastMoneyContext";

export default function WinScreen() {
    const {team1} = useGame();
    const {resetFastMoney} = useFastMoney();
    const navigate = useNavigate();
    function exitAndReset() {
        resetFastMoney();
        navigate('/')
    }

    return (
        <div className={`${styles.winScreen} animate__animated animate__slideInUp`}>
            <div className={'d-flex flex-column justify-content-center align-items-center gap-3'}>
                <h1>Team {team1}, congratulations!</h1>
                <div className={`${styles.bigMoney} animate__animated animate__pulse animate__infinite`}>
                    <span className={' '}>$20,000</span>
                </div>
                <div className={styles.moneyBag}>
                    💰💰💰💰💰💰💰
                </div>

                <h4 className={'text-white'}>(not really)</h4>

                <div>
                    <button onClick={exitAndReset}>EXIT</button>
                </div>
            </div>
        </div>
    )
}