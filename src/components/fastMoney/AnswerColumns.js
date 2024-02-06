import FastMoneyAnswerBlock from "./FastMoneyAnswerBlock";
import FastMoneyPoints from "./FastMoneyPoints";
import {useFastMoney} from "../../context/FastMoneyContext";
import styles from './AnswerColumns.module.css'

export default function AnswerColumns() {
    const {player1Answers, player2Answers, player1Points, player2Points} = useFastMoney();

    return (
        <div className={`${styles.answerColumns} gap-3`}>
            <div className={'col-6 d-flex flex-column gap-3'}>
                {player1Answers.map((answer, i,) => <FastMoneyAnswerBlock answer={player1Answers[i]} points={player1Points[i]} key={i}/>)}
                <div className={'my-5 d-flex justify-content-end'}>
                    <FastMoneyPoints/>
                </div>
            </div>
            <div className={'col-6 d-flex flex-column gap-3'}>
                {player2Answers.map((answer, i) => <FastMoneyAnswerBlock answer={player2Answers[i]} points={player2Points[i]} key={i}/>)}
            </div>
        </div>
    )
}