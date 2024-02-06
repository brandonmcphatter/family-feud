import RoundScore from "../components/answerBoard/RoundScore";
import {useGame} from "../context/GameContext";
import TeamScore from "../components/answerBoard/TeamScore";
import TopAnswers from "../components/answerBoard/TopAnswers";
import RoundQuestion from "../components/answerBoard/RoundQuestion";
import styles from './AnswerBoard.module.css';
import ActionBar from "../components/answerBoard/actionBar/ActionBar";

function AnswerBoard({rd}) {
    const {t1Score, setT1Score, t2Score, setT2Score, roundScore} = useGame();

    return (
        <div className={`${styles.answerBoard} animate__animated animate__fadeIn`}>

            <div className={'animate__animated animate__slideInDown'}>
                <RoundScore/>
            </div>

            <div className='d-flex justify-content-evenly align-content-center'>
                <div className={'align-self-center animate__animated animate__zoomInLeft'}>
                    <TeamScore teamScore={t1Score} setScore={setT1Score} roundScore={roundScore}/>
                </div>

                <div className={'animate__animated animate__fadeInUpBig'}>
                    <TopAnswers rd={rd}/>
                </div>

                <div className={'align-self-center animate__animated animate__zoomInRight'}>
                    <TeamScore teamScore={t2Score} setScore={setT2Score} roundScore={roundScore}/>
                </div>
            </div>

            <RoundQuestion/>

            <div className={'animate__animated animate__rotateInUpLeft animate__slow mt-4'}>
                <ActionBar/>
            </div>
        </div>
    );
}

export default AnswerBoard;