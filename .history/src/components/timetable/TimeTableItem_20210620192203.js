import classes from './timeTable.module.scss'
import React, { useEffect } from 'react'

const TimeTableItem = ({item, end, startingBusStop, endingBusStop}) => {
    let price
    useEffect(()=>{
        price= startingBusStop>endingBusStop ? (startingBusStop-endingBusStop)*3 : (endingBusStop-startingBusStop)*3
    },[startingBusStop, endingBusStop])
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
            </div>

        </div>
    )
}

export default TimeTableItem
