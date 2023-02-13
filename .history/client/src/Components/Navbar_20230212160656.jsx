import { useState } from "react"
import {HiBars3BottomLeft} from 'react-icons/hi2'

import "./Navbar.css"
const Navbar = () => {
    return (
        <nav>
         <HiBars3BottomLeft/>
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