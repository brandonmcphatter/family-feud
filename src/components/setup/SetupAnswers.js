import SetupQuestion from "./SetupQuestion";
import SetupAnswerArea from "./SetupAnswerArea";

export default function SetupAnswers({rdNum}) {
    return (
        <>
            <SetupQuestion rdNum={rdNum}/>
            <SetupAnswerArea rdNum={rdNum}/>
        </>
    );
}

