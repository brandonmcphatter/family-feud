import SetupAnswers from "./SetupAnswers";
import SetupSuddenDeath from "./SetupSuddenDeath";
import styles from './SetupMain.module.css'
export default function SetupMain({roundDisplay}) {
    return (

        <div className={'animate__animated animate__bounceInUp animate__slow'}>
            <div className={styles.mainSetup}>
                {roundDisplay === 1 && <SetupAnswers/>}
                {roundDisplay === 2 && <SetupAnswers/>}
                {roundDisplay === 3 && <SetupAnswers/>}
                {roundDisplay === 4 && <SetupSuddenDeath/>}
                {roundDisplay === 5 && <SetupFastMoney/>}
                <div>
                    {roundDisplay === 1 && <h4>Round 1</h4>}
                    {roundDisplay === 2 && <h4>Round 2</h4>}
                    {roundDisplay === 3 && <h4>Round 3</h4>}
                    {roundDisplay === 4 && <h4>Sudden Death</h4>}
                    {roundDisplay === 5 && <h4>Fast Money</h4>}
                </div>
            </div>
        </div>
    )
}


function SetupFastMoney() {
    return (
        <div>Fast Money Setup</div>
    );
}




