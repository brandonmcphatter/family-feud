import '.././components/fastMoney/FastMoney.css'
import AnswerArea from "../components/fastMoney/AnswerArea";
import AnswerColumns from "../components/fastMoney/AnswerColumns";
import FastMoneyToolbar from "../components/fastMoney/FastMoneyToolbar";

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
            <FastMoneyToolbar/>
        </div>
    );
}


