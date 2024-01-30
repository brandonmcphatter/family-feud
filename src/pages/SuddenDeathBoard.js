import EmptyAnswer from "../components/answerBoard/EmptyAnswer";
import HiddenAnswer from "../components/answerBoard/HiddenAnswer";
import RoundScore from "../components/answerBoard/RoundScore";
import TeamScore from "../components/answerBoard/TeamScore";
import RoundQuestion from "../components/answerBoard/RoundQuestion";
import ActionBar from "../components/ActionBar";
import {useGame} from "../context/GameContext";

function SuddenDeathBoard({rd}) {
    const {gameData, t1Score, setT1Score, t2Score, setT2Score, roundScore} = useGame();
    const theAnswer = gameData[rd].answer;

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
                    <div className='top-answers d-grid'>
                        <div className='answer-area row row-cols-2  '>
                            <div className='first-col d-flex flex-column  justify-content-between'>
                                <HiddenAnswer answer={theAnswer}>1</HiddenAnswer>
                                <EmptyAnswer/>
                                <EmptyAnswer/>
                                <EmptyAnswer/>
                            </div>

                            <div className='second-col d-flex flex-column justify-content-between'>
                                <EmptyAnswer/><EmptyAnswer/><EmptyAnswer/><EmptyAnswer/>
                            </div>
                        </div>
                    </div>
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

