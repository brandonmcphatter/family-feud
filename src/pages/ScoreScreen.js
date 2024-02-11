import {useNavigate} from "react-router";
import familyFeudLogo from '../images/big-ff-logo.png'
import {useGame} from "../context/GameContext";
import TeamScore from "../components/answerBoard/TeamScore";
import {FaHouseChimney} from "react-icons/fa6";
export default function ScoreScreen() {
    const {team1, t1Score, team2, t2Score} = useGame();
    const navigate = useNavigate();

    return (
        <div className='d-flex flex-column gap-5 animate__animated animate__zoomIn pt-3'>

            {/*IMAGE*/}
            <div className={'d-flex justify-content-center align-items-start'}>
                <img src={familyFeudLogo} alt={'Family Feud Logo'} width={'50%'} height={'30%'}/>
            </div>

            <div className={'d-flex justify-content-evenly gap-3'}>

                <div className={'d-flex flex-column gap-4 align-items-center'}>
                    <h1 className={'text-uppercase text-white fw-bolder'}>{team1}</h1>
                    <TeamScore teamScore={t1Score}/>
                </div>

                <div className={'d-flex flex-column justify-content-center align-items-center gap-3'}>
                    <button
                        className={'btn btn-lg btn-dark px-5 py-3 btn-outline-primary border border-3 rounded-4 border-primary-subtle text-white text-uppercase fw-bolder'}
                        onClick={() => navigate('/game/round-1')}>Round 1
                    </button>
                    <button
                        className={'btn btn-lg btn-dark px-5 py-3 btn-outline-primary border border-3 rounded-4 border-primary-subtle text-white text-uppercase fw-bolder'}
                        onClick={() => navigate('/game/round-2')}>Round 2
                    </button>
                    <button
                        className={'btn btn-lg btn-dark px-5 py-3 btn-outline-primary border border-3 rounded-4 border-primary-subtle text-white text-uppercase fw-bolder'}
                        onClick={() => navigate('/game/round-3')}>Round 3
                    </button>
                    <button
                        className={'btn btn-lg btn-dark px-5 py-3 btn-outline-primary border border-3 rounded-4 border-primary-subtle text-white text-uppercase fw-bolder'}
                        onClick={() => navigate('/game/round-4')}>Round 4
                    </button>
                    <button
                        className={'btn btn-lg btn-dark px-3 py-3 btn-outline-danger border border-3 rounded-4 border-danger-subtle text-white text-uppercase fw-bolder'}
                        onClick={() => navigate('/game/sudden-death')}>Sudden Death
                    </button>
                    <button
                        className={'btn btn-lg btn-dark px-5 py-3 btn-outline-success border border-3 rounded-4 border-success-subtle text-white text-uppercase fw-bolder'}
                        onClick={() => navigate('/game/fast-money')}>Fast Money
                    </button>
            <button className={'btn btn-lg btn-dark px-5 py-2 btn-outline-primary border border-3 rounded-4 border-primary-subtle text-white text-uppercase fw-bolder'} onClick={() => navigate('/')}><span className={'fs-3'}><FaHouseChimney /></span>
            </button>
                </div>

                <div className={'d-flex flex-column gap-4 align-items-center'}>
                    <h1 className={'text-uppercase text-white fw-bolder'}>{team2}</h1>
                    <TeamScore teamScore={t2Score} />
                </div>
            </div>
            <div className={'d-flex justify-content-end'}>
            </div>
        </div>
    );
}

