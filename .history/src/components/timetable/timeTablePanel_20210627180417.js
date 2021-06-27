import React from 'react'
import TimeTable from './TimeTable'
import classes from './timeTable.module.scss'
const TimeTablePanel = () => {
    return (
        <div className={classes.panel}>
            <TimeTable text="Wyszukaj przejazd"/>
        </div>
    )
}

export default TimeTablePanel
