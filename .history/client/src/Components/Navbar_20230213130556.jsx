import { useState } from "react"
import {HiBars3BottomLeft} from 'react-icons/hi2'
import { FaTimes} from 'react-icons/fa'
import { Link} from 'react-router-dom'
import "./Navbar.css"
const Navbar = () => {
    const [clickbar, setClickbar] = useState(false)
    return (
           <>
           
        
        <nav id="bar" onClick={()=>setClickbar
        (!clickbar)}>{clickbar ? <>
           <FaTimes size="2em"/>
           
            <ul>
               <Link to="/home"><li>home</li></Link>
                <Link to="/about"><li>about</li></Link>
                <Link to="/articles"><li>articles</li></Link>            
                <Link to="/"><li>Login</li></Link>
            </ul>
        
        </>: <HiBars3BottomLeft size="2em"/>}
        </nav>

        <nav id="pages">
        <ul>
                <li>home</li>
                <li>about</li>
                <li>articles</li>
            </ul>
            <ul>
                <li>Login</li>
            </ul>
     
</nav>
        </>
    )
}

export default Navbar