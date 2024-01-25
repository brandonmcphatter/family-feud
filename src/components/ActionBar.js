import {useGame} from "../context/GameContext";
import { useState} from "react";
import {useNavigate} from "react-router";


function ActionBar() {
    const {showQuestion, setRoundScore} = useGame();
    const navigate = useNavigate();

    function toScoreBoard() {
        setRoundScore(0);
        navigate('/game/scoreboard')
    }


    return (
        <div className='actionBar  d-flex justify-content-center align-items-center'>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <button className='btn btn-primary btn-lg' onClick={showQuestion}>Start Round</button>
            </div>
            <Clock/>
            <div className='col-3 d-flex justify-content-center align-items-center '>
                <button className='btn btn-danger btn-lg'>X</button>
                <button className='btn btn-danger btn-lg mx-5'>X</button>
                <button className='btn btn-danger btn-lg'>X</button>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <button onClick={toScoreBoard} className='btn btn-warning btn-lg'>ScoreBoard</button>
            </div>
        </div>
    );
}


function Clock() {
    const [time, setTime] = useState(7);
    function startTimer() {
        let timer = setInterval(() => {
            setTime(time => time - 1);
        }, 1000);

        setTimeout(() => {
            clearInterval(timer);
            setTime(7)
        }, 7000);
    }

    return (
        <div className='timer col-3 d-flex justify-content-center align-items-center'>
            <button onClick={startTimer} className='btn btn-success btn-lg'>⏱️: {time}</button>
        </div>
    )

}

export default ActionBar;