import React, { useState } from 'react'
import { auth, database } from '../../firebase/firebase'
import Navbar from '../Navbar/Navbar'


const AccountPage = () => {
    const currentuser= auth.currentUser
    const userData=database.collection("users").doc(`${currentuser.uid}`)
    const [user, setUser]=useState({})
    userData.get().then((doc) => {
        if (doc.exists) {
            setUser(doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


    return (
        <div>
            <Navbar user={user}/>
        </div>
    )
}

export default AccountPage
