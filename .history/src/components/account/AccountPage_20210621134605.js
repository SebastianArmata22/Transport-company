import React, { useEffect, useState } from 'react'
import { auth, database } from '../../firebase/firebase'
import Navbar from '../Navbar/Navbar'
import Reservations from '../reservations/Reservations'
import TimeTable from '../timetable/TimeTable'
import classes from './account.module.scss'
import { useAuthState } from 'react-firebase-hooks/auth';

const AccountPage = () => {
    const [user, setUser]=useState({})
    const [userIsLogged]=useAuthState(auth)

useEffect(() => {
   userIsLogged &&  database.collection("users").doc(`${auth.currentUser.uid}`).get().then((doc) => {
        if (doc.exists) {
            console.log(doc.data(), "ds")
            setUser(doc.data());
        } else {
            console.log("No such document!");
        }
    }).catch((error) => {
        console.log("Error getting document:", error);
    });
}, [userIsLogged])
    return (
        <>
        {userIsLogged &&
        <div className={classes.container}>
            <nav>
                <Navbar user={user}/>
            </nav>
            <main>
                <div className={classes.points}>
                    <div >0 pkt.</div>
                </div>

                <TimeTable />
                <Reservations />
            </main>

        </div>}
        </>
    )
}

export default AccountPage
