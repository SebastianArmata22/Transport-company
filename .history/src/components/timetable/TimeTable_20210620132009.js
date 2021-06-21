import React from 'react'

const TimeTable = () => {
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
                    <input type="text" placeholder="Przystanek początkowy"></input>
                    <input type="text" placeholder="Przystanek końcowy"></input>
                </form>
            </div>

    </div>
</div>
    )
}

export default TimeTable
