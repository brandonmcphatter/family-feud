import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useGame} from "./context/GameContext";
import TeamNameWindow from "./components/TeamNameWindow";
import MainMenu from "./components/MainMenu";
import MenuItem from "./components/MenuItem";
import HomeScreen from "./components/HomeScreen";

export default function App() {

const {show, handleShow} = useGame();

    return (
        <HomeScreen>
            <MainMenu>
                <MenuItem onclick={handleShow}>New Game</MenuItem>
                <MenuItem>Setup</MenuItem>
            </MainMenu>
            {show && <TeamNameWindow/>}
        </HomeScreen>


    );
}














