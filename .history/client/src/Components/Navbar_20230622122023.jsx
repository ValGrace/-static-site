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
               <Link to="/"><li>home</li></Link>
                <Link to="/about"><li>about</li></Link>
                <Link to="/articles"><li>articles</li></Link>            
                <Link to="/login"><li>Login</li></Link>
            </ul>
        
        </>: <HiBars3BottomLeft size="2em"/>}
        </nav>

        <nav id="pages">
        <ul>
                <Link to="/"><li>home</li></Link>
                <Link to="/about"><li>about</li></Link>
                <Link to="/articles"><li>articles</li></Link>
            </ul>
            <ul>
                <li><Link to="/login">Login</Link></li>
            </ul>
     
</nav>
        </>
    )
}

export default Navbar