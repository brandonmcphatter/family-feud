import {Link} from "react-router-dom";

export default function ScoreScreen() {
    return (
        <div className='d-flex justify-content-evenly'>
            <Link to={'/game/round-1'}>
                <button>Round 1</button>
            </Link>

            <Link to={'/game/round-2'}>
                <button>Round 2</button>
            </Link>

            <Link to={'/game/round-3'}>
                <button>Round 3</button>
            </Link>
            <Link to={'/game/sudden-death'}>
                <button>Sudden Death</button>
            </Link>
            <Link to={'/game/fast-money'}>
                <button>Fast Money</button>
            </Link>
            <Link to={'/'}>
                <button>Home</button>
            </Link>
        </div>
    );
}

