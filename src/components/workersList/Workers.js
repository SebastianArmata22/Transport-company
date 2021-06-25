import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth, database } from '../../firebase/firebase';
import classes from './workers.module.scss';
import WorkerItem from './WorkerItem';
import Select from 'react-select';

const jobTitles = [
    {value: 'właściciel', label: 'Właściciel'},
    {value: 'kierowca', label: 'Kierowca'},
    {value: 'pracownik sekretariatu', label: 'Pracownik Sekretariatu'}
];

function Workers() {
    const queryToBase = database.collection("users")
    const [workers] = useCollectionData (queryToBase, {idField: 'id'})
    const usersCollection = database.collection('users')
    const [newUser, setNewUser]=useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
        type: null
    })
    const [uType, setUtype] = useState({})

    const changeUser=(event)=>{
        const {name, value}=event.target
        setNewUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const changeUserType = (value) => {
        setUtype({type: value})
    }

    const registrarion=(event)=>{
        event.preventDefault()
        if(newUser.password===newUser.repeatPassword){
            auth.createUserWithEmailAndPassword(newUser.email, newUser.password)
            .then(async (userCredential) => {
              const userData = userCredential.user;
              switch (uType.type.value) {
                case 'właściciel':
                  newUser.type = 0;
                  break;
                case 'kierowca':
                    newUser.type = 2;
                    break;
                case 'pracownik sekretariatu':
                  newUser.type = 3;
                  break;
                default:
                  console.log('wrong user type');
              }
              await usersCollection.doc(userData.uid).set({name: newUser.name, lastName: newUser.lastName, email: newUser.email, type: newUser.type}).then(() => {
                console.log("Document successfully written!");
            });
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode, errorMessage)
            });
        }
    }

    return (
        <>
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Dodaj pracownika
            </h6>
        </div>
        <div className="card-body">
        <form onSubmit={registrarion} className={classes.addWorker}>
            <input name="name" type="text" placeholder="Imię" value={newUser.name} onChange={changeUser}></input>
            <input name="lastName" type="text" placeholder="Nazwisko" value={newUser.lastName} onChange={changeUser}></input>
            <Select name='job' value={uType.type} options={jobTitles} onChange={changeUserType} placeholder='Stanowisko'/>
            <input name="email" type="email" placeholder="Email" value={newUser.email} onChange={changeUser}></input>
            <input name="password" type="password" placeholder="Hasło" value={newUser.password} onChange={changeUser}></input>
            <input name="repeatPassword" type="password" placeholder="Powtórz hasło" value={newUser.repeatPassword} onChange={changeUser}></input>
            <input type='submit' value='Dodaj'></input>
        </form>
        </div>
        </div>
        <table className={classes.tableWorkerList}>
            <tr>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Stanowisko</th>
                <th>Usuń</th>
            </tr>
            {workers&&workers.map(worker=><WorkerItem worker={worker} />)}
        </table>
        </>
    )
}

export default Workers
