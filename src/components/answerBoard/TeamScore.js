import styles from './TeamScore.module.css';

function TeamScore({teamScore, setScore, roundScore}) {

    function addRoundToTeamScore() {
        setScore(teamScore + roundScore);
    }

    return (
        <div className={`animate__animated animate__slideInLeft ${styles.teamScore}`}>
            <div className={`${styles.score} display-1`} onClick={addRoundToTeamScore}>{teamScore}</div>
        </div>
    );
}

export default TeamScore;