import RoundScore from "./RoundScore";
import TeamScore from "./TeamScore";
import TopAnswers from "./TopAnswers";
import {useGame} from "../context/GameContext";

function AnswerBoard() {
    const {t1Score, setT1Score, t2Score, setT2Score, roundScore} = useGame();

    return (
        <div >
            <RoundScore/>
            <div className='d-flex justify-content-between align-content-center'>
                <TeamScore teamScore={t1Score} setScore={setT1Score} roundScore={roundScore}/>
                <TopAnswers/>
                <TeamScore teamScore={t2Score} setScore={setT2Score} roundScore={roundScore}/>
            </div>
            <RoundQuestion/>
            <ActionBar/>
        </div>
    );
}

function RoundQuestion() {
    const {roundQuestionHidden, gameData} = useGame();

    console.log(gameData);
    return (
        <div className='roundQuestion mt-5'>
            <h1 className='text-center'>{roundQuestionHidden ? '' : gameData[0].question} </h1>
        </div>
    );
}

function ActionBar() {
    const {showQuestion} = useGame();


    return (
        <div className='actionBar mt-5 d-flex justify-content-center align-items-center'>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <button className='btn btn-primary btn-lg' onClick={showQuestion}>Start Round</button>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <button className='btn btn-success btn-lg'>Clock: ⏱️</button>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center '>
                <button className='btn btn-danger btn-lg'>X</button>
                <button className='btn btn-danger btn-lg mx-5'>X</button>
                <button className='btn btn-danger btn-lg'>X</button>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <button className='btn btn-warning btn-lg'>End Game</button>
            </div>
        </div>
    );
}


export default AnswerBoard;