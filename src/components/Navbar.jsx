import React from 'react'
import { faThLarge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
    return (
        <nav className="p-2 navbar sticky-top navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">/nafladiva/</a>
                <button className="p-3 navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faThLarge} />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#aboutsect">about</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#projectsect">projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contactsect">contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
