import React from "react";
import { Link } from "react-router-dom"
import "../App.css";
import Logo from "../AppLogo.jpeg"


class Navbar extends React.Component {
    render() {
        return (
            <nav className="Navbar">
                <img src={Logo} alt="app logo" id="app-logo"/>
                <Link to ="/">Home</Link>
                <Link to ="/movies">Movies</Link>
                <Link to ="/people">People</Link>
                <Link to ="/locations">Locations</Link>
            </nav>
        )
    }
}

export default Navbar;