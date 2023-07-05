import React, {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import { account } from '../Utils/appwrite'
import "./Inputs.css"
import { useAuth } from '../Context/UserContext'

const Login = () => {
    const [error, setError] = useState('')
    const userEmail = useRef()
    const userPass = useRef()
    const navigate = useNavigate()
    const { login} = useAuth() 
    const userLogin = async (event) => {

        event.preventDefault()
        
        try {
            setError('')
            await login(userEmail.current.value, userPass.current.value) 
            navigate('/')
        }
        catch {
            setError("Login failed. Wrong credentials!!!")
        }

    }
    return (
        <>
        {error && <p>{error}</p>}
        <form onSubmit={userLogin} className="signupForm">
             <input type='email' placeholder='email address' ref={userEmail} />
             <input type='password' placeholder='password' ref={userPass} />
             <button id='sign'>Login</button>
             </form>
            
        </>
    )
}

export default Login

