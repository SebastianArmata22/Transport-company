import React from 'react'
import classes from './reservations.module.scss'

const Reservation = ({reservation}) => {
    return (
        <tr>
            <td>{reservation.date}</td>
            <td>{reservation.busStopStart}- {reservation.start}</td>
            <td>{reservation.busStopEnd}- {reservation.end}</td>
            <td></td>
            <td><button>X</button></td>
        </tr>
    )
}

export default Reservation
