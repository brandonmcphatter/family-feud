import styles from './MenuItem.module.css'

function MenuItem({children, onclick}) {
    return (
        <button onClick={onclick} className={styles.menuButton}><h1>{children}</h1></button>
    )
}

export default MenuItem;