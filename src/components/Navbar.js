import react from "react";
function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-transparent float-end me-5">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Aidszanium</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Game</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blogs</a>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Navbar;