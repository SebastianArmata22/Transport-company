import classes from './timeTable.module.scss'
import React from 'react'

const TimeTableItem = ({item, end}) => {
    return (
        <div className={classes.item}>
            <div>
                <p>{item}</p>
                <span>-</span>
                <p>{end}</p>
            </div>

        </div>
    )
}

export default TimeTableItem
