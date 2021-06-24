import React from 'react'
import classes from '../reservations/reservations.module.scss'
import { FaTrash } from "react-icons/fa";
import { auth, database } from '../../firebase/firebase';
import { NotificationManager } from 'react-notifications';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const AdminReservation = ({reservation,setreservationsData}) => {
    const queryToBase = database.collection("reservations")
    const [reservations] = useCollectionData (queryToBase, {idField: 'id'})

    console.log(reservation)
    const deleteReservation=()=>{
        database.collection("reservations").doc(reservation.idUser).collection("reservation").doc(reservation.id).delete().then(() => {
            console.log("Document successfully deleted!")
             NotificationManager.success('Usunięto rezerwacje')
             reservations && reservations.map(id => {
                setreservationsData([])
                database.collection("reservations").doc(id.id).collection("reservation").get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        const newObjectRes = {...doc.data(), idUser: id.id, id: doc.id}
                        setreservationsData(prevState => [...prevState, newObjectRes]);
                    });
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            })

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

export default AdminReservation
