import {useGame} from "../../context/GameContext";

export default function FastMoneyPoints() {
    const {fastMoneyScore} = useGame();

    return (
        <div className={'d-flex justify-content-end total-points-column px-0'}>

            <div className={'total-points-block d-flex  align-items-center gap-3'}>
                <div className='total-text'>
                    <span className={'fw-bolder display-4 ps-3'}>TOTAL</span>
                </div>
                <div className={'total-points d-flex justify-content-end'}>
                    <span className={'fw-bolder display-3 pe-2'}>{fastMoneyScore}</span>
                </div>

            </div>
        </div>
    )
}