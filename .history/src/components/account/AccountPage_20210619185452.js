import React from 'react'
import { auth, database } from '../../firebase/firebase'
import Navbar from '../Navbar/Navbar'


const AccountPage = () => {
    const userData=database.collection("users").doc(`${auth.currentUser.uid}`)
    console.log(userData)

    return (
        <div>
            <Navbar />
        </div>
    )
}

export default AccountPage
