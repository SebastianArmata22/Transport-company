import React, { useState } from 'react'
import { GiTicket } from "react-icons/gi";
import classes from './tickets.module.scss'
import { FaTrash } from "react-icons/fa";
import TicketQr from './TicketQr';
import { auth, database } from '../../firebase/firebase';
import { NotificationManager } from 'react-notifications';
const Ticket = ({ticket}) => {
    const { uid } = auth.currentUser
    const [showCode, setShowCode]=useState(false)
    const showQr=()=>{
        setShowCode(true)
    }
    const deleteTicket=()=>{
        database.collection("tickets").doc(uid).collection("ticket").doc(ticket.id).delete().then(() => {
            console.log("Document successfully deleted!");
            NotificationManager.success('Usunięto bilet')

        }).catch((error) => {
            console.error("Error removing document: ", error);
        });
    }
    return (
        <tr className={classes.row}>
            <td>{ticket.date}</td>
            <td>{ticket.busStopStart} {ticket.start}</td>
            <td>{ticket.busStopEnd} {ticket.end}</td>
            <td>{ticket.price} zł</td>
        <td className={classes.ticket} onClick={showQr}><GiTicket /></td>
        <td className={classes.ticket} onClick={deleteTicket}><FaTrash /></td>
        {showCode && <TicketQr ticket={ticket} setShowCode={setShowCode}/>}
    </tr>
    )
}

export default Ticket
