import React, { useState } from 'react'
import { GiTicket } from "react-icons/gi";
import classes from './tickets.module.scss'
import TicketQr from './TicketQr';
const Ticket = ({ticket}) => {
    const [showCode, setShowCode]=useState(false)
    const showQr=()=>{
        setShowCode(true)
    }
    return (
        <tr className={classes.row}>
            <td>{ticket.date}</td>
            <td>{ticket.busStopStart} {ticket.start}</td>
            <td>{ticket.busStopEnd} {ticket.end}</td>
            <td>{ticket.price} zł</td>
        <td className={classes.ticket} onClick={showQr}><GiTicket /></td>
        {showCode && <TicketQr ticket={ticket} setShowCode={setShowCode}/>}
    </tr>
    )
}

export default Ticket
