import SetupAnswer from "./SetupAnswer";
import {useCustomGame} from "../../context/CustomGameContext";

export default function SetupAnswerArea({rdNum, answers, points, setAnswers, setPoints}) {
const firstFour = answers.slice(0,4);
const lastFour = answers.slice(4,8);






    return (
        <div className={'d-flex gap-5'}>
            <div className={'d-flex flex-column gap-5'}>
                {firstFour.map((a, i) => {
                    return <SetupAnswer key={i} allAnswers={answers} allPoints={points} answer={a} setAnswers={setAnswers} points={points[i]} setPoints={setPoints} answerNum={i+1} rdNum={rdNum} />
                })}
            </div>

            <div className={'d-flex flex-column gap-5'}>
                {lastFour.map((a, i) => {
                    return <SetupAnswer key={i+5} allAnswers={answers} allPoints={points} answer={a} setAnswers={setAnswers} points={points[i+4]} setPoints={setPoints} answerNum={i+5} rdNum={rdNum} />
                })}
            </div>

        </div>
    )
}



