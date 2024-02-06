import {createContext, useContext, useState} from "react";
import {stockGameData} from "./StockGameData";
import {useCustomGame} from "./CustomGameContext";

const GameContext = createContext(undefined);

function GameProvider({children}) {
    const {customGameData} = useCustomGame();
    const ogGameData = stockGameData;
    const userGameData = customGameData;
    const [gameData, setGameData] = useState(ogGameData);
    const [gameChoice, setGameChoice] = useState(false);
    const [strikes, setStrikes] = useState(0);
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

    const addStrike = () => {
        setStrikes((strikes) => strikes+1);
    }

    return (
        <GameContext.Provider value={{
            gameData,
            setGameData,
            ogGameData,
            userGameData,
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
            strikes,
            setStrikes,
            gameChoice,
            setGameChoice,
            addStrike,
            showQuestion,
            handleShow,
            handleClose,

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
