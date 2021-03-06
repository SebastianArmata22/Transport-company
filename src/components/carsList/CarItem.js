import React from 'react'
import classes from '../reservations/reservations.module.scss'
import { FaTrash } from "react-icons/fa";
import { database } from '../../firebase/firebase';
import { NotificationManager } from 'react-notifications';
const CarItem = ({car,user}) => {
    console.log(car)
    const deleteCar=()=>{
        database.collection("buses").doc(car.id).delete().then(() => {
            console.log("Document successfully deleted!")
             NotificationManager.success('Usunięto pojazd')

        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    return (
        <tr className={classes.row} title='cars'>
            <td>{car.number}</td>
            <td>{car.location}</td>
            { user.type !== 0 && <td className={classes.delete} onClick={deleteCar}><FaTrash /></td>}
        </tr>
    )
}

export default CarItem
