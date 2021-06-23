import React from 'react'

const TicketsPanel = ({tickets}) => {
    return (
        <div>
            <p>Odjazd:</p>
            <p>{tickets.item}</p>
            <p>Przystanek początkowy:</p>
            <p>{tickets.busStopStart}</p>
            <p>Przyjazd:</p>
            <p>{tickets.end}</p>
            <p>Przystanek końcowy:</p>
            <p>{tickets.busStopEnd}</p>
            <p>Data:</p>
            <p>{tickets.date}</p>
            <p>Cena:</p>
            <p>{tickets.price}</p>
        </div>
    )
}

export default TicketsPanel
