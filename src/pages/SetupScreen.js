import {Link} from "react-router-dom";

function SetupScreen() {
    return (
        <div>
        <div>THIS IS THE SETUP PAGE </div>
        <Link to={'/'}>
            <button>Home</button>
        </Link>
        </div>
    );
}

export default SetupScreen;

