import {useEffect, useState} from "react";
import {useFastMoney} from "../../context/FastMoneyContext";
import styles from './FastMoneyAnswerBlock.module.css'
import useSound from "use-sound";
import showAnswer from '../../audio/fast-money-answer-reveal-101soundboards.mp3'
import showPoints from '../../audio/family-feud-good-answer.mp3'

export default function FastMoneyAnswerBlock({answer, points}) {
    const {fastMoneyScore, setFastMoneyScore, showAnswers, setShowAnswers} = useFastMoney();
    const [answerHidden, setAnswerHidden] = useState(true);
    const [pointHidden, setPointHidden] = useState(true);
    const [playAnswer] = useSound(showAnswer, {volume: 1});
    const [playPoints] = useSound(showPoints, {volume: 1});

    function showPlayerAnswer() {
        playAnswer();
        setAnswerHidden(false);
    }

    function showPointsForAnswer() {
        playPoints();
        setPointHidden(false);
        setFastMoneyScore(fastMoneyScore + points);
    }

    return (
        <div className={`${styles.fastMoneyAnswer} gap-1 row`}>
            <div onClick={showPlayerAnswer}
                 className={`${styles.answerBlock} col-10 `}>
                <span className={'fw-bolder display-6 text-uppercase'}>{showAnswers || answerHidden ? '' :
                    <Typewriter text={answer} delay={25}/>}</span>
            </div>
            <div onClick={showPointsForAnswer}
                 className={`${styles.pointsBlock} col-2`}>
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