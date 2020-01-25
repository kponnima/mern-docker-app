import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className="navbar-brand" href="#">Fixed navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        {/* <div>
                                <NavLink exact to="/" className="link" activeClassName="active">Home</NavLink>
                                <NavLink to="/about" className="link">About</NavLink>
                                <NavLink to="/contact" className="link">Contact Us</NavLink>
                                <NavLink to="/admin" className="link">Admin</NavLink>
                            </div> */}
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/" className="link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="link">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="link">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/admin" className="link">Admin</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header