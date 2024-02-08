import SetupAnswer from "./SetupAnswer";
import {useCustomGame} from "../../context/CustomGameContext";

export default function SetupAnswerArea({rdNum}) {
    const {round2Answers, round2Points} = useCustomGame();


    return (
        <div className={'d-flex gap-5'}>
            <div className={'d-flex flex-column gap-5'}>
                <SetupAnswer answerNum={1} answer={round2Answers[0]} points={round2Points[0]}/>
                <SetupAnswer answerNum={2} answer={round2Answers[1]} points={round2Points[1]}/>
                <SetupAnswer answerNum={3} answer={round2Answers[2]} points={round2Points[2]}/>
                <SetupAnswer answerNum={4} answer={round2Answers[3]} points={round2Points[3]}/>
            </div>
            <div className={'d-flex flex-column gap-5'}>
                <SetupAnswer answerNum={5} answer={round2Answers[4]} points={round2Points[4]}/>
                <SetupAnswer answerNum={6} answer={round2Answers[5]} points={round2Points[5]}/>
                <SetupAnswer answerNum={7} answer={round2Answers[6]} points={round2Points[6]}/>
                <SetupAnswer answerNum={8} answer={round2Answers[7]} points={round2Points[7]}/>
            </div>
        </div>
    )
}