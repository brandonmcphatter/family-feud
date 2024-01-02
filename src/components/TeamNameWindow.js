import {useGame} from "../context/GameContext";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

function TeamNameWindow() {
    const {setTeam1, setTeam2, team1, team2, handleClose} = useGame();

    return (
        <div>
            <Modal  show={true} onHide={handleClose} >
                <Modal.Body style={{backgroundColor: '#f3e640'}}>
                    <h3 className='text-center text-decoration-underline'>Enter Team Names</h3>

                    <div className='d-flex flex-column my-2'>
                        <label htmlFor="team1">Team 1:</label>
                        <input type="text"
                               value={team1}
                               onChange={(e) => setTeam1(e.target.value)}/>
                    </div>

                    <div className='d-flex flex-column my-4'>
                        <label htmlFor="team2">Team 2:</label>
                        <input type="text"
                               value={team2}
                               onChange={(e) => setTeam2(e.target.value)}/>
                    </div>

                    <div className='d-flex justify-content-evenly mt-4'>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Let's Play!
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TeamNameWindow;