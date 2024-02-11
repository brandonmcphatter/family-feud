import Modal from "react-bootstrap/Modal";
import styles from "./FastMoneyToolbar.module.css";
import ModalToolBar from "./ModalToolBar";
import {useFastMoney} from "../../context/FastMoneyContext";

export default function Player1Modal() {

    const {
        p1Modal, setp1Modal,
        a1, a2,
        a3, a4,
        a5,
        setA1, setA2,
        setA3, setA4,
        setA5,
        setP1, setP2,
        setP3, setP4,
        setP5,
        p1, p2,
        p3, p4,
        p5,
        setPlayer1Answers, setPlayer1Points,

    } = useFastMoney();

    function closeP1() {
        setp1Modal(false)
    }

    function saveP1Answers() {
        setPlayer1Answers([a1, a2, a3, a4, a5])
        setPlayer1Points([p1, p2, p3, p4, p5])
        setp1Modal(false)
    }


    return (
        <Modal show={p1Modal} onEscapeKeyDown={closeP1}>
            <Modal.Body style={{background: 'darkorange', color: 'white'}}>
                <div className={'text-center fw-bolder display-6 mb-3'}>Fast Money - PLAYER 1</div>
                <div className={'d-flex flex-column gap-4 mb-3'}>
                    <div className={' d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer1'} value={a1}
                               onChange={e => setA1(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points1'} value={p1}
                               onChange={e => setP1(Number(e.target.value))}/>
                    </div>
                    <div className={'d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer2'} value={a2}
                               onChange={e => setA2(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points2'} value={p2}
                               onChange={e => setP2(Number(e.target.value))}/>
                    </div>
                    <div className={'d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer3'} value={a3}
                               onChange={e => setA3(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points3'} value={p3}
                               onChange={e => setP3(Number(e.target.value))}/>
                    </div>
                    <div className={'d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer4'} value={a4}
                               onChange={e => setA4(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points4'} value={p4}
                               onChange={e => setP4(Number(e.target.value))}/>
                    </div>
                    <div className={'d-flex justify-content-center gap-1'} style={{height: '50px'}}>
                        <input className={`${styles.answerInput} ${styles.inputStyle}`} type="text" id={'answer5'} value={a5}
                               onChange={e => setA5(e.target.value)}/>
                        <input className={`${styles.pointsInput} ${styles.inputStyle}`} type="text" id={'points5'} value={p5}
                               onChange={e => setP5(Number(e.target.value))}/>
                    </div>
                </div>
                <ModalToolBar close={closeP1} save={saveP1Answers} time={20}/>
            </Modal.Body>
        </Modal>
    );
}



