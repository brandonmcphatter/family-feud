import {Link} from "react-router-dom";

export default function WinScreen() {
    return (
        <div>
            <div>Winner</div>
            <Link to={'/'}>
                <button>End Game</button>
            </Link>
        </div>
    )
}