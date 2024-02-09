import SetupFastMoneyAnswers from "./SetupFastMoneyAnswers";
import {useCustomGame} from "../../context/CustomGameContext";
import styles from './SetupFastMoneyContainerAnswers.module.css'
export default function SetupFastMoneyContainerAnswers({questionNum}) {
    const {
            fastMoneyAnswers1, setFastMoneyAnswers1,
            fastMoneyAnswers2, setFastMoneyAnswers2,
            fastMoneyAnswers3, setFastMoneyAnswers3,
            fastMoneyAnswers4, setFastMoneyAnswers4,
            fastMoneyAnswers5, setFastMoneyAnswers5,
            fastMoneyPoints1, setFastMoneyPoints1,
            fastMoneyPoints2, setFastMoneyPoints2,
            fastMoneyPoints3, setFastMoneyPoints3,
            fastMoneyPoints4, setFastMoneyPoints4,
            fastMoneyPoints5, setFastMoneyPoints5,
    } = useCustomGame();
    return (
        <div className={styles.fmContainer}>
            {questionNum === 1 &&
                <SetupFastMoneyAnswers answers={fastMoneyAnswers1} setAnswers={setFastMoneyAnswers1} points={fastMoneyPoints1} setPoints={setFastMoneyPoints1}/>}
            {questionNum === 2 &&
                <SetupFastMoneyAnswers answers={fastMoneyAnswers2} setAnswers={setFastMoneyAnswers2} points={fastMoneyPoints2} setPoints={setFastMoneyPoints2}/>}
            {questionNum === 3 &&
                <SetupFastMoneyAnswers answers={fastMoneyAnswers3} setAnswers={setFastMoneyAnswers3} points={fastMoneyPoints3} setPoints={setFastMoneyPoints3}/>}
            {questionNum === 4 &&
                <SetupFastMoneyAnswers answers={fastMoneyAnswers4} setAnswers={setFastMoneyAnswers4} points={fastMoneyPoints4} setPoints={setFastMoneyPoints4}/>}
            {questionNum === 5 &&
                <SetupFastMoneyAnswers answers={fastMoneyAnswers5} setAnswers={setFastMoneyAnswers5} points={fastMoneyPoints5} setPoints={setFastMoneyPoints5}/>}
        </div>
    )
}