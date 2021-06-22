import classes from './timeTable.module.scss'
import React from 'react'

const TimeTableItem = ({item, end}) => {
    return (
        <div className={classes.item}>
            <div>
                <div className={classes.flexItem}>
                    <p><span> Odjazd: </span>{item}</p>
                    <span>-</span>
                    <p><span>Przyjazd: </span>{end}</p>
                </div>
            </div>

        </div>
    )
}

export default TimeTableItem
