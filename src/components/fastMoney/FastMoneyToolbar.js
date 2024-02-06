import Modal from "react-bootstrap/Modal";
import {useNavigate} from "react-router";
import {useFastMoney} from "../../context/FastMoneyContext";
import styles from './FastMoneyToolbar.module.css'

export default function FastMoneyToolbar() {
    const {
        p1Modal, setp1Modal,
        p2Modal, setp2Modal,
        a1, a2,
        a3, a4,
        a5, a6,
        a7, a8,
        a9, a10,
        setA1, setA2,
        setA3, setA4,
        setA5, setA6,
        setA7, setA8,
        setA9, setA10,
        setP1, setP2,
        setP3, setP4,
        setP5, setP6,
        setP7, setP8,
        setP9, setP10,
        p1, p2,
        p3, p4,
        p5, p6,
        p7, p8,
        p9, p10,
        setPlayer1Answers, setPlayer1Points,
        setPlayer2Points, setPlayer2Answers,
        showAnswers, setShowAnswers
    } = useFastMoney();


    const navigate = useNavigate();

    function toHome() {
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

    function saveP1Answers() {
        setPlayer1Answers([a1, a2, a3, a4, a5])
        setPlayer1Points([p1, p2, p3, p4, p5])
        setp1Modal(false)
    }

    function saveP2Answers() {
        setPlayer2Answers([a6, a7, a8, a9, a10]);
        setPlayer2Points([p6, p7, p8, p9, p10]);
        setp2Modal(false)
    }

    function toggleAnswers() {
        setShowAnswers(!showAnswers);
    }


    return (
        <>
            <div className={`${styles.fmTools} mt-5 gap-4`}>
                <button onClick={openPlayer1} className={styles.fmButton}>Player 1</button>
                <button onClick={openPlayer2} className={styles.fmButton}>Player 2</button>
                <button onClick={toggleAnswers} className={styles.fmButton}>Show / Hide</button>
                <button onClick={toHome} className={styles.fmButton}>End Game</button>
            </div>

            <Modal show={p1Modal}>
                <Modal.Body style={{background: 'grey', color: 'white'}}>

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
                    <div className={'d-flex justify-content-around'}>
                        <button onClick={closeP1} className='fm-button'> close</button>
                        <button onClick={saveP1Answers} className='fm-button'>save</button>
                    </div>
                </Modal.Body>
            </Modal>

            <Modal show={p2Modal}>
                <Modal.Body style={{background: 'black', color: 'white'}}>
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

                    <div className={'d-flex justify-content-around'}>
                        <button onClick={closeP2} className='fm-button'> close</button>
                        <button onClick={saveP2Answers} className='fm-button'>save</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}