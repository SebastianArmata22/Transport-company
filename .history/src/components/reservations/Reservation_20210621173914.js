import React from 'react'
import classes from './reservations.module.scss'

const Reservation = ({reservation}) => {
    return (
        <div className={classes.item}>
            <div className={classes.hoursContainer}>
                <div className={classes.flexItem}>
                    <p>{reservation.busStopStart}- {reservation.start}</p>
                    <p>{reservation.busStopEnd}- {reservation.end}</p>
                </div>
            </div>
            <div className={classes.buyTicket}>
                <button>Anuluj rezerwacje</button>
            </div>

        </div>
    )
}

export default Reservation
