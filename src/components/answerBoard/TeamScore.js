import './TeamScore.css';

function TeamScore({teamScore, setScore, roundScore}) {

    function addRoundToTeamScore() {
        setScore(teamScore + roundScore);
    }

    return (
        <div className='animate__animated animate__slideInLeft teamScore  d-flex justify-content-center align-items-center  '>
            <div className='score fw-bolder display-1' onClick={addRoundToTeamScore}>{teamScore}</div>

        </div>
    );
}

export default TeamScore;