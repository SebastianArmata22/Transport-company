import React from 'react'
import { useHistory } from 'react-router'
import AccountPage from '../account/AccountPage'

const CheckingPage = () => {
    const user= auth.currentUser
    const history=useHistory()
    setTimeout(()=>history.push('/login'), 3000)
    return (
        <div>
            {user ? <AccountPage />:  "Loading..."}
        </div>
    )
}

export default CheckingPage
