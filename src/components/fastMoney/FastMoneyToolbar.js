import {useState} from "react";
import Modal from "react-bootstrap/Modal";
import {useNavigate} from "react-router";


export default function FastMoneyToolbar() {
    const [player1Answers, setPlayer1Answers] = useState([]);
    const [player2Answers, setPlayer2Answers] = useState([]);
    const [p1Modal, setp1Modal] = useState(false);
    const [p2Modal, setp2Modal] = useState(false);
    const navigate = useNavigate();

    function toHome(){
        navigate('/')
    }

    function openPlayer1() {
        setp1Modal(true);
    }

    function closeP1() {
        setp1Modal(false)
    }

    function openPlayer2() {
        setp2Modal(true);
    }

    function closeP2() {
        setp2Modal(false)
    }

    return (
        <>
            <div className={'fm-tools mt-5 text-center d-flex justify-content-center align-items-center gap-4'}>
                <button onClick={openPlayer1} className={'fm-button'}>Player 1</button>
                <button onClick={openPlayer2} className={'fm-button'}>Player 2</button>
                <button onClick={toHome} className={'fm-button'}>End Game</button>
            </div>

            <Modal show={p1Modal}>
                <Modal.Body style={{background: 'black', color: 'white'}}>
                    <div>MODAL FOR PLAYER 1</div>
                    {/*FORM STARTS HERE*/}
                    <div className={'d-flex justify-content-around'}>
                        <button onClick={closeP1} className='fm-button'> close</button>
                        <button className='fm-button'>save</button>
                    </div>
                    {/*FORM ENDS HERE*/}
                </Modal.Body>
            </Modal>

            <Modal show={p2Modal}>
                <Modal.Body style={{background: 'black', color: 'white'}}>
                    <div>MODAL FOR PLAYER 2</div>
                    {/*FORM STARTS HERE*/}
                    <div className={'d-flex justify-content-around'}>
                        <button onClick={closeP2} className='fm-button'> close</button>
                        <button className='fm-button'>save</button>
                    </div>
                    {/*FORM ENDS HERE*/}
                </Modal.Body>
            </Modal>
        </>
    );
}