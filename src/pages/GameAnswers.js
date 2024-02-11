import {useGame} from "../context/GameContext";

export default function GameAnswers() {
    const {ogGameData} = useGame();
    const questions = [ogGameData[0].question, ogGameData[1].question, ogGameData[2].question, ogGameData[3].question, ogGameData[4].question]
    const r1Answers = ogGameData[0].answers;
    const r2Answers = ogGameData[1].answers;
    const r3Answers = ogGameData[2].answers;
    const r4Answers = ogGameData[3].answers;
    const suddenDeathAnswers = ogGameData[4].answers;
    const fastMoneyQuestions = ogGameData[5].map((a, i) => {
        return a.question
    });
    const fastMoneyAnswers = ogGameData[5].map((a, i) => {
        return a.answers
    });
    const fastMoneyAnswersSpread = fastMoneyAnswers.split;
    console.log(fastMoneyAnswersSpread)

    return (
        <div>
            <h1>Stock Game Answers</h1>
            <h2>Questions</h2>
            <div>
                {questions.map((q,i)=>{
                    return(
                        <h3>Question {i+1}: {q}</h3>
                    )
                })}
            </div>
            <h2>Round 1</h2>
            <div>
                {r1Answers.map((a, i) => {
                    if (a.answer !== ''){
                        return <h3>Answer: {a.answer} - Points: {a.points}</h3>
                    } else return;
                })}
            </div>
            <h2>Round 2</h2>
            <div>
                {r2Answers.map((a, i) => {
                    if (a.answer !== ''){
                        return <h3>Answer: {a.answer} - Points: {a.points}</h3>
                    } else return;
                })}
            </div>
            <h2>Round 3</h2>
            <div>
                {r3Answers.map((a, i) => {
                    if (a.answer !== ''){
                        return <h3>Answer: {a.answer} - Points: {a.points}</h3>
                    } else return;
                })}
            </div>
            <h2>Round 4</h2>
            <div>
                {r4Answers.map((a, i) => {
                    if (a.answer !== ''){
                        return <h3>Answer: {a.answer} - Points: {a.points}</h3>
                    } else return;
                })}
            </div>
            <h2>Sudden Death</h2>
            <div>
                <h3>Answer: {suddenDeathAnswers[0].answer}</h3>
            </div>
            <h2>Fast Money</h2>
            <div>
                {fastMoneyQuestions.map((q, i) => {
                    return (
                        <h3>Question {i + 1}: {q}</h3>
                    )
                })}
            </div>
            <div>
                {fastMoneyAnswers.map((a, i) => {
                    return (
                        <h3>Answers: {a}</h3>
                    )
                })}
            </div>
        </div>
    );
}

