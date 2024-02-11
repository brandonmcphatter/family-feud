import Modal from "react-bootstrap/Modal";
import styles from "./FastMoneyToolbar.module.css";
import ModalToolBar from "./ModalToolBar";
import {useFastMoney} from "../../context/FastMoneyContext";

export default function Player2Modal() {

    const {
        p2Modal, setp2Modal,
        a6,
        a7, a8,
        a9, a10,
        setA6,
        setA7, setA8,
        setA9, setA10,
        setP6,
        setP7, setP8,
        setP9, setP10,
        p6,
        p7, p8,
        p9, p10,
        setPlayer2Points, setPlayer2Answers,
    } = useFastMoney();

    function closeP2() {
        setp2Modal(false)
    }

    function saveP2Answers() {
        setPlayer2Answers([a6, a7, a8, a9, a10]);
        setPlayer2Points([p6, p7, p8, p9, p10]);
        setp2Modal(false)
    }

    return (
        <Modal show={p2Modal} onEscapeKeyDown={closeP2}>
            <Modal.Body style={{background: 'darkorange', color: 'white'}}>
                <div className={'text-center fw-bolder display-6 mb-3'}>Fast Money - PLAYER 2</div>
                <div className={'d-flex flex-column gap-4 mb-3'}>
                    <div className={' d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer1'}
                               onChange={e => setA6(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points1'}
                               onChange={e => setP6(Number(e.target.value))}/>
                    </div>
                    <div className={'d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer2'}
                               onChange={e => setA7(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points2'}
                               onChange={e => setP7(Number(e.target.value))}/>
                    </div>
                    <div className={'d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer3'}
                               onChange={e => setA8(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points3'}
                               onChange={e => setP8(Number(e.target.value))}/>
                    </div>
                    <div className={'d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer4'}
                               onChange={e => setA9(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points4'}
                               onChange={e => setP9(Number(e.target.value))}/>
                    </div>
                    <div className={'d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer5'}
                               onChange={e => setA10(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points5'}
                               onChange={e => setP10(Number(e.target.value))}/>
                    </div>
                </div>
                <ModalToolBar close={closeP2} save={saveP2Answers} time={25}/>
            </Modal.Body>
        </Modal>
    );
}

