import SetupAnswers from "./SetupAnswers";
import styles from './SetupMain.module.css'
import {useGame} from "../../context/GameContext";
import {useCustomGame} from "../../context/CustomGameContext";
import SetupFastMoney from "./SetupFastMoney";

export default function SetupMain({roundDisplay}) {
    const {
        round1Answers, setRound1Answers, round1Points,
        setRound1Points, round2Answers,
        setRound2Answers, round2Points,
        setRound2Points, round3Answers,
        setRound3Answers, round3Points,
        setRound3Points, round4Answers,
        setRound4Answers, round4Points,
        setRound4Points, suddenDeathAnswer,
        setSuddenDeathAnswer, suddenDeathPoints,
        setSuddenDeathPoints
    } = useCustomGame();
    const {gameChoice} = useGame();

    return (

        <div className={'animate__animated animate__bounceInUp animate__slow '}>
            <div>
                {/*SPACE FOR DISPLAYING WHAT ROUND IS BEING EDITED*/}
            </div>

            <div className={gameChoice ? styles.mainSetupOn : styles.mainSetupOff}>
                {roundDisplay === 0 &&
                    <SetupAnswers answers={round1Answers} points={round1Points} setPoints={setRound1Points}
                                  setAnswers={setRound1Answers} rdNum={0}/>}
                {roundDisplay === 1 &&
                    <SetupAnswers answers={round2Answers} points={round2Points} setPoints={setRound2Points}
                                  setAnswers={setRound2Answers} rdNum={1}/>}
                {roundDisplay === 2 &&
                    <SetupAnswers answers={round3Answers} points={round3Points} setPoints={setRound3Points}
                                  setAnswers={setRound3Answers} rdNum={2}/>}
                {roundDisplay === 3 &&
                    <SetupAnswers answers={round4Answers} points={round4Points} setPoints={setRound4Points}
                                  setAnswers={setRound4Answers} rdNum={3}/>}
                {roundDisplay === 4 && <SetupAnswers answers={suddenDeathAnswer} points={suddenDeathPoints}
                                                     setPoints={setSuddenDeathPoints} setAnswers={setSuddenDeathAnswer}
                                                     rdNum={4}/>}
                {roundDisplay === 5 && <SetupFastMoney rdNum={5}/>}
            </div>
        </div>
    )
}



















