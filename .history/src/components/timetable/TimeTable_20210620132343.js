import React, { useState } from 'react'

const TimeTable = () => {
    const [startingBusStop, setStartingBusStop]=useState("")
    const [endingBusStop, setEndingBusStop]=useState("")
    return (
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Rozkład jazdy - Wyszukiwarka
            </h6>
        </div>
        <div className="card-body">
            <div>
                <form>
                    <input type="text" placeholder="Przystanek początkowy"
                    value={startingBusStop} onChange={(e)=>setStartingBusStop(e.target.value)}></input>
                    <input type="text" placeholder="Przystanek końcowy"
                    value={endingBusStop} onChange={(e)=>setEndingBusStop(e.target.value)}></input>
                </form>
            </div>

    </div>
</div>
    )
}

export default TimeTable
