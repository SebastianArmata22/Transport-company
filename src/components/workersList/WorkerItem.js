import React from 'react'
import classes from '../reservations/reservations.module.scss'
import { FaTrash } from "react-icons/fa";
import { database } from '../../firebase/firebase';
import { NotificationManager } from 'react-notifications';
const WorkerItem = ({worker}) => {
    console.log(worker)
    const deleteWorker=()=>{
        database.collection("users").doc(worker.id).delete().then(() => {
            console.log("Document successfully deleted!")
             NotificationManager.success('Usunięto pracownika')

        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    return (
        worker.type !== 1 && 
        <tr className={classes.row}>
            <td>{worker.name}</td>
            <td>{worker.lastName}</td>
            <td>
                {worker.type === 0 && 'właściciel'}
                {worker.type === 2 && 'kierowca'}
                {worker.type === 3 && 'pracownik sekretariatu'}
            </td>
            <td className={classes.delete} onClick={deleteWorker}><FaTrash /></td>
        </tr>
    )
}

export default WorkerItem
