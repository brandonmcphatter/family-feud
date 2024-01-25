import {useGame} from "../../context/GameContext";
import {useEffect, useState} from "react";

export default function FastMoneyAnswerBlock({answer, points}) {
    const {fastMoneyScore, setFastMoneyScore, showAnswers, setShowAnswers} = useGame();
    const [answerHidden, setAnswerHidden] = useState(true);
    const [pointHidden, setPointHidden] = useState(true);

    function showPlayerAnswer() {
        setAnswerHidden(false);
    }

    function showPointsForAnswer() {
        setPointHidden(false);
        setFastMoneyScore(fastMoneyScore + points);
    }

    return (
        <div className={'fast-money-answer d-flex gap-1 row'}>
            <div onClick={showPlayerAnswer}
                 className={'answer-block col-10 d-flex justify-content-start align-items-center'}>
                <span className={'fw-bolder display-6 text-uppercase'}>{showAnswers || answerHidden ? '' :
                    <Typewriter text={answer} delay={25}/>}</span>
            </div>
            <div onClick={showPointsForAnswer}
                 className={'points-block col-2 d-flex justify-content-center align-items-center'}>
                <span className={'fw-bolder display-5'}>{showAnswers || pointHidden ? '' : points}</span>
            </div>
        </div>
    );
}

function Typewriter({text, delay}) {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, delay, text]);

    return (
        <span>{currentText}</span>
    );
}