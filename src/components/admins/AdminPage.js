import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Schedule from '../workSchedule/Schedule';
import Cars from '../carsList/Cars';
import classes from './admins.module.scss';
import Workers from '../workersList/Workers';
import AdminReservations from '../adminReservations/AdminReservations';
import { auth, database } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const AdminPage = () => {
    const [buttonId, setButtonId] = useState('');
    const [userIsLogged]=useAuthState(auth);

    const onClickEvent = event => {
        setButtonId(event.target.id);
    }

    const [user, setUser]=useState({})

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
        <div className={classes.container}>
            <nav>
                <Navbar user={user}/>
            </nav>
            <main>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                        {
                        user.type === 0 ? 
                        <div>
                            <button id='grafik' className={classes.buttonNav} onClick={onClickEvent}>Grafik</button>
                            <button id='samochody' className={classes.buttonNav} onClick={onClickEvent}>Samochody</button>
                            <button id='pracownicy' className={classes.buttonNav} onClick={onClickEvent}>Pracownicy</button>
                            <button id='przejazdy' className={classes.buttonNav} onClick={onClickEvent}>Przejazdy</button>
                        </div> : ''
                        }
                        </h6>
                    </div>
                    <div className="card-body">
                        {
                        buttonId === '' && <Schedule />
                        }
                        {
                        buttonId === 'grafik' && <Schedule />
                        }
                        {
                        buttonId === 'samochody' && <Cars />
                        }
                        {
                        buttonId === 'pracownicy' && <Workers />
                        }
                        {
                        buttonId === 'przejazdy' && <AdminReservations />
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminPage;
