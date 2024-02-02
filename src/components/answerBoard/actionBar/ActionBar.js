import styles from './ActionBar.module.css'
import ShowQuestionBtn from "./ShowQuestionBtn";
import BackBtn from "./BackBtn";
import StrikeSection from "./StrikeSection";

function ActionBar() {

    return (
        <div className={styles.actionBar}>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <ShowQuestionBtn/>
            </div>
            <StrikeSection/>
            <div className='col-3 d-flex justify-content-center align-items-center'>
                <BackBtn/>
            </div>
        </div>
    );
}

export default ActionBar;