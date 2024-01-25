import {useGame} from "../../context/GameContext";

export default function FastMoneyAnswerBlock() {
    const {fastMoneyScore, setFastMoneyScore} = useGame();

    function showPlayerAnswer() {
        console.log('Your Answer')
    }

    function showPointsForAnswer() {
        console.log('Points for Answer')
        setFastMoneyScore(fastMoneyScore + 25);
    }
    return (
        <div className={'fast-money-answer d-flex gap-1 row'}>
            <div onClick={showPlayerAnswer} className={'answer-block col-10 d-flex justify-content-start align-items-center'}>
                <span className={'fw-bolder display-6'}></span>
            </div>
            <div onClick={showPointsForAnswer} className={'points-block col-2 d-flex justify-content-center align-items-center'}>
                <span className={'fw-bolder display-5'}></span>
            </div>
        </div>
    );
}