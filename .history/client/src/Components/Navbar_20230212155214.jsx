import { useState } from "react"
import {FaLight, FaBarsStaggered} from 'react-icons/fa'

import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
         <FaBarsStaggered />
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