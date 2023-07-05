import { useState, useRef} from 'react'
import { account } from '../Utils/appwrite'
import { useNavigate} from 'react-router-dom'
import { v4 as uuidv4} from 'uuid'
// import { useAuth } from '../Context/UserContext'
import "./Inputs.css"
const Signup = () => {
    const accountEmail = useRef()
    const accountPass = useRef()
    const userName = useRef()
    const [error, setError] = useState()
    const navigate = useNavigate()
    // const { signup} = useAuth()
    const [loading, setLoading] = useState('')
    const signupSession = async (e) => {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await account.create(uuidv4(), accountEmail.current.value, accountPass.current.value, userName.current.value)
            navigate("/")
            }
            catch (error) {
              
                    console.log(error)
                    setError('Failed to create an accoount')
               
            }
            setLoading(false)
            
           }
    return (
        <form onSubmit={signupSession} className="signupForm">
            <h2>{error}</h2>
        <input type='text' placeholder='your name' ref={userName} />    
        <input type='email' placeholder='email address' ref={accountEmail} />
        <input type='password' placeholder='password' ref={accountPass} />
        <button disabled={loading} type='submit' id='sign'>Signup</button>
    </form>
    )
}

export default Signup