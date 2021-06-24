import React from 'react'
import { IoTicket } from "react-icons/io";
import classes from './tickets.module.scss'

const Ticket = ({ticket}) => {
    return (
        <tr className={classes.row}>
        <td>{ticket.date}</td>
        <td>{ticket.busStopStart} {ticket.start}</td>
        <td>{ticket.busStopEnd} {ticket.end}</td>
        <td>{ticket.price} zł</td>
        <td className={classes.delete}><IoTicket /></td>
    </tr>
    )
}

export default Ticket
