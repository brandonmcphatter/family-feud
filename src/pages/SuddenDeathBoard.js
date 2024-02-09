import styles from './SuddenDeathBoard.module.css'
import RoundScore from "../components/answerBoard/RoundScore";
import TeamScore from "../components/answerBoard/TeamScore";
import RoundQuestion from "../components/answerBoard/RoundQuestion";
import ActionBar from "../components/ActionBar";
import {useGame} from "../context/GameContext";
import TopAnswersSD from "../components/answerBoard/TopAnswersSD";

function SuddenDeathBoard() {
    const {t1Score, setT1Score, t2Score, setT2Score, roundScore} = useGame();


    return (
        <div className={styles.answerBoard}>
            <div className={'animate__animated animate__slideInDown'}>
                <RoundScore/>
            </div>

            <div className='d-flex justify-content-evenly align-content-center'>

                <div className={'align-self-center animate__animated animate__zoomInLeft'}>
                    <TeamScore teamScore={t1Score} setScore={setT1Score} roundScore={roundScore}/>
                </div>

                <div className={'animate__animated animate__fadeInUpBig'}>
                    <TopAnswersSD rd={3}/>

                </div>

                <div className={'align-self-center animate__animated animate__zoomInRight'}>
                    <TeamScore teamScore={t2Score} setScore={setT2Score} roundScore={roundScore}/>
                </div>
            </div>

            <RoundQuestion/>

            <div className={'animate__animated animate__rotateInUpLeft animate__slow'}>
                <ActionBar/>
            </div>
        </div>
    )
}

export default SuddenDeathBoard;

