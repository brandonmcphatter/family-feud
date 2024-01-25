import '.././components/fastMoney/FastMoney.css'

export default function FastMoney() {
    return (
        <div>
            <div className={'mt-5'}>
                <AnswerArea>
                    <div className={'mt-5'}>
                        <AnswerColumns/>
                    </div>
                </AnswerArea>
            </div>
        </div>
    )
        ;
}

function AnswerArea({children}) {
    return (
        <div className='fast-money'>
            {children}
        </div>
    )
}

function AnswerColumns() {
    return (
        <div className={'answer-columns d-flex gap-3'}>
            <div className={'col-6 d-flex flex-column gap-3'}>
                <FastMoneyAnswerBlock/>
                <FastMoneyAnswerBlock/>
                <FastMoneyAnswerBlock/>
                <FastMoneyAnswerBlock/>
                <FastMoneyAnswerBlock/>
                <div className={'my-5 d-flex justify-content-end'}>
                    <FastMoneyPoints/>
                </div>
            </div>
            <div className={'col-6 d-flex flex-column gap-3'}>
                <FastMoneyAnswerBlock/>
                <FastMoneyAnswerBlock/>
                <FastMoneyAnswerBlock/>
                <FastMoneyAnswerBlock/>
                <FastMoneyAnswerBlock/>
            </div>
        </div>
    )
}

function FastMoneyAnswerBlock() {
    return (
        <div className={'fast-money-answer d-flex gap-1 row'}>
            <div className={'answer-block col-10 d-flex justify-content-start align-items-center'}>
                <span className={'fw-bolder display-6'}></span>
            </div>
            <div className={'points-block col-2 d-flex justify-content-center align-items-center'}>
                <span className={'fw-bolder display-5'}></span>
            </div>
        </div>
    );
}

function FastMoneyPoints() {
    return (
        <div className={'d-flex justify-content-end total-points-column px-0'}>

            <div className={'total-points-block d-flex  align-items-center gap-3'}>
                <div className='total-text'>
                    <span className={'fw-bolder display-4 ps-3'}>TOTAL</span>
                </div>
                <div className={'total-points d-flex justify-content-end'}>
                    <span className={'fw-bolder display-3 pe-2'}></span>
                </div>

            </div>
        </div>
    )
}


