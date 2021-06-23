import React from 'react'
import classes from './reservations.module.scss'
import { FaTrash } from "react-icons/fa";
import { auth, database } from '../../firebase/firebase';
const Reservation = ({reservation}) => {
    console.log(reservation,"a")
    const { uid } = auth.currentUser
    const deleteReservation=()=>{
        database.collection("reservations").doc(uid).collection("reservation").doc(reservation.id).delete().then(() => {
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    return (
        <tr className={classes.row}>
            <td>{reservation.date}</td>
            <td>{reservation.busStopStart} {reservation.start}</td>
            <td>{reservation.busStopEnd} {reservation.end}</td>
            <td>{reservation.price} zł</td>
            <td className={classes.delete} onClick={deleteReservation}><FaTrash /></td>
        </tr>
    )
}

export default Reservation
