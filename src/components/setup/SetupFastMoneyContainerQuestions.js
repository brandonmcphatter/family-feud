import SetupFastMoneyQuestion from "./SetupFastMoneyQuestion";
import styles from './SetupFastMoneyContainerQuestions.module.css'
import {useCustomGame} from "../../context/CustomGameContext";

export default function SetupFastMoneyContainerQuestions({setQuestionNum}) {

    const {fastMoneyQuestions} = useCustomGame();

    return (
        <div className={styles.fmContainer}>
            {fastMoneyQuestions.map((q, i) => {
                return <SetupFastMoneyQuestion question={fastMoneyQuestions[i]} qNum={i+1} key={i + 1} changeQuestionNum={()=> setQuestionNum(i+1)}/>
            })}
        </div>
    )
}