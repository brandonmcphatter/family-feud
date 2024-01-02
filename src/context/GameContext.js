import {createContext, useContext, useState} from "react";

const GameContext = createContext(undefined);

function GameProvider({children}) {
    const [team1, setTeam1] = useState("");
    const [team2, setTeam2] = useState("");
    const [show, setShow] = useState(false);

    const handleClose = () => {
        setShow(false);

    }
    const handleShow = () => {
        setShow(true);
    }

    return (
        <GameContext.Provider value={{
            team1,
            setTeam1,
            team2,
            setTeam2,
            show,
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
