import {createContext, useContext, useState} from "react";

const FastMoneyContext = createContext(undefined);

function FastMoneyProvider ({children}) {
    const [fastMoneyScore, setFastMoneyScore] = useState(0);
    const [p1Modal, setp1Modal] = useState(false);
    const [p2Modal, setp2Modal] = useState(false);
    const [a1, setA1] = useState('');
    const [a2, setA2] = useState('');
    const [a3, setA3] = useState('');
    const [a4, setA4] = useState('');
    const [a5, setA5] = useState('');
    const [a6, setA6] = useState('');
    const [a7, setA7] = useState('');
    const [a8, setA8] = useState('');
    const [a9, setA9] = useState('');
    const [a10, setA10] = useState('');
    const [p1, setP1] = useState(0);
    const [p2, setP2] = useState(0);
    const [p3, setP3] = useState(0);
    const [p4, setP4] = useState(0);
    const [p5, setP5] = useState(0);
    const [p6, setP6] = useState(0);
    const [p7, setP7] = useState(0);
    const [p8, setP8] = useState(0);
    const [p9, setP9] = useState(0);
    const [p10, setP10] = useState(0);
    const [showAnswers, setShowAnswers] = useState(false);
    const [player1Answers, setPlayer1Answers] = useState([a1, a2, a3, a4, a5]);
    const [player2Answers, setPlayer2Answers] = useState([a6, a7, a8, a9, a10]);
    const [player1Points, setPlayer1Points] = useState([p1, p2, p3, p4, p5]);
    const [player2Points, setPlayer2Points] = useState([p6, p7, p8, p9, p10]);

    return (
        <FastMoneyContext.Provider value={{
            fastMoneyScore,
            setFastMoneyScore,
            p1Modal,
            setp1Modal,
            p2Modal,
            setp2Modal,
            a1,
            a2,
            a3,
            a4,
            a5,
            a6,
            a7,
            a8,
            a9,
            a10,
            setA1,
            setA2,
            setA3,
            setA4,
            setA5,
            setA6,
            setA7,
            setA8,
            setA9,
            setA10,
            setP1,
            setP2,
            setP3,
            setP4,
            setP5,
            setP6,
            setP7,
            setP8,
            setP9,
            setP10,
            p1,
            p2,
            p3,
            p4,
            p5,
            p6,
            p7,
            p8,
            p9,
            p10,
            player1Answers,
            setPlayer1Answers,
            player1Points,
            setPlayer1Points,
            player2Points,
            setPlayer2Points,
            player2Answers,
            setPlayer2Answers,
            showAnswers,
            setShowAnswers
        }}>
            {children}
        </FastMoneyContext.Provider>
    )
}

function useFastMoney() {
    const context = useContext(FastMoneyContext);
    if (context === undefined) {
        throw new Error('useFastMoney must be used within a FastMoneyProvider');
    }
    return context;
}

export {FastMoneyProvider, useFastMoney}