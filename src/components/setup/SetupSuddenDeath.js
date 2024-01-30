import SetupQuestion from "./SetupQuestion";
import SetupAnswer from "./SetupAnswer";

export default function SetupSuddenDeath() {
    return (
        <>
            <SetupQuestion roundNum={5}/>
            <div className={'align-self-start'}>
                <SetupAnswer answerNum={1}/>
            </div>
        </>

    );
}