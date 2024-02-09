export default function SetupFastMoneyAnswer({answer, setAnswer, points, setPoints, allAnswers, allPoints , answerNum, key}) {


    function changeAnswer(e) {
        const newAnswers = allAnswers.map((a,i) => {
            if (i === answerNum ) {
                return e;
            } else return a;
        });
        setAnswer(newAnswers);
    }

    function changePoints(e) {
        const newPoints = allPoints.map((p,i) => {
            if (i === answerNum) {
                return e;
            } else return p;
        })
        setPoints(newPoints);
    }

    return (
        <div className={'d-flex'}>
            <div className={'d-flex'}>
                <label htmlFor="{'answer'}">A{key}:</label>
                <input id={'answer'} type={'text'} value={answer} onChange={(e) => changeAnswer(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="points">P{key}:</label>
                <input id={'points'} type={"number"} value={points} onChange={(e) => changePoints(e.target.value)}/>
            </div>
        </div>
    )
}