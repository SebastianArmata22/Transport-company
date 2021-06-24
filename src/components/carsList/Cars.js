import React, { useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { NotificationManager } from 'react-notifications';
import { database } from '../../firebase/firebase';
import CarItem from './CarItem';
import classes from './cars.module.scss';

function Cars() {
    const [busData, setBusData] = useState({})
    const queryToBase = database.collection("buses")
    const [buses] = useCollectionData (queryToBase, {idField: 'id'})

    const addBus = async(e) => {
        e.preventDefault();
        await database.collection('buses').add({
            number: busData.number,
            location: busData.location
        }).then(() => {
             NotificationManager.success('Dodano autobus')

        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }

    const onChangeInput = (event) => {
        const {name, value} = event.target;
        setBusData(prevState => ({...prevState, [name]:value}))
    }

    return (
        <>
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Dodaj pojazd
            </h6>
        </div>
        <div className="card-body">
        <form onSubmit={addBus} className={classes.addCar}>
            <input type='text' value={busData.number} onChange={onChangeInput} name='number' placeholder='numer rejestracyjny'></input>
            <input type='text' value={busData.location} onChange={onChangeInput} name='location' placeholder='miejsce postoju'></input>
            <input type='submit' value='Dodaj'></input>
        </form>
        </div>
        </div>
        <table className={classes.tableCarList}>
            <tr>
                <th>Pojazd</th>
                <th>Przystanek</th>
                <th>Usuń</th>
            </tr>
            {buses&&buses.map(bus=><CarItem car={bus} />)}
        </table>
        </>
    )
}

export default Cars
