import React, {useState, useRef} from 'react'
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'
const Login = () => {
    const [error, setError] = useState('')
    const userEmail = useRef()
    const userPass = useRef()
    const navigate = useNavigate()
    const { login} = useAuth()
    const userLogin = async (event) => {
        event.preventDefault()
        try {
            await login(userEmail.current.value, userPass.current.value) 
            navigate('/homepage')
        }
        catch {
            setError("Login failed. Wrong credentials!!!")
        }

    }
    return (
        <>
        {error && <p>{error}</p>}
        <form onSubmit={userLogin}>
             <input type='email' placeholder='email address' ref={userEmail} />
             <input type='password' placeholder='password' ref={userPass} />
             <button>Login</button>
             </form>
        </>
    )
}

export default Login

