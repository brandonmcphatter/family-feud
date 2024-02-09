import {useNavigate} from "react-router";
import familyFeudLogo from '../images/big-ff-logo.png'
export default function ScoreScreen() {

    const navigate = useNavigate();

    return (
        <div className='d-flex flex-column  gap-3'>

                <img src={familyFeudLogo} alt={'Family Feud Logo'} width={'70%'}/>

            <div>
            </div>

            <div className={'d-flex flex-column gap-3'}>
                <h1>NAV BUTTONS</h1>
                <div className={'d-flex gap-4'}>
                    <button onClick={() => navigate('/game/round-1')}>Round 1</button>
                    <button onClick={() => navigate('/game/round-2')}>Round 2</button>
                    <button onClick={() => navigate('/game/round-3')}>Round 3</button>
                    <button onClick={() => navigate('/game/round-4')}>Round 4</button>
                </div>

                <div className={'d-flex gap-4'}>
                    <button onClick={() => navigate('/game/sudden-death')}>Sudden Death</button>
                    <button onClick={() => navigate('/game/fast-money')}>Fast Money</button>
                </div>
            </div>
            <div>
                <button onClick={() => navigate('/')}>Home</button>
            </div>
        </div>
    );
}

