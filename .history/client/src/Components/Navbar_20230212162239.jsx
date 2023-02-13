import { useState } from "react"
import {HiBars3BottomLeft} from 'react-icons/hi2'
import { FaTimes} from 'react-icons/fa'
import "./Navbar.css"
const Navbar = () => {
    const [clickbar, setClickbar] = useState(false)
    return (
           <>
           
        <nav>
        <div id="bar" onClick={()=>setClickbar
        (!clickbar)}>{clickbar ? <>
           <FaTimes />
           
            <ul>
                <li>home</li>
                <li>about</li>
                <li>articles</li>
            </ul>
            <ul>
                <li>Login</li>
            </ul>
        
        </>: <HiBars3BottomLeft/>}
        </div>

        <div id="pages">
        <ul>
                <li>home</li>
                <li>about</li>
                <li>articles</li>
            </ul>
            <ul>
                <li>Login</li>
            </ul>
        </div>

</nav>

        
           
           
        
   
      


        </>
    )
}

export default Navbar