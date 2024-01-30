
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import {useNavigate} from "react-router";
import {useGame} from "../../context/GameContext";

function TeamNameWindow() {
    const {setTeam1, setTeam2, team1, team2, handleClose} =  useGame();
    const notReady = team1 === '' || team2 === '';
    const navigate = useNavigate();
    function moveToGame() {
        navigate('/game')
    }
    return (
        <div >
            <Modal  show={true} onHide={handleClose}
                    size="med"
                    centered >
                <Modal.Body style={{backgroundColor: 'darkgoldenrod', border: '5px solid white'}}>
                    <div style={{height: '30vh'}}>


                        <div className='d-flex flex-column my-2 px-3'>
                            <label className={'fw-bold fst-italic h4 text-white'} htmlFor="team1">Team 1:</label>
                            <input className={'text-center text-uppercase'}
                                   type="text"
                                   value={team1}
                                   onChange={(e) => setTeam1(e.target.value)}/>
                        </div>

                        <div className='d-flex flex-column my-4 px-3'>
                            <label className={'fw-bold fst-italic h4 text-white'} htmlFor="team2">Team 2:</label>
                            <input className={'text-center text-uppercase'}
                                   type="text"
                                   value={team2}
                                   onChange={(e) => setTeam2(e.target.value)}/>
                        </div>

                        <div className='d-flex justify-content-evenly mt-5'>
                            <Button variant="danger" onClick={handleClose}>
                                Cancel
                            </Button>

                                <Button variant="success" onClick={moveToGame} disabled={notReady}>
                                    Let's Play!
                                </Button>

                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default TeamNameWindow;