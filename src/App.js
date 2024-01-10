import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {useGame} from "./context/GameContext";
import TeamNameWindow from "./components/TeamNameWindow";
import MainMenu from "./components/MainMenu";
import MenuItem from "./components/MenuItem";
import HomeScreen from "./components/HomeScreen";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SetupScreen from "./components/SetupScreen";
import AnswerBoard from "./components/answerboard/AnswerBoard";
import SuddenDeathBoard from "./components/answerboard/SuddenDeathBoard";

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
                <Route path='game' element={<div>game/</div>}/>
                <Route path='scoreboard' element={<h1>Scoreboard</h1>}/>
                <Route path='round-1' element={<AnswerBoard rd={0}/>}/>
                <Route path='round-2' element={<AnswerBoard rd={1}/>}/>
                <Route path='round-3' element={<AnswerBoard rd={2}/>}/>
                <Route path='sudden-death' element={<SuddenDeathBoard rd={3}>1</SuddenDeathBoard>}/>
                <Route path='fast-money1' element={<h1>Fast Money</h1>}/>
                <Route path='fast-money2' element={<h1>Fast Money</h1>}/>
                <Route path='final' element={<h1>Final</h1>}/>

            </Routes>

        </BrowserRouter>


    );
}














