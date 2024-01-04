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

function GameProvider({children}) {
    const gameData = [round1, round2]
    const [team1, setTeam1] = useState("Johnson");
    const [team2, setTeam2] = useState("Martin");
    const [show, setShow] = useState(false);
    const [t1Score, setT1Score] = useState(0);
    const [t2Score, setT2Score] = useState(0);
    const [roundScore, setRoundScore] = useState(0);
    const [roundQuestionHidden, setRoundQuestionHidden] = useState(true);

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
