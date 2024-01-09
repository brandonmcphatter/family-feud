import {useState} from "react";

function HiddenAnswer({children, answer, points}) {
    const [hide, setHide] = useState(true);
    function showAnswer() {
        setHide(false);
    }

    return (
        <div>
            {/*{hide &&*/}
            {/*<div className=' hidden-answer d-flex justify-content-center align-items-center' onClick={showAnswer}>*/}
            {/*    <span className='text-center display-1 fw-bolder'>{children}</span>*/}
            {/*</div>}*/}

            {hide &&
            <div className=' hidden-answer d-flex justify-content-center align-items-center' onClick={showAnswer}>
                <span className='text-center display-1 fw-bolder'>Answer</span>
            </div>}
        </div>
    );
}

export default HiddenAnswer;