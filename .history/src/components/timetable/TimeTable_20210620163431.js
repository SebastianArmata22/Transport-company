import classes from './timeTable.module.scss'
import React, { useEffect, useState } from 'react'
import { database } from '../../firebase/firebase'

const TimeTable = () => {
    const [startingBusStop, setStartingBusStop]=useState(-1)
    const [endingBusStop, setEndingBusStop]=useState(-1)
    const [busStopsData, setBusStopsData]=useState({
        busStops: []
    })

    useEffect(() => {
        database.collection("busStops").doc("busStops").get().then((doc) => {
            if (doc.exists) {
                setBusStopsData(doc.data());
                console.log(doc.data())
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }, [])
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
                    <select value={startingBusStop} onChange={(e)=>setStartingBusStop(parseInt(e.target.value))}>
                        <option value={-1} selected disabled>Wybierz przystanek początkowy...</option>
                        {busStopsData.busStops.map((busStop, index)=><option value={index}>{busStop}</option>)}
                    </select>
                    <span>-</span>
                    <select value={endingBusStop} onChange={(e)=>setEndingBusStop(parseInt(e.target.value))}>
                    <option value={-1} selected disabled>Wybierz przystanek końcowy...</option>
                    {busStopsData.busStops.map((busStop, index)=><option value={index}>{busStop}</option>)}
                    </select>
                    <input type="submit" value="Wyszukaj"></input>
               </form>
            </div>

    </div>
</div>
    )
}

export default TimeTable
