import React, { useEffect, useState } from 'react'
import { auth, database } from '../../firebase/firebase'
import Navbar from '../Navbar/Navbar'
import TimeTable from '../timetable/TimeTable'


const AccountPage = () => {
    const userData=database.collection("users").doc(`${auth.currentUser.uid}`)
    const [user, setUser]=useState({})

useEffect(() => {
    userData.get().then((doc) => {
        if (doc.exists) {
            setUser(doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}, [userData])
    return (
        <div>
            <Navbar user={user}/>
            <TimeTable />
        </div>
    )
}

export default AccountPage
