import {useFastMoney} from "../../context/FastMoneyContext";
import styles from './FastMoneyPoints.module.css'

export default function FastMoneyPoints() {
    const {fastMoneyScore} = useFastMoney();

    return (
        <div className={`d-flex justify-content-end ${styles.totalPointsColumn} px-0`}>

            <div className={`${styles.totalPointsBlock} d-flex align-items-center gap-3`}>
                <div className={styles.totalText}>
                    <span className={'fw-bolder display-4 ps-3'}>TOTAL</span>
                </div>
                <div className={styles.totalPoints}>
                    <span className={'fw-bolder display-3 pe-2'}>{fastMoneyScore}</span>
                </div>
            </div>
        </div>
    )
}