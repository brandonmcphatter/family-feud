import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useGame} from "./context/GameContext";


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

function MainMenu({children}) {
    return (
        <div className='mb-5 container-fluid d-flex justify-content-evenly'>
            {children}
        </div>
    );
}


function MenuItem({children, onclick}) {
    return (
        <button onClick={onclick} className='border rounded-3'><h1>{children}</h1></button>
    )
}


function HomeScreen({children}) {
    return (
        <div className="homeScreen container-fluid d-flex flex-row justify-content-evenly align-items-end">
            {children}
        </div>
    );
}


function TeamNameWindow() {
    const {setTeam1, setTeam2, team1, team2, handleClose} = useGame();
    return (
        <div className="modal show" style={{display: 'block', position: 'initial'}}>
            <Modal.Dialog>
                <Modal.Header>
                    <Modal.Title>Let's Get Our Teams!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <div>
                        <label className='me-2' htmlFor='team1'>Team 1: </label>
                        <input type="text" name="team1" value={team1} onChange={(e)=> setTeam1(e.target.value)}/>
                    </div>
                    <br></br>
                    <div>
                        <label className='me-2' htmlFor='team1'>Team 2: </label>
                        <input type="text" name="team1" value={team2} onChange={e => setTeam2(e.target.value)}/>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary">Close</Button>
                    <Button variant="primary" onClick={handleClose}>Save changes</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    );
}



