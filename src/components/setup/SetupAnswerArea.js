import SetupAnswer from "./SetupAnswer";
import {useCustomGame} from "../../context/CustomGameContext";

export default function SetupAnswerArea({rdNum}) {
const {round1Answers, round1Points} = useCustomGame();


    return (
        <div className={'d-flex gap-5'}>
            <div className={'d-flex flex-column gap-5'}>

                <SetupAnswer rdNum={rdNum} answerNum={1} answer={round1Answers[0]} points={round1Points[0]}/>
                <SetupAnswer rdNum={rdNum} answerNum={2} answer={round1Answers[1]} points={round1Points[1]}/>
                <SetupAnswer rdNum={rdNum} answerNum={3} answer={round1Answers[2]} points={round1Points[2]}/>
                <SetupAnswer rdNum={rdNum} answerNum={4} answer={round1Answers[3]} points={round1Points[3]}/>
            </div>
            <div className={'d-flex flex-column gap-5'}>
                <SetupAnswer answerNum={5} answer={round1Answers[4]} points={round1Points[4]}/>
                <SetupAnswer answerNum={6} answer={round1Answers[5]} points={round1Points[5]}/>
                <SetupAnswer answerNum={7} answer={round1Answers[6]} points={round1Points[6]}/>
                <SetupAnswer answerNum={8} answer={round1Answers[7]} points={round1Points[7]}/>
            </div>
        </div>
    )
}

