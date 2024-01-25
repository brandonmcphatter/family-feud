import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import HomeScreen from "./pages/HomeScreen"
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import SetupScreen from "./pages/SetupScreen";
import AnswerBoard from "./pages/AnswerBoard";
import SuddenDeathBoard from "./pages/SuddenDeathBoard";
import GameScreen from "./pages/GameScreen";
import WinScreen from "./pages/WinScreen";
import FastMoney from "./pages/FastMoney";
import ScoreScreen from "./pages/ScoreScreen";

export default function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomeScreen/>}/>
                <Route path='setup' element={<SetupScreen/>}/>
                <Route path='game' element={<GameScreen/>}>
                    <Route index element={<Navigate replace to='scoreboard'/>}/>
                    <Route path='scoreboard' element={<ScoreScreen/>}/>
                    <Route path='round-1' element={<AnswerBoard rd={0}/>}/>
                    <Route path='round-2' element={<AnswerBoard rd={1}/>}/>
                    <Route path='round-3' element={<AnswerBoard rd={2}/>}/>
                    <Route path='sudden-death' element={<SuddenDeathBoard rd={3}>1</SuddenDeathBoard>}/>
                    <Route path='fast-money' element={<FastMoney/>}/>
                    <Route path='final' element={<WinScreen/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}














