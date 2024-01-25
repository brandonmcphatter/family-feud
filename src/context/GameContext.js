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
    const [fastMoneyScore, setFastMoneyScore] = useState(0)

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
            handleClose
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
