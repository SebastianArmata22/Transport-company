import React from 'react'

const TicketsPanel = ({item, end, busStopStart, busStopEnd, date, price}) => {
    return (
        <div>
            <p>Odjazd:</p>
            <p>{item}</p>
            <p>Przystanek początkowy:</p>
            <p>{busStopStart}</p>
            <p>Przyjazd:</p>
            <p>{end}</p>
            <p>Przystanek końcowy:</p>
            <p>{busStopEnd}</p>
            <p>Data:</p>
            <p>{date}</p>
            <p>Cena:</p>
            <p>{price}</p>
        </div>
    )
}

export default TicketsPanel
