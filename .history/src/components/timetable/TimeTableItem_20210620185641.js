import classes from './timeTable.module.scss'
import React from 'react'

const TimeTableItem = ({item, end, startingBusStop, endingBusStop}) => {
    const price= startingBusStop>endingBusStop ? (startingBusStop-endingBusStop)*3 : (endingBusStop-startingBusStop)*3
    return (
        <div className={classes.item}>
            <div className={classes.hoursContainer}>
                <div className={classes.flexItem}>
                    <p><span> Odjazd: </span>{item}</p>
                    <p>-</p>
                    <p><span>Przyjazd: </span>{end}</p>
                </div>
            </div>
            <div className={classes.buyTicket}>
                <p>{price}zł</p>
                <button>Kup bilet</button>
            </div>

        </div>
    )
}

export default TimeTableItem
