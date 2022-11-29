import React from 'react';
import { Link } from 'react-router-dom';


export const Navbar = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    &nbsp;
                    <Link className="navbar-brand" to="#">HOSPITAL</Link>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/Home ">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#">Link</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Login">Sign Up/Login</Link>
                            </li>
                        </ul>
                    </div>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>&nbsp;
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    &nbsp;

            </nav>

        </div >

    )
}
