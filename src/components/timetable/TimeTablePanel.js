import React from 'react'
import TimeTable from './TimeTable'
import classes from './timeTable.module.scss'
import NavbarHome from '../NavbarHome/NavbarHome'
const TimeTablePanel = () => {
    return (
        <div>
            <NavbarHome />
            <div  className={classes.panel}>
            <TimeTable text="Wyszukaj przejazd"/>
            </div>

        </div>
    )
}

export default TimeTablePanel
