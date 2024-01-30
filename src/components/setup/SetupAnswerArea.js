import SetupAnswer from "./SetupAnswer";

export default function SetupAnswerArea({roundNum}) {
    const left = [1, 2, 3, 4];
    const right = [5, 6, 7, 8];
    return (
        <div className={'d-flex gap-5'}>
            <div className={'d-flex flex-column gap-5'}>
                {left.map(num => <SetupAnswer answerNum={num}/> )}
            </div>
            <div className={'d-flex flex-column gap-5'}>
                {right.map(num => <SetupAnswer answerNum={num}/> )}

            </div>
        </div>
    )
}

