import SetupFastMoneyAnswer from "./SetupFastMoneyAnswer";

export default function SetupFastMoneyAnswers({answers, setAnswers, points, setPoints}) {

    return (
        <div>
            {answers.map((a, i) => {
                return <SetupFastMoneyAnswer answerNum={i} allAnswers={answers} answer={a} points={points[i]} setAnswer={setAnswers} allPoints={points} setPoints={setPoints} key={i}/>
            })}
        </div>
    )
}