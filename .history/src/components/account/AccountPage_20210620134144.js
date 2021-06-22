import React, { useEffect, useState } from 'react'
import { auth, database } from '../../firebase/firebase'
import Navbar from '../Navbar/Navbar'
import TimeTable from '../timetable/TimeTable'
import classes from './account.module.scss'

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
        <div className={classes.container}>
            <nav>
                <Navbar user={user}/>
            </nav>
            <main>
                <div className={classes.points}>0 pkt.</div>
                <TimeTable />
            </main>

        </div>
    )
}

export default AccountPage
