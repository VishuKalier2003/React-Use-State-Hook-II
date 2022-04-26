import { useState } from 'react'

type user = {
    name: string
    email: string
}

export const User = () => {
    const[user, setUser] = useState<null | user>(null)
    const handleLogin = () => {
        setUser({
            name: 'Vishu Kalier',
            email: 'vishukalier123@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is : {user?.name}</div>
            <div>User Email is : {user?.email}</div>
        </div>
    )
}