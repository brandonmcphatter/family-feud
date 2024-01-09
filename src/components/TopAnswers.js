import './TopAnswers.css';
import HiddenAnswer from "./HiddenAnswer";


function TopAnswers({rd}) {
    // const {gameData} = useGame();
    // const round1Answers = gameData[rd].answers;
    // const round1Points = gameData[rd].points;

    return (
        <div className='top-answers d-grid'>
            <div className='answer-area row row-cols-2 justify-content-center'>
                <div className='first-col d-flex flex-column justify-content-between'>
                    <HiddenAnswer>1</HiddenAnswer>
                    <HiddenAnswer>2</HiddenAnswer>
                    <HiddenAnswer>3</HiddenAnswer>
                    <HiddenAnswer>4</HiddenAnswer>
                </div>
                <div className='second-col d-flex flex-column justify-content-between'>
                    <HiddenAnswer>5</HiddenAnswer>
                    <HiddenAnswer>6</HiddenAnswer>
                    <HiddenAnswer>7</HiddenAnswer>
                    <HiddenAnswer>8</HiddenAnswer>
                </div>
            </div>
        </div>
    )
}

export default TopAnswers;