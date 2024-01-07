import Answer from "./Answer";
import {useGame} from "../context/GameContext";


function TopAnswers({rd}) {
    const {gameData} = useGame();
    const round1Answers = gameData[rd].answers;
    const round1Points = gameData[rd].points;

    return (
        <div className='d-grid w-75'>

            <div className='row'>
                <Answer answer={gameData[0].answers[0].answer} points={gameData[0].answers[0].points}>1</Answer>
                <Answer answer={gameData[0].answers[4].answer} points={gameData[0].answers[4].points}>5</Answer>
            </div>

            <div className='row'>
                <Answer answer={gameData[0].answers[1].answer} points={gameData[0].answers[1].points}>2</Answer>
                <Answer answer={gameData[0].answers[5].answer} points={gameData[0].answers[5].points}>6</Answer>
            </div>

            <div className='row'>
                <Answer answer={gameData[0].answers[2].answer} points={gameData[0].answers[2].points}>3</Answer>
                <Answer answer={gameData[0].answers[6].answer || ''} points={gameData[0].answers[6].points || ''}>7</Answer>
            </div>

            <div className='row'>
                <Answer answer={gameData[0].answers[3].answer} points={gameData[0].answers[3].points}>4</Answer>
                <Answer answer={gameData[0].answers[7].answer || ''} points={gameData[0].answers[7].points || ''}>8</Answer>
            </div>

        </div>
    )
}

export default TopAnswers;