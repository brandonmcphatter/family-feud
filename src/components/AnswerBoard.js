import RoundScore from "./RoundScore";
import TeamScore from "./TeamScore";
import TopAnswers from "./TopAnswers";
import RoundQuestion from "./RoundQuestion";
import ActionBar from "./ActionBar";
import {useGame} from "../context/GameContext";

function AnswerBoard() {
    const {t1Score, setT1Score, t2Score, setT2Score, roundScore} = useGame();

    return (
        <div >
            <RoundScore/>
            <div className='d-flex justify-content-between align-content-center'>
                <TeamScore teamScore={t1Score} setScore={setT1Score} roundScore={roundScore}/>
                <TopAnswers rd={0}/>
                <TeamScore teamScore={t2Score} setScore={setT2Score} roundScore={roundScore}/>
            </div>
            <RoundQuestion/>
            <ActionBar/>
        </div>
    );
}

export default AnswerBoard;