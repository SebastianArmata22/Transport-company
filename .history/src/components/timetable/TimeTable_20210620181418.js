import classes from './timeTable.module.scss'
import React, { useEffect, useState } from 'react'
import { database } from '../../firebase/firebase'
import TimeTableItem from './TimeTableItem'

const TimeTable = () => {
    const [startingBusStop, setStartingBusStop]=useState(-1)
    const [endingBusStop, setEndingBusStop]=useState(-1)
    const [busStopsData, setBusStopsData]=useState({
        busStops: []
    })
    const [timeTable, setTimeTable]=useState([])
    const showTimeTable=(e)=>{
        e.preventDefault()
        const start=busStopsData.busStops[startingBusStop]
        if(startingBusStop<endingBusStop){
            database.collection("busStops").doc(start+"Kat").get().then((doc) => {
                if (doc.exists) {
                    setTimeTable(doc.data());
                    console.log(doc.data(), "sss")
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
        else if(startingBusStop>endingBusStop){
            database.collection("busStops").doc(start+"Kra").get().then((doc) => {
                if (doc.exists) {
                    setTimeTable(doc.data());
                    console.log(doc.data())
                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
    }

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
                Rozk??ad jazdy - Wyszukiwarka
            </h6>
        </div>
        <div className="card-body">
            <div className={classes.timeTable}>
               <form onSubmit={showTimeTable}>
                    <select value={startingBusStop} onChange={(e)=>setStartingBusStop(parseInt(e.target.value))}>
                        <option value={-1} selected disabled>Wybierz przystanek pocz??tkowy...</option>
                        {busStopsData.busStops.map((busStop, index)=><option value={index}>{busStop}</option>)}
                    </select>
                    <span>-</span>
                    <select value={endingBusStop} onChange={(e)=>setEndingBusStop(parseInt(e.target.value))}>
                    <option value={-1} selected disabled>Wybierz przystanek ko??cowy...</option>
                    {busStopsData.busStops.map((busStop, index)=><option value={index}>{busStop}</option>)}
                    </select>
                    <input type="submit" value="Wyszukaj"></input>
               </form>
               {timeTable.map(item=><TimeTableItem timeTable={item}/>)}
            </div>

    </div>
</div>
    )
}

export default TimeTable
