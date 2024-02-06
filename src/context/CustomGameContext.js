import {createContext, useContext, useState} from "react";

const CustomGameContext = createContext(undefined);

function CustomGameProvider({children}) {
    // QUESTIONS
    const [customQuestions, setCustomQuestions] = useState(['q1', 'q2', 'q3', 'q4', 'sd']);
    // ROUND 1 ANSWERS AND POINTS
    const [round1Answers, setRound1Answers] = useState(['a', 'b', 'c', 'd', '', '', '', '']);
    const [round1Points, setRound1Points] = useState([10, 20, 30, 40, 0, 0, 0, 0]);
    // ROUND 2 ANSWERS AND POINTS
    const [round2Answers, setRound2Answers] = useState(['', '', '', '', '', '', '', '']);
    const [round2Points, setRound2Points] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    // ROUND 3 ANSWERS AND POINTS
    const [round3Answers, setRound3Answers] = useState(['', '', '', '', '', '', '', '']);
    const [round3Points, setRound3Points] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    // ROUND 4 ANSWERS AND POINTS
    const [round4Answers, setRound4Answers] = useState(['', '', '', '', '', '', '', '']);
    const [round4Points, setRound4Points] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    // SUDDEN DEATH ANSWER AND POINTS
    const [suddenDeathAnswer, setSuddenDeathAnswer] = useState(['', '', '', '', '', '', '', '']);
    const [suddenDeathPoints, setSuddenDeathPoints] = useState([0, 0, 0, 0, 0, 0, 0, 0]);
    // FAST MONEY QUESTIONS
    const [fastMoneyQuestions, setFastMoneyQuestions] = useState(['', '', '', '', '']);
    // FAST MONEY ANSWERS
    const [fastMoneyAnswers1, setFastMoneyAnswers1] = useState(['', '', '', '', '']);
    const [fastMoneyAnswers2, setFastMoneyAnswers2] = useState(['', '', '', '', '']);
    const [fastMoneyAnswers3, setFastMoneyAnswers3] = useState(['', '', '', '', '']);
    const [fastMoneyAnswers4, setFastMoneyAnswers4] = useState(['', '', '', '', '']);
    const [fastMoneyAnswers5, setFastMoneyAnswers5] = useState(['', '', '', '', '']);
    const [fastMoneyPoints1, setFastMoneyPoints1] = useState([0, 0, 0, 0, 0]);
    const [fastMoneyPoints2, setFastMoneyPoints2] = useState([0, 0, 0, 0, 0]);
    const [fastMoneyPoints3, setFastMoneyPoints3] = useState([0, 0, 0, 0, 0]);
    const [fastMoneyPoints4, setFastMoneyPoints4] = useState([0, 0, 0, 0, 0]);
    const [fastMoneyPoints5, setFastMoneyPoints5] = useState([0, 0, 0, 0, 0]);

    // CUSTOM GAME DATA

    const roundOne = {
        question: customQuestions[0],
        answers: [
            {
                answer: round1Answers[0],
                points: round1Points[0],
            },
            {
                answer: round1Answers[1],
                points: round1Points[1],
            },
            {
                answer: round1Answers[2],
                points: round1Points[2],
            },
            {
                answer: round1Answers[3],
                points: round1Points[3],
            },
            {
                answer: round1Answers[4],
                points: round1Points[4],
            },
            {
                answer: round1Answers[5],
                points: round1Points[5],
            },
            {
                answer: round1Answers[6],
                points: round1Points[6],
            },
            {
                answer: round1Answers[7],
                points: round1Points[7],
            }
        ]
    };

    const roundTwo = {
        question: customQuestions[1],
        answers: [
            {
                answer: round2Answers[0],
                points: round2Points[0],
            },
            {
                answer: round2Answers[1],
                points: round2Points[1],
            },
            {
                answer: round2Answers[2],
                points: round2Points[2],
            },
            {
                answer: round2Answers[3],
                points: round2Points[3],
            },
            {
                answer: round2Answers[4],
                points: round2Points[4],
            },
            {
                answer: round2Answers[5],
                points: round2Points[5],
            },
            {
                answer: round2Answers[6],
                points: round2Points[6],
            },
            {
                answer: round2Answers[7],
                points: round2Points[7],
            }
        ]
    };

    const roundThree = {
        question: customQuestions[2],
        answers: [
            {
                answer: round3Answers[0],
                points: round3Points[0],
            },
            {
                answer: round3Answers[1],
                points: round3Points[1],
            },
            {
                answer: round3Answers[2],
                points: round3Points[2],
            },
            {
                answer: round3Answers[3],
                points: round3Points[3],
            },
            {
                answer: round3Answers[4],
                points: round3Points[4],
            },
            {
                answer: round3Answers[5],
                points: round3Points[5],
            },
            {
                answer: round3Answers[6],
                points: round3Points[6],
            },
            {
                answer: round3Answers[7],
                points: round3Points[7],
            }
        ]
    };

    const roundFour = {
        question: customQuestions[3],
        answers: [
            {
                answer: round4Answers[0],
                points: round4Points[0],
            },
            {
                answer: round4Answers[1],
                points: round4Points[1],
            },
            {
                answer: round4Answers[2],
                points: round4Points[2],
            },
            {
                answer: round4Answers[3],
                points: round4Points[3],
            },
            {
                answer: round4Answers[4],
                points: round4Points[4],
            },
            {
                answer: round4Answers[5],
                points: round4Points[5],
            },
            {
                answer: round4Answers[6],
                points: round4Points[6],
            },
            {
                answer: round4Answers[7],
                points: round4Points[7],
            }
        ]
    };

    const suddenDeath = {
        question: customQuestions[4],
        answers: [
            {
                answer: suddenDeathAnswer[0],
                points: suddenDeathPoints[0],
            },
            {
                answer: suddenDeathAnswer[1],
                points: suddenDeathPoints[1],
            },
            {
                answer: suddenDeathAnswer[2],
                points: suddenDeathPoints[2],
            },
            {
                answer: suddenDeathAnswer[3],
                points: suddenDeathPoints[3],
            },
            {
                answer: suddenDeathAnswer[4],
                points: suddenDeathPoints[4],
            },
            {
                answer: suddenDeathAnswer[5],
                points: suddenDeathPoints[5],
            },
            {
                answer: suddenDeathAnswer[6],
                points: suddenDeathPoints[6],
            },
            {
                answer: suddenDeathAnswer[7],
                points: suddenDeathPoints[7],
            }
        ]

    };

    const fastMoney = [
        {
            question: fastMoneyQuestions[0],
            answers: [fastMoneyAnswers1[0], fastMoneyAnswers1[1], fastMoneyAnswers1[2], fastMoneyAnswers1[3], fastMoneyAnswers1[4]],
            points: [fastMoneyPoints1[0], fastMoneyPoints1[1], fastMoneyPoints1[2], fastMoneyPoints1[3], fastMoneyPoints1[4]],
        },
        {
            question: fastMoneyQuestions[1],
            answers: [fastMoneyAnswers2[0], fastMoneyAnswers2[1], fastMoneyAnswers2[2], fastMoneyAnswers2[3], fastMoneyAnswers2[4]],
            points: [fastMoneyPoints2[0], fastMoneyPoints2[1], fastMoneyPoints2[2], fastMoneyPoints2[3], fastMoneyPoints2[4]],
        },
        {
            question: fastMoneyQuestions[2],
            answers: [fastMoneyAnswers3[0], fastMoneyAnswers3[1], fastMoneyAnswers3[2], fastMoneyAnswers3[3], fastMoneyAnswers3[4]],
            points: [fastMoneyPoints3[0], fastMoneyPoints3[1], fastMoneyPoints3[2], fastMoneyPoints3[3], fastMoneyPoints3[4]],
        },
        {
            question: fastMoneyQuestions[3],
            answers: [fastMoneyAnswers4[0], fastMoneyAnswers4[1], fastMoneyAnswers4[2], fastMoneyAnswers4[3], fastMoneyAnswers4[4]],
            points: [fastMoneyPoints4[0], fastMoneyPoints4[1], fastMoneyPoints4[2], fastMoneyPoints4[3], fastMoneyPoints4[4]],
        },
        {
            question: fastMoneyQuestions[4],
            answers: [fastMoneyAnswers5[0], fastMoneyAnswers5[1], fastMoneyAnswers5[2], fastMoneyAnswers5[3], fastMoneyAnswers5[4]],
            points: [fastMoneyPoints5[0], fastMoneyPoints5[1], fastMoneyPoints5[2], fastMoneyPoints5[3], fastMoneyPoints5[4]],
        }
    ];


    const customGameData = [ roundOne, roundTwo, roundThree, roundFour, suddenDeath, fastMoney ];


    return (
        <CustomGameContext.Provider value={{
            customQuestions,
            setCustomQuestions,
            round1Answers,
            setRound1Answers,
            round1Points,
            setRound1Points,
            round2Answers,
            setRound2Answers,
            round2Points,
            setRound2Points,
            round3Answers,
            setRound3Answers,
            round3Points,
            setRound3Points,
            round4Answers,
            setRound4Answers,
            round4Points,
            setRound4Points,
            suddenDeathAnswer,
            setSuddenDeathAnswer,
            suddenDeathPoints,
            setSuddenDeathPoints,
            fastMoneyQuestions,
            setFastMoneyQuestions,
            fastMoneyAnswers1,
            setFastMoneyAnswers1,
            fastMoneyAnswers2,
            setFastMoneyAnswers2,
            fastMoneyAnswers3,
            setFastMoneyAnswers3,
            fastMoneyAnswers4,
            setFastMoneyAnswers4,
            fastMoneyAnswers5,
            setFastMoneyAnswers5,
            fastMoneyPoints1,
            setFastMoneyPoints1,
            fastMoneyPoints2,
            setFastMoneyPoints2,
            fastMoneyPoints3,
            setFastMoneyPoints3,
            fastMoneyPoints4,
            setFastMoneyPoints4,
            fastMoneyPoints5,
            setFastMoneyPoints5,
            customGameData
        }}>
            {children}
        </CustomGameContext.Provider>
    );
}

function useCustomGame() {
    const context = useContext(CustomGameContext);
    if (context === undefined) {
        throw new Error('must be used within CustomGameProvider')
    }
    return context;
}

export {CustomGameProvider, useCustomGame}