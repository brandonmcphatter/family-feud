
import {useNavigate} from "react-router";
import styles from './SetupButtonBar.module.css'

export default function SetupButtonBar({roundDisplay, setRoundDisplay}) {
    const navigate = useNavigate();
    function changeDisplay(x) {
        setRoundDisplay(x);
    }

    return (

            <div className={styles.setupButtonBar}>
                <button className={roundDisplay === 0 ? styles.active : styles.setupButton} onClick={() => changeDisplay(0)}>Round 1</button>
                <button className={roundDisplay === 1 ? styles.active : styles.setupButton} onClick={() => changeDisplay(1)}>Round 2</button>
                <button className={roundDisplay === 2 ? styles.active : styles.setupButton} onClick={() => changeDisplay(2)}>Round 3</button>
                <button className={roundDisplay === 3 ? styles.active : styles.setupButton} onClick={() => changeDisplay(3)}>Round 4</button>
                <button className={roundDisplay === 4 ? styles.active : styles.setupButton} onClick={() => changeDisplay(4)}>Sudden Death</button>
                <button className={roundDisplay === 5 ? styles.active : styles.setupButton} onClick={() => changeDisplay(5)}>Fast Money</button>
                <button className={styles.homeButton} onClick={() => navigate('/')}>Home</button>
            </div>

    );
}

