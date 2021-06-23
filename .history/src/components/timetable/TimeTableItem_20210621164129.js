import classes from './timeTable.module.scss'
import React from 'react'
import { auth, database } from '../../firebase/firebase'

const TimeTableItem = ({item, end,price, busStopStart, busStopEnd}) => {
    const reservation=async()=>{
        const { uid } = auth.currentUser
        await database.collection('reservations').doc(uid).collection('reservation').add({
            start: item,
            end: end,
            busStopStart: busStopStart,
            busStopEnd: busStopEnd
        })
    }
    return (
        <div className={classes.item}>
            <div className={classes.hoursContainer}>
                <div className={classes.flexItem}>
                    <p><span> Odjazd: </span>{item}</p>
                    <p>-</p>
                    <p><span>Przyjazd: </span>{end}</p>
                    <p><span>cena: </span>{price}zł</p>
                </div>
            </div>
            <div className={classes.buyTicket}>
                <button>Kup bilet</button>
                <button onClick={reservation}>Zarezerwuj</button>
            </div>

        </div>
    )
}

export default TimeTableItem
