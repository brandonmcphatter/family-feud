import tryAgain from '../../audio/fastMoneyTryAgain.mp3'
import timeUp from '../../audio/fastMoneyTimeUp.mp3';
import useSound from "use-sound";
import {useEffect, useState} from "react";


export default function ModalToolBar({close, save, time}) {
    const [playTryAgain] = useSound(tryAgain, {volume: 1});
    const [playTimeUp] = useSound(timeUp, {volume: 1});
    const [timer, setTimer] = useState(time);
    const [offOn, setOffOn] = useState(false);

    function toggleTimer() {
        setOffOn(!offOn);
    }

    useEffect(() => {
        if (offOn === true) {
            let countdown = setInterval(() => {
                setTimer((prevTimer) => {
                    if (prevTimer <= 1) {
                        clearInterval(countdown);
                        playTimeUp();
                        setOffOn(false);
                        return 0;
                    } else {
                        return prevTimer - 1;
                    }
                });
            }, 1000);

            return () => clearInterval(countdown);
        }
    }, [offOn]);

    function tryAnswerAgain() {
        playTryAgain();
    }

    return (
        <div className={'d-flex justify-content-around'}>
            <button onClick={toggleTimer}>Clock: {timer}</button>
            <button onClick={tryAnswerAgain}>&#10060;</button>
            <button onClick={close} className='fm-button'> close</button>
            <button onClick={save} className='fm-button'>save</button>
        </div>
    )
}