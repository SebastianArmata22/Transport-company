import React from 'react'

const TimeTableItem = ({item, end}) => {
    return (
        <div>
            <div>{item}</div>
            <div>{end}</div>
        </div>
    )
}

export default TimeTableItem
