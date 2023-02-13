import React, { useReducer} from 'react'
import Login from '../Components/Login'
import Signup from '../Components/Signup'

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
    return (
        <div className='dashboard'>
         <h2>Static Site Generator</h2>
         <div>Static site Image</div>
         <div className='dash' id='dash'>
            <div className='toggleForms'>
                <button onClick={() => dispatch({type: 'loginpage'})} className="type-btn">Login</button>
                <button onClick={() => dispatch({type: 'signuppage'}) 
                } className="type-btn">Signup</button>
                </div> 
            <React.Fragment>{state.page}</React.Fragment>
                       
            <button id="auth-btns">Login with Github account</button>
            <button id="auth-btns">Login with Google account</button>
         </div>
       </div>
    )
}

export default Dashboard