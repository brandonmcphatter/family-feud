import SetupAnswers from "./SetupAnswers";
import SetupSuddenDeath from "./SetupSuddenDeath";
import styles from './SetupMain.module.css'
import {useGame} from "../../context/GameContext";
import {useCustomGame} from "../../context/CustomGameContext";

export default function SetupMain({roundDisplay}) {
    const {customQuestions, setCustomQuestions,
        round1Answers, setRound1Answers, round1Points,
        setRound1Points, round2Answers,
        setRound2Answers, round2Points,
        setRound2Points, round3Answers,
        setRound3Answers, round3Points,
        setRound3Points, round4Answers,
        setRound4Answers, round4Points,
        setRound4Points, suddenDeathAnswer,
        setSuddenDeathAnswer, suddenDeathPoints,
        setSuddenDeathPoints, fastMoneyQuestions,
        setFastMoneyQuestions, fastMoneyAnswers1,
        setFastMoneyAnswers1, fastMoneyAnswers2,
        setFastMoneyAnswers2, fastMoneyAnswers3,
        setFastMoneyAnswers3, fastMoneyAnswers4,
        setFastMoneyAnswers4, fastMoneyAnswers5,
        setFastMoneyAnswers5, fastMoneyPoints1,
        setFastMoneyPoints1, fastMoneyPoints2,
        setFastMoneyPoints2, fastMoneyPoints3,
        setFastMoneyPoints3, fastMoneyPoints4,
        setFastMoneyPoints4, fastMoneyPoints5, setFastMoneyPoints5, }  = useCustomGame();

    const {gameChoice} = useGame();
    return (

        <div className={'animate__animated animate__bounceInUp animate__slow '}>
            <div className={gameChoice ? styles.mainSetupOn : styles.mainSetupOff}>
                {roundDisplay === 0 && <SetupAnswers question={customQuestions[0]} rdNum={0}/>}
                {roundDisplay === 1 && <SetupAnswers question={customQuestions[1]} rdNum={1}/>}
                {roundDisplay === 2 && <SetupAnswers question={customQuestions[2]} rdNum={2}/>}
                {roundDisplay === 3 && <SetupAnswers question={customQuestions[3]} rdNum={3}/>}
                {roundDisplay === 4 && <SetupSuddenDeath rdNum={4}/>}
                {roundDisplay === 5 && <SetupFastMoney rdNum={5}/>}
                <div>
                    {roundDisplay === 0 && <h4>Round 1</h4>}
                    {roundDisplay === 1 && <h4>Round 2</h4>}
                    {roundDisplay === 2 && <h4>Round 3</h4>}
                    {roundDisplay === 3 && <h4>Round 4</h4>}
                    {roundDisplay === 4 && <h4>Sudden Death</h4>}
                    {roundDisplay === 5 && <h4>Fast Money</h4>}
                </div>
            </div>
        </div>
    )
}


function SetupFastMoney() {
    return (
        <div>Fast Money Setup</div>
    );
}




