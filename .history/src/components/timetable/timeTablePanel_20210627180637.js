import React from 'react'
import TimeTable from './TimeTable'
import classes from './timeTable.module.scss'
import NavbarHome from '../NavbarHome/NavbarHome'
const TimeTablePanel = () => {
    return (
        <div>
            <NavbarHome />
            <TimeTable text="Wyszukaj przejazd" className={classes.panel}/>
        </div>
    )
}

export default TimeTablePanel
