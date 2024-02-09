import SetupQuestion from "./SetupQuestion";
import SetupAnswer from "./SetupAnswer";

export default function SetupSuddenDeath({question, setQuestions, answers, points, setPoints, setAnswers}) {
    return (
        <>
            <SetupQuestion roundNum={4}/>
            <div className={'align-self-start'}>
                <SetupAnswer answerNum={1}/>
            </div>
        </>

    );
}