import './GameBoard.css';
import AnswerBoard from "./answerboard/AnswerBoard";

function GameBoard({children}) {
    return (
        <div >
            <AnswerBoard/>
        </div>
    );
}

export default GameBoard;