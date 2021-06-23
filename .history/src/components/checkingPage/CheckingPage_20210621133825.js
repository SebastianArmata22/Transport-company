import React from 'react'
import { useHistory } from 'react-router'
import { auth } from '../../firebase/firebase'
import AccountPage from '../account/AccountPage'
import { useAuthState } from 'react-firebase-hooks/auth';

const CheckingPage = () => {
    const [userIsLogged]=useAuthState(auth)
    const history=useHistory()
    setTimeout(()=>history.push('/login'), 3000)
    return (
        <div>
            {userIsLogged ? <AccountPage />:  "Loading..."}
        </div>
    )
}

export default CheckingPage
