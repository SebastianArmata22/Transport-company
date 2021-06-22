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
    const [timeTableEnd, setTimeTableEnd]=useState([])

    const showTimeTable=(e, value)=>{
        let start=-1
        let end=-1
        e.preventDefault()
        if(value===1){
            setStartingBusStop(parseInt(e.target.value))
            start=busStopsData.busStops[parseInt(e.target.value)]
        }
        else if(value===2){
            setEndingBusStop(parseInt(e.target.value))
            end=busStopsData.busStops[parseInt(e.target.value)]
        }

        if(startingBusStop<endingBusStop){
            database.collection("busStops").doc(end+"Kat").get().then((doc) => {
                if (doc.exists) {
                    console.log(doc.data().array, "sss")
                    setTimeTableEnd(doc.data().array);

                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            database.collection("busStops").doc(start+"Kat").get().then((doc) => {
                if (doc.exists) {
                    console.log(doc.data().array, "sss")
                    setTimeTable(doc.data().array);

                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
        }
        else if(startingBusStop>endingBusStop){
            database.collection("busStops").doc(end+"Kra").get().then((doc) => {
                if (doc.exists) {
                    console.log(doc.data().array, "sss")
                    setTimeTableEnd(doc.data().array);

                } else {
                    console.log("No such document!");
                }
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
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
                Rozkład jazdy - Wyszukiwarka
            </h6>
        </div>
        <div className="card-body">
            <div className={classes.timeTable}>
               <form >
                    <select value={startingBusStop} onChange={(e)=>showTimeTable(e,1)}>
                        <option value={-1} selected disabled>Wybierz przystanek początkowy...</option>
                        {busStopsData.busStops.map((busStop, index)=><option value={index}>{busStop}</option>)}
                    </select>
                    <span>-</span>
                    <select value={endingBusStop} onChange={(e)=>showTimeTable(e,2)}>
                    <option value={-1} selected disabled>Wybierz przystanek końcowy...</option>
                    {busStopsData.busStops.map((busStop, index)=><option value={index}>{busStop}</option>)}
                    </select>
               </form>
               <div className={classes.containerItem}>
               {timeTable.map((item, index)=><TimeTableItem item={item} end={timeTableEnd[index]} startingBusStop={startingBusStop} endingBusStop={endingBusStop} />)}
               </div>

            </div>

    </div>
</div>
    )
}

export default TimeTable
