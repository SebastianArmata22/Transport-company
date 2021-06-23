import React from 'react'
import classes from './reservations.module.scss'
import { FaTrash } from "react-icons/fa";
const Reservation = ({reservation}) => {
    return (
        <tr className={classes.row}>
            <td>{reservation.date}</td>
            <td>{reservation.busStopStart} {reservation.start}</td>
            <td>{reservation.busStopEnd} {reservation.end}</td>
            <td></td>
            <td><FaTrash /></td>
        </tr>
    )
}

export default Reservation
