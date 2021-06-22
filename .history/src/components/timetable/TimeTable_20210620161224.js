import classes from './timeTable.module.scss'
import React, { useCallback, useEffect, useState } from 'react'
import { database } from '../../firebase/firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore';

const TimeTable = () => {
    const [startingBusStop, setStartingBusStop]=useState(0)
    const [endingBusStop, setEndingBusStop]=useState(0)
    const busStops=database.collection("busStops").doc("busStops")
    const [busStops] =useCollectionData(busStops)
    console.log(busStops)
    return (
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Rozkład jazdy - Wyszukiwarka
            </h6>
        </div>
        <div className="card-body">
            <div className={classes.timeTable}>
               <form>
                    <select value={startingBusStop} onChange={(e)=>setStartingBusStop(e.target.value)}></select>
                    <span>-</span>
                    <select value={endingBusStop} onChange={(e)=>setEndingBusStop(e.target.value)}></select>
                    <input type="submit" value="Wyszukaj"></input>
               </form>
            </div>

    </div>
</div>
    )
}

export default TimeTable
