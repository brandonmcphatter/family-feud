import RoundScore from "../components/answerBoard/RoundScore";
import {useGame} from "../context/GameContext";
import TeamScore from "../components/answerBoard/TeamScore";
import TopAnswers from "../components/answerBoard/TopAnswers";
import RoundQuestion from "../components/answerBoard/RoundQuestion";
import ActionBar from "../components/ActionBar";


function AnswerBoard({rd}) {
    const {t1Score, setT1Score, t2Score, setT2Score, roundScore} = useGame();

    return (
        <div >
            <RoundScore/>
            <div className='d-flex justify-content-evenly align-content-center'>
                <TeamScore teamScore={t1Score} setScore={setT1Score} roundScore={roundScore}/>
                <TopAnswers rd={rd}/>
                <TeamScore teamScore={t2Score} setScore={setT2Score} roundScore={roundScore}/>
            </div>
            <RoundQuestion/>
            <ActionBar/>
        </div>
    );
}

export default AnswerBoard;