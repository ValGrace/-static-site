import { useState, useRef} from 'react'
import { account } from '../Utils/appwrite'
import { useNavigate} from 'react-router-dom'
import { v4 as uuidv4} from 'uuid'
import "./Inputs.css"
const Signup = () => {
    const accountEmail = useRef()
    const accountPass = useRef()
    const userName = useRef()
    const navigate = useNavigate()
    const [loading, setLoading] = useState(false)
    const signupSession = async (e) => {
        e.preventDefault()

        account.create(uuidv4(), userName.current.value, accountEmail.current.value, accountPass.current.value).then(
            function(response){
                console.log(response)
            navigate("/")
            },
            function(error) {
                console.log(error)
            }
        )
    }
    return (
        <form onSubmit={signupSession} className="signupForm">
        <input type='text' placeholder='your name' ref={userName} />    
        <input type='email' placeholder='email address' ref={accountEmail} />
        <input type='password' placeholder='password' ref={accountPass} />
        <button disabled={loading} type='submit' id='sign'>Signup</button>
    </form>
    )
}

export default Signup