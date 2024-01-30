import RoundScore from "../components/answerBoard/RoundScore";
import {useGame} from "../context/GameContext";
import TeamScore from "../components/answerBoard/TeamScore";
import TopAnswers from "../components/answerBoard/TopAnswers";
import RoundQuestion from "../components/answerBoard/RoundQuestion";
import ActionBar from "../components/ActionBar";


function AnswerBoard({rd}) {
    const {t1Score, setT1Score, t2Score, setT2Score, roundScore} = useGame();

    return (
        <div>
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

            <div className={'animate__animated animate__rotateInUpLeft animate__slow'}>
                <ActionBar/>
            </div>
        </div>
    );
}

export default AnswerBoard;