import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    return (
        <>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-3 fw-bolder text-white" to="/">Daily-Dose News</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav" style={{ marginRight: "11.5rem" }}>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active fw-semibold text-white mx-1" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold text-white mx-1" to="/business"
                                >Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold text-white mx-1" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold text-white mx-1" to="/health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold text-white mx-1" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold text-white mx-1" to="/science">Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link fw-semibold text-white mx-1" to="/technology">Technology</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar