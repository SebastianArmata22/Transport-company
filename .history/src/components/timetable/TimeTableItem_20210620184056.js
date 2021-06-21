import classes from './timeTable.module.scss'
import React from 'react'

const TimeTableItem = ({item, end}) => {
    return (
        <div className={classes.item}>
            <div>
                <div>
                    <p>Odjazd: {item}</p>
                    <span>-</span>
                    <p>Przyjazd: {end}</p>
                </div>
            </div>

        </div>
    )
}

export default TimeTableItem
