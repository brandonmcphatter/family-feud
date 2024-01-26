import './MenuItem.css'

function MenuItem({children, onclick}) {
    return (
        <button onClick={onclick} className='menu-button'><h1>{children}</h1></button>
    )
}

export default MenuItem;