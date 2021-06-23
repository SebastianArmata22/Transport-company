import classes from './timeTable.module.scss'
import React, { useState } from 'react'
import { auth, database } from '../../firebase/firebase'
import TicketsPanel from '../buyTickets/TicketsPanel'

const TimeTableItem = ({item, end,price, busStopStart, busStopEnd, date}) => {
    const [showShopping, setShowShopping]=useState(false)
    const reservation=async()=>{
        const { uid } = auth.currentUser
        await database.collection('reservations').doc(uid).collection('reservation').add({
            start: item,
            end: end,
            busStopStart: busStopStart,
            busStopEnd: busStopEnd,
            date: date,
            price: price
        })
        await database.collection('reservations').doc(uid).set({
            uid: uid
        })
    }
    const buyTickets=async()=>{
        setShowShopping(true)
    }
    return (
        <div>
            {showShopping? <TicketsPanel item={item} end={end} busStopStart={busStopStart} busStopEnd={busStopEnd} date={date} price={price}/>:<div className={classes.item}>
                <div className={classes.hoursContainer}>
                    <div className={classes.flexItem}>
                        <p><span> Odjazd: </span>{item}</p>
                        <p>-</p>
                        <p><span>Przyjazd: </span>{end}</p>
                        <p><span>cena: </span>{price}zł</p>
                    </div>
                </div>
                <div className={classes.buyTicket}>
                    <button onClick={buyTickets}>Kup bilet</button>
                    <button onClick={reservation}>Zarezerwuj</button>
                </div>

            </div>}
        </div>
       
    )
}

export default TimeTableItem
