import React from 'react'
import TimeTable from './TimeTable'
import classes from './timeTable.module.scss'
import NavbarHome from '../NavbarHome/NavbarHome'
const TimeTablePanel = () => {
    return (
        <div className={classes.panel}>
            <NavbarHome />
            <TimeTable text="Wyszukaj przejazd"/>
        </div>
    )
}

export default TimeTablePanel
