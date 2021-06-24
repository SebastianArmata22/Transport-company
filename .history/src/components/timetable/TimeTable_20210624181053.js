import classes from './timeTable.module.scss'
import React, { useEffect, useState } from 'react'
import { database } from '../../firebase/firebase'
import TimeTableItem from './TimeTableItem'

const TimeTable = ({setTickets, setShowShopping}) => {
    const [startingBusStop, setStartingBusStop]=useState(-1)
    const [endingBusStop, setEndingBusStop]=useState(-1)
    const [date, setDate]=useState("")
    const [busStopsData, setBusStopsData]=useState({
        busStops: []
    })
    const [timeTable, setTimeTable]=useState([])
    const [timeTableEnd, setTimeTableEnd]=useState([])
    const [price, setPrice]=useState(0)
    const showTimeTable=(e)=>{
        e.preventDefault()
        const start=busStopsData.busStops[startingBusStop]
        const end=busStopsData.busStops[endingBusStop]
        if(date!=="")
        {
            setPrice(startingBusStop>endingBusStop ? (startingBusStop-endingBusStop)*3 : (endingBusStop-startingBusStop)*3)
            if(startingBusStop<endingBusStop){
                database.collection("busStops").doc(end+"Kat").get().then((doc) => {
                    if (doc.exists) {
                        setTimeTableEnd(doc.data().array);
    
                    } else {
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                database.collection("busStops").doc(start+"Kat").get().then((doc) => {
                    if (doc.exists) {
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
                        setTimeTableEnd(doc.data().array);
    
                    } else {
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
                database.collection("busStops").doc(start+"Kra").get().then((doc) => {
                    if (doc.exists) {
                        setTimeTable(doc.data().array);
                    } else {
                        console.log("No such document!");
                    }
                }).catch((error) => {
                    console.log("Error getting document:", error);
                });
            }
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
                Kup bilet
            </h6>
        </div>
        <div className="card-body">
            <div className={classes.timeTable}>
               <form onSubmit={showTimeTable}>
                    <select value={startingBusStop} onChange={(e)=>setStartingBusStop(parseInt(e.target.value))}>
                        <option value={-1} selected disabled>Wybierz przystanek początkowy...</option>
                        {busStopsData.busStops.map((busStop, index)=><option value={index}>{busStop}</option>)}
                    </select>
                    <span>-</span>
                    <select value={endingBusStop} onChange={(e)=>setEndingBusStop(parseInt(e.target.value))}>
                    <option value={-1} selected disabled>Wybierz przystanek końcowy...</option>
                    {busStopsData.busStops.map((busStop, index)=><option value={index}>{busStop}</option>)}
                    </select>
                    <input type="date" min={new Date().toISOString().split("T")[0]} value={date} onChange={(e)=>setDate(e.target.value)}></input>
                    <input type="submit" value="Wyszukaj"></input>
               </form>
               <div className={classes.containerItem}>
               {timeTable.map((item, index)=><TimeTableItem item={item} end={timeTableEnd[index]}  price={price} busStopStart={busStopsData.busStops[startingBusStop]} busStopEnd={busStopsData.busStops[endingBusStop]} date={date} setTickets={setTickets} setShowShopping={setShowShopping}/>)}
               </div>

            </div>

    </div>
</div>
    )
}

export default TimeTable
