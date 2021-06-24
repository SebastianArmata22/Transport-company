import React from 'react'
import { FaTrash } from 'react-icons/fa'
import classes from './tickets.module.scss'

const Ticket = ({ticket}) => {
    return (
        <tr className={classes.row}>
        <td>{ticket.date}</td>
        <td>{ticket.busStopStart} {ticket.start}</td>
        <td>{ticket.busStopEnd} {ticket.end}</td>
        <td>{ticket.price} zł</td>
        <td className={classes.delete}><FaTrash /></td>
    </tr>
    )
}

export default Ticket
