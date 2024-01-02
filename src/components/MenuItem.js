function MenuItem({children, onclick}) {
    return (
        <button onClick={onclick} className='border rounded-3'><h1>{children}</h1></button>
    )
}

export default MenuItem;