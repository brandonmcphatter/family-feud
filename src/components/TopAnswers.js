import './TopAnswers.css';
import HiddenAnswer from "./HiddenAnswer";
import {useGame} from "../context/GameContext";


function TopAnswers({rd}) {
    const {gameData} = useGame();
    const answers1 = gameData[rd].answers.slice(0, 4);
    const answers2 = gameData[rd].answers.slice(4, 8);

    return (
        <div className='top-answers d-grid'>
            <div className='answer-area row row-cols-2  '>
                <div className='first-col d-flex flex-column  justify-content-between'>
                    {answers1.map((answer, index) =>
                        (<HiddenAnswer answer={answer.answer} points={answer.points} key={index}>
                            {index + 1}
                        </HiddenAnswer>))}
                </div>


                <div className='second-col d-flex flex-column justify-content-between'>
                    {answers2.map((answer, index) =>
                        (<HiddenAnswer answer={answer.answer} points={answer.points} key={index}>
                            {index + 5}
                        </HiddenAnswer>))}
                </div>
            </div>
        </div>
    )
}

export default TopAnswers;