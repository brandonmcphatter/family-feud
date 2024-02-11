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
        <div className={'d-flex justify-content-around mt-4'}>
            <button className={'btn btn-primary btn-outline-light px-4'} onClick={toggleTimer}>Clock: {timer}</button>
            <button className={'btn btn-light  btn-outline-dark px-5'} onClick={tryAnswerAgain}>&#10060;</button>
            <button className={'btn bg-danger btn-outline-dark px-3'} onClick={close} > close</button>
            <button className={'btn btn-success btn-outline-dark bg-success px-3'} onClick={save}>save</button>
        </div>
    )
}