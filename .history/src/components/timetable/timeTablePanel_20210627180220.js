import React from 'react'
import TimeTable from './TimeTable'
import classes from './timeTable.module.scss'
const timeTablePanel = () => {
    return (
        <div className={classes.panel}>
            <TimeTable />
        </div>
    )
}

export default timeTablePanel
