import EmptyAnswer from "../components/answerboard/EmptyAnswer";
import HiddenAnswer from "../components/answerboard/HiddenAnswer";
import RoundScore from "../components/answerboard/RoundScore";
import TeamScore from "../components/answerboard/TeamScore";
import RoundQuestion from "../components/answerboard/RoundQuestion";
import ActionBar from "../components/ActionBar";
import {useGame} from "../context/GameContext";


function SuddenDeathBoard({rd}) {
    const {gameData, t1Score, setT1Score, t2Score, setT2Score, roundScore} = useGame();
    const theAnswer = gameData[rd].answer;

    return (
        <div>
            <RoundScore/>
            <div className='d-flex justify-content-evenly align-content-center'>
                <TeamScore teamScore={t1Score} setScore={setT1Score} roundScore={roundScore}/>
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
                <TeamScore teamScore={t2Score} setScore={setT2Score} roundScore={roundScore}/>
            </div>
            <RoundQuestion/>
            <ActionBar/>
        </div>
    )
}

export default SuddenDeathBoard;

