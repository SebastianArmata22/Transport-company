import React, { useState } from 'react'
import { GiTicket } from "react-icons/gi";
import classes from '../buyTickets/tickets.module.scss'
import { FaTrash } from "react-icons/fa";
import TicketQr from './TicketQr';
import { database } from '../../firebase/firebase';
import { NotificationManager } from 'react-notifications';
import { useCollectionData } from 'react-firebase-hooks/firestore';
const Ticket = ({ticket, setTicketsData}) => {
    const queryToBase = database.collection("tickets")
    const [tickets] = useCollectionData (queryToBase, {idField: 'id'})

    const [showCode, setShowCode]=useState(false)
    const showQr=()=>{
        setShowCode(true)
    }

    console.log(ticket)
    const deleteTicket=()=>{
        database.collection("tickets").doc(ticket.idUser).collection("ticket").doc(ticket.id).delete().then(() => {
            console.log("Document successfully deleted!")
             NotificationManager.success('Usunięto bilet')
             tickets && tickets.map(id => {
                setTicketsData([])
                database.collection("tickets").doc(id.id).collection("ticket").get().then(querySnapshot => {
                    querySnapshot.forEach(doc => {
                        const newObjectTic = {...doc.data(), idUser: id.id, id: doc.id}
                        setTicketsData(prevState => [...prevState, newObjectTic]);
                    });
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                return console.log('done')
            })

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
