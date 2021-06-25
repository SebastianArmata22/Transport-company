import React, {useEffect, useState} from 'react'
import Navbar from '../Navbar/Navbar'
import WorkSchedule from '../workSchedule/Schedule';
import Cars from '../carsList/Cars';
import classes from './admins.module.scss';
import Workers from '../workersList/Workers';
import { auth, database } from '../../firebase/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import Journeys from '../journeys/Journeys';

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
                        <div>
                            <button id='grafik' className={classes.buttonNav} onClick={onClickEvent}>Grafik</button>
                            <button id='samochody' className={classes.buttonNav} onClick={onClickEvent}>Samochody</button>
                            {user.type !== 2 && <button id='pracownicy' className={classes.buttonNav} onClick={onClickEvent}>Pracownicy</button>}
                            <button id='przejazdy' className={classes.buttonNav} onClick={onClickEvent}>Przejazdy</button>
                        </div>
                        </h6>
                    </div>
                    <div className="card-body">
                        {
                        buttonId === '' && <WorkSchedule user={user}/>
                        }
                        {
                        buttonId === 'grafik' && <WorkSchedule user={user}/>
                        }
                        {
                        buttonId === 'samochody' && <Cars user={user}/>
                        }
                        {
                        buttonId === 'pracownicy' && <Workers user={user}/>
                        }
                        {
                        buttonId === 'przejazdy' && <Journeys user={user}/>
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminPage;
