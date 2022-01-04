import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <div className="container-fluid d-flex flex-grow-1">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse d-flex flex-grow-1 text-right"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 flex-nowrap">
                        {props.user ? (
                            <Dropdown />
                        ) : (
                            <React.Fragment>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/user/login"
                                    >
                                        Login
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink
                                        className="nav-link"
                                        to="/user/signup"
                                    >
                                        Signup
                                    </NavLink>
                                </li>
                            </React.Fragment>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
