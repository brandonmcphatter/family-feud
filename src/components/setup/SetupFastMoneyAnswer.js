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
                return Number(e);
            } else return Number(p);
        })
        setPoints(newPoints);
    }

    return (
        <div className={'d-flex  row'}>
            <div className={'d-flex col-8'}>
                <label className={''} htmlFor="{'answer '}">A{answerNum +1}:</label>
                <input id={'answer'} type={'text'} value={answer} onChange={(e) => changeAnswer(e.target.value)}/>
            </div>
            <div className={'d-flex col-3'}>
                <label htmlFor="points">P{answerNum + 1}:</label>
                <input className={'w-75'} id={'points'} type={"number"} value={points} onChange={(e) => changePoints(e.target.value)}/>
            </div>
        </div>
    )
}