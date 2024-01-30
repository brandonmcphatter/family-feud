

import {useGame} from "../context/GameContext";
import {Link} from "react-router-dom";
import 'animate.css'
import familyFeudLogo from '../images/big-ff-logo.png';
import MainMenu from "../components/HomeScreen/MainMenu";
import MenuItem from "../components/HomeScreen/MenuItem";
import TeamNameWindow from "../components/HomeScreen/TeamNameWindow";

function HomeScreen({children}) {
    const {show, handleShow} = useGame();
    return (
        <div className="homeScreen d-flex flex-column justify-content-evenly ">
            <div className="ff-logo container-fluid d-flex justify-content-center ">
            <img className={'animate__animated animate__pulse animate__slow animate__infinite'} src={familyFeudLogo} alt="FF Logo"/>
            </div>
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