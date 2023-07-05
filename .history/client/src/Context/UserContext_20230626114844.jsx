import React, { useContext, useEffect, useState} from "react"
import { account} from "../Utils/appwrite"

const UserContext = React.createContext()

export function useAuth() {
    return useContext(UserContext)
}

export default function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    function signup(userid,email, password, name){
        return account.create(userid, email, password, name)
    }
    function login(email, password) {
        return account.createEmailSession(email, password)
    }
    function anonymous() {
        return account.createAnonymousSession()
    }
    useEffect(()=> {
        const unsubscribe = account.get().then(function (user) {
            setCurrentUser(user)
            setLoading(false)
        }) 
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        signup,
        login,
        anonymous
    }
    return (
        <div>
            <UserContext.Provider value={value}>
                {!loading && children}
            </UserContext.Provider>
        </div>
    )
}