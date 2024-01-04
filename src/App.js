import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useGame} from "./context/GameContext";
import TeamNameWindow from "./components/TeamNameWindow";
import MainMenu from "./components/MainMenu";
import MenuItem from "./components/MenuItem";
import HomeScreen from "./components/HomeScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SetupScreen from "./components/SetupScreen";
import GameBoard from "./components/GameBoard";
import AnswerBoard from "./components/AnswerBoard";

export default function App() {

    const {show, handleShow} = useGame();

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={
                    <HomeScreen>
                        <MainMenu>
                            <MenuItem onclick={handleShow}>New Game</MenuItem>
                            <MenuItem>Setup</MenuItem>
                        </MainMenu>
                        {show && <TeamNameWindow/>}
                    </HomeScreen>
                }/>
                <Route path='setup' element={<SetupScreen/>}/>
                <Route path='game' element={<GameBoard/>}/>
                    <Route path='board' element={<AnswerBoard/>}/>
                    <Route path='fast-money1' element={<h1>Fast Money</h1>}/>
                    <Route path='fast-money2' element={<h1>Fast Money</h1>}/>
                    <Route path='final' element={<h1>Final</h1>}/>


            </Routes>

        </BrowserRouter>


    );
}














