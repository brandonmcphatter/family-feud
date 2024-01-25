import FastMoneyAnswerBlock from "./FastMoneyAnswerBlock";
import FastMoneyPoints from "./FastMoneyPoints";

export default function AnswerColumns() {
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