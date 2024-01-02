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

export default function App() {

    const {show, handleShow, team1, team2} = useGame();

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
                <Route path='/setup' element={<SetupScreen/>}/>
                <Route path='/game' element={<h1>Game - team1: {team1} team2: {team2} </h1>}>
                    <Route path='board' element={<GameBoard/>}/>
                    <Route path='fast-money1' element={<h1>Fast Money</h1>}/>
                    <Route path='fast-money2' element={<h1>Fast Money</h1>}/>
                    <Route path='final' element={<h1>Final</h1>}/>
                </Route>

            </Routes>

        </BrowserRouter>


    );
}














