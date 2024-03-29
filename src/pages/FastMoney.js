import AnswerArea from "../components/fastMoney/AnswerArea";
import AnswerColumns from "../components/fastMoney/AnswerColumns";
import FastMoneyToolbar from "../components/fastMoney/FastMoneyToolbar";
import styles from './FastMoney.module.css'
import {useNavigate} from "react-router";
import {useFastMoney} from "../context/FastMoneyContext";
import winOutro from '../audio/winnerOutro.mp3'
import useSound from "use-sound";

export default function FastMoney() {
    const {fastMoneyScore} = useFastMoney();
    const navigate = useNavigate();
    const [playOutro] = useSound(winOutro, {volume: 1})

    function showWinner() {
        navigate('/game/final')
        playOutro();
    }

    if (fastMoneyScore > 199) {

        setTimeout(showWinner, 1000);
    }

    return (
        <div className={`${styles.fastMoney} pt-4 animate__animated `}>
            <div className={'pt-3 animate__animated animate__slideInDown animate__slow'}>
                <AnswerArea>
                    <div className={'mt-5 animate__animated animate__fadeIn animate__slower'}>
                        <AnswerColumns/>
                    </div>
                </AnswerArea>
            </div>
            <div className={'animate__animated animate__rotateInUpLeft animate__slow'}>
                <FastMoneyToolbar/>
            </div>
        </div>
    );
}


