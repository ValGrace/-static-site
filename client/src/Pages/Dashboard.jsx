import React, { useReducer, useState} from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'
import "../Components/Inputs.css"
import { Link, useNavigate } from 'react-router-dom'
// import { useAuth } from '../Context/UserContext'
import { account } from '../Utils/appwrite'
const initialState = {page : <Login />}
function reducer(state, action) {
    switch(action.type) {
        case 'loginpage':
          return { page: <Login />} 
        case 'signuppage':
            return { page: <Signup />}
        default:
            return { page: <h2>Loading....</h2>}      
    }
} 
const Dashboard = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    
    const [ error, setError] = useState('')
    const navigate = useNavigate() 
    const ghostLogin = async() => {
        try {
            setError('')
            await account.createAnonymousSession();
            navigate("/")  
        }
        catch {
             setError("Failed to Create anonymous account") 
        }  
    }
    return (
        <div className='dashboard'>
         <h2>Static Site Generator</h2>
         <div>Static site Image</div>
      <div className='dash' id='dash'>
            <div className='toggleForms'>
                <button onClick={() => dispatch({type: 'loginpage'})} className="type-btn">Login</button>
                <button onClick={() => dispatch({type: 'signuppage'})} className="type-btn">Signup</button>
                </div> 
            <React.Fragment>{state.page}</React.Fragment>
                       
            <button id="auth-btns" onClick={ghostLogin}>Login with Ghost account</button>
            <h5>{error}</h5>
         </div>
         <Link to="/">Home</Link>
       </div>
    )
}

export default Dashboard