import React from 'react'

const TicketsPanel = ({tickets}) => {
    return (
        <div>
            <p>Odjazd: <span>{tickets.item}</span></p>
            <p>Przystanek początkowy: <span>{tickets.busStopStart}</span></p>
            <p>Przyjazd: <span>{tickets.end}</span></p>
            <p>Przystanek końcowy: <span>{tickets.busStopEnd}</span></p>
            <p>Data: <span>{tickets.date}</span></p>
            <p>Cena: <span>{tickets.price}</span></p>
        </div>
    )
}

export default TicketsPanel
