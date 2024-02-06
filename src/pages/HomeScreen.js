import {useGame} from "../context/GameContext";
import {Link} from "react-router-dom";
import 'animate.css'
import familyFeudLogo from '../images/big-ff-logo.png';
import MainMenu from "../components/homeScreen/MainMenu";
import MenuItem from "../components/homeScreen/MenuItem";
import TeamNameWindow from "../components/homeScreen/TeamNameWindow";
import styles from './HomeScreen.module.css'

function HomeScreen() {
    const {show, handleShow} = useGame();
    return (
        <div className={`${styles.homeScreen} animate__animated animate__slideInLeft`}>
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