import ResetStrikesBtn from "./ResetStrikesBtn";
import WrongAnswerBtn from "./WrongAnswerBtn";
import styles from './StrikeSection.module.css'

export default function StrikeSection() {
    return (
        <div className={`${styles.strikeSection} col-6 gap-4`}>
            <div className={'w-50 d-flex justify-content-center'}>
                <ResetStrikesBtn/>
            </div>
            <div className={'d-flex'}>
                <WrongAnswerBtn num={1}/>
                <WrongAnswerBtn num={2}/>
                <WrongAnswerBtn num={3}/>
            </div>
        </div>
    );
}

