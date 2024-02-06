import styles from './SetupScreen.module.css'
import SetupButtonBar from "../components/setup/SetupButtonBar";
import SetupMain from "../components/setup/SetupMain";
import SetupHeader from "../components/setup/SetupHeader";
import SetupGameDataToggle from "../components/setup/SetupGameDataToggle";
import {useState} from "react";

function SetupScreen() {
    const [roundDisplay, setRoundDisplay] = useState(0);

    return (
        <div className={`${styles.setupBody} animate__animated`}>
            <div className={'d-flex flex-column justify-content-center'}>
                <SetupHeader/>
                <SetupButtonBar roundDisplay={roundDisplay} setRoundDisplay={setRoundDisplay}/>
                <SetupMain roundDisplay={roundDisplay}/>
                <div className={'mt-5'}>
                    <SetupGameDataToggle/>
                </div>
            </div>
        </div>

    );
}


export default SetupScreen;

