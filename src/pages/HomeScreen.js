import MainMenu from "../components/MainMenu";
import MenuItem from "../components/MenuItem";
import TeamNameWindow from "../components/TeamNameWindow";
import {useGame} from "../context/GameContext";
import {Link} from "react-router-dom";

function HomeScreen({children}) {

    const {show, handleShow} = useGame();

    return (
        <div className="homeScreen container-fluid d-flex flex-row justify-content-evenly align-items-end">
            {children}
            <MainMenu>
                <MenuItem onclick={handleShow}>New Game</MenuItem>
                <Link to={'/setup'}>
                <MenuItem>Setup</MenuItem>
                </Link>
            </MainMenu>
            {show && <TeamNameWindow/>}
        </div>
    );
}

export default HomeScreen;