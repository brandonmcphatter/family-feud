function HomeScreen({children}) {
    return (
        <div className="homeScreen container-fluid d-flex flex-row justify-content-evenly align-items-end">
            {children}
        </div>
    );
}

export default HomeScreen;