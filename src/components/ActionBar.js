import {useGame} from "../context/GameContext";


function ActionBar() {
    const {showQuestion} = useGame();


    return (
        <div className='actionBar  d-flex justify-content-center align-items-center'>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <button className='btn btn-primary btn-lg' onClick={showQuestion}>Start Round</button>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <button className='btn btn-success btn-lg'>Clock: ⏱️</button>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center '>
                <button className='btn btn-danger btn-lg'>X</button>
                <button className='btn btn-danger btn-lg mx-5'>X</button>
                <button className='btn btn-danger btn-lg'>X</button>
            </div>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <button className='btn btn-warning btn-lg'>End Game</button>
            </div>
        </div>
    );
}

export default ActionBar;