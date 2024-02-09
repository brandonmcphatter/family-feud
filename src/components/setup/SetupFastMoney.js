import {useState} from "react";
import SetupFastMoneyHeader from "./SetupFastMoneyHeader";
import SetupFastMoneyContainerQuestions from "./SetupFastMoneyContainerQuestions";
import SetupFastMoneyContainerAnswers from "./SetupFastMoneyContainerAnswers";

export default function SetupFastMoney() {
    const [QuestionNum, setQuestionNum] = useState(1);
    return (
        <>
            <div className={'w-100'}>
                <SetupFastMoneyHeader num={QuestionNum}/>
                <div className={'d-flex gap-2'}>
                    <SetupFastMoneyContainerQuestions setQuestionNum={setQuestionNum}/>
                    <SetupFastMoneyContainerAnswers questionNum={QuestionNum}/>
                </div>
            </div>
        </>
    );
}