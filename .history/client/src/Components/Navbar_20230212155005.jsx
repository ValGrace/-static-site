import { useState } from "react"
// import {fa-light, fa-bars-staggered} from 'react-icons'
import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
        <FontAwesomeIcon icon="fa-light fa-bars-staggered" />
            <ul>
                <li>home</li>
                <li>about</li>
                <li>articles</li>
            </ul>
            <ul>
                <li>Login</li>
            </ul>
        </nav>
    )
}

export default Navbar