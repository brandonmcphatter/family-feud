import SetupQuestion from "./SetupQuestion";
import SetupAnswerArea from "./SetupAnswerArea";

export default function SetupAnswers({rdNum, question, answers, points, setQuestions, setAnswers, setPoints}) {
    return (
        <>
            <SetupQuestion question={question} setQuestions={setQuestions} rdNum={rdNum}/>
            <SetupAnswerArea answers={answers} setAnswers={setAnswers} points={points} setPoints={setPoints} rdNum={rdNum}/>
        </>
    );
}

