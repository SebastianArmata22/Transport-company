import React from 'react'
import { auth, database } from '../../firebase/firebase'
import Navbar from '../Navbar/Navbar'


const AccountPage = () => {
    const userData=database.collection("users").doc(`${auth.currentUser.uid}`)
    userData.get().then((doc) => {
        if (doc.exists) {
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });


    return (
        <div>
            <Navbar />
        </div>
    )
}

export default AccountPage
