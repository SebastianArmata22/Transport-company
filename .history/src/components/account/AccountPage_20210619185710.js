import React from 'react'
import { auth, database } from '../../firebase/firebase'
import Navbar from '../Navbar/Navbar'


const AccountPage = () => {
    const userData=database.collection("users").doc(`${auth.currentUser.uid}`)
    docRef.get().then((doc) => {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        console.log("No such document!");
    }


    return (
        <div>
            <Navbar />
        </div>
    )
}

export default AccountPage
