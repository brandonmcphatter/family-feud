import {createContext, useContext, useState} from "react";

const GameContext = createContext(undefined);

const round1 = {
    question: 'Name an occupation that begins with the letter "J."',
    answers: [
        {
            answer: 'Janitor',
            points: 62,
            revealed: false
        },
        {
            answer: 'Judge',
            points: 19,
            revealed: false
        },
        {
            answer: 'Jeweler',
            points: 5,
            revealed: false
        },
        {
            answer: 'Jockey',
            points: 4,
            revealed: false
        },
        {
            answer: 'Journalist',
            points: 4,
            revealed: false
        },
        {
            answer: 'Juggler',
            points: 3,
            revealed: false
        },
        {
            answer: 'Jailer',
            points: 2,
            revealed: false
        },
        {
            answer: 'Jeweler',
            points: 1,
            revealed: false
        },
    ]
}
const round2 = {
    question: 'Name something with teeth',
    answers: [
        {
            answer: 'Animals',
            points: 66,
            revealed: false
        },
        {
            answer: 'People',
            points: 19,
            revealed: false
        },
        {
            answer: 'A Comb',
            points: 8,
            revealed: false
        },
        {
            answer: 'A Zipper',
            points: 4,
            revealed: false
        },
        {
            answer: 'A Saw',
            points: 2,
            revealed: false
        },
    ]
}

const round3 = {
    question: 'Tell Me A Word That Rhymes with “Election” ',
    answers: [
        {
            answer: 'Selection',
            points: 32,
            revealed: false
        },
        {
            answer: 'Erection',
            points: 23,
            revealed: false
        },
        {
            answer: 'Perfection',
            points: 6,
            revealed: false
        },
        {
            answer: 'Protection',
            points: 6,
            revealed: false
        },
        {
            answer: 'Detection',
            points: 5,
            revealed: false
        },
        {
            answer: 'Rejection',
            points: 4,
            revealed: false
        },
        {
            answer: 'Collection',
            points: 4,
            revealed: false
        },
    ],
}

const suddenDeath = {
    question: 'Name something you wind up.',
    answer: 'Clock/Watch'
}

const fastMoneyRound = [
    {
        question: 'Name something in a person’s closet that only comes out on special occasions.',
        answers:
            ['Suit/Tux', 'Dress', 'Jewelry', 'Shoes', 'Shotgun'],
        points:
            [35, 26, 10, 6, 4]
    },
    {
        question: '',
        answers: [],
        points: []
    },
    {
        question: '',
        answers: [],
        points: []
    },
    {
        question: '',
        answers: [],
        points: []
    },
    {
        question: '',
        answers: [],
        points: []
    }
]

function GameProvider({children}) {
    const gameData = [round1, round2, round3, suddenDeath, fastMoneyRound]
    const [team1, setTeam1] = useState("Johnson");
    const [team2, setTeam2] = useState("Martin");
    const [show, setShow] = useState(false);
    const [t1Score, setT1Score] = useState(0);
    const [t2Score, setT2Score] = useState(0);
    const [roundScore, setRoundScore] = useState(0);
    const [roundQuestionHidden, setRoundQuestionHidden] = useState(true);
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


    const showQuestion = () => {
        setRoundQuestionHidden(false);
    }

    const handleClose = () => {
        setShow(false);

    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <GameContext.Provider value={{
            gameData,
            team1,
            setTeam1,
            t1Score,
            setT1Score,
            t2Score,
            setT2Score,
            team2,
            setTeam2,
            show,
            roundScore,
            setRoundScore,
            roundQuestionHidden,
            setRoundQuestionHidden,
            fastMoneyScore,
            setFastMoneyScore,
            showQuestion,
            handleShow,
            handleClose,
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
        </GameContext.Provider>
    );
}

function useGame() {
    const context = useContext(GameContext);
    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}

export {GameProvider, useGame};
