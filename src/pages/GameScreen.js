import { Outlet} from "react-router-dom";
import styles from './GameScreen.module.css'
function GameScreen() {
    return (
        <div className={styles.gameScreen}>
            <Outlet/>
        </div>
    );
}

export default GameScreen;