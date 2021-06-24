import React from 'react'
import { GiTicket } from "react-icons/gi";
import classes from './tickets.module.scss'

const Ticket = ({ticket}) => {
    return (
        <tr className={classes.row}>
        <td>{ticket.date}</td>
        <td>{ticket.busStopStart} {ticket.start}</td>
        <td>{ticket.busStopEnd} {ticket.end}</td>
        <td>{ticket.price} zł</td>
        <td className={classes.ticket}><GiTicket /></td>
    </tr>
    )
}

export default Ticket
