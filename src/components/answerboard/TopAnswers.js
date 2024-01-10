import './TopAnswers.css';
import HiddenAnswer from "./HiddenAnswer";
import {useGame} from "../../context/GameContext";
import EmptyAnswer from "./EmptyAnswer";


function TopAnswers({rd}) {
    const {gameData} = useGame();
    const answers1 = gameData[rd].answers.slice(0, 4);
    const answers2 = gameData[rd].answers.slice(4, 8);
    const first = answers1.length < 4;
    const second = answers1.length < 3;
    const third = answers1.length < 2;
    const fourth = answers1.length === 0;
    const oneBlank = answers2.length < 4;
    const twoBlanks = answers2.length < 3;
    const threeBlanks = answers2.length < 2;
    const fourBlanks = answers2.length === 0;
    return (
        <div className='top-answers d-grid'>
            <div className='answer-area row row-cols-2  '>
                <div className='first-col d-flex flex-column  justify-content-between'>
                    {answers1.map((answer, index) =>
                        (<HiddenAnswer answer={answer.answer} points={answer.points} key={index}>
                            {index + 1}
                        </HiddenAnswer>))}
                    {first && <EmptyAnswer/>}
                    {second && <EmptyAnswer/>}
                    {third && <EmptyAnswer/>}
                    {fourth && <EmptyAnswer/>}
                </div>


                <div className='second-col d-flex flex-column justify-content-between'>
                    {answers2.map((answer, index) =>
                        (<HiddenAnswer answer={answer.answer} points={answer.points} key={index}>
                            {index + 5}
                        </HiddenAnswer>))}

                    {oneBlank && <EmptyAnswer/>}
                    {twoBlanks && <EmptyAnswer/>}
                    {threeBlanks && <EmptyAnswer/>}
                    {fourBlanks && <EmptyAnswer/>}
                </div>
            </div>
        </div>
    )
}

export default TopAnswers;