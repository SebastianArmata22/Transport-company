import React from 'react'

const TicketsPanel = ({tickets}) => {
    return (
        
         <div className="card shadow mb-4">
         <div className="card-header py-3">
             <h6 className="m-0 font-weight-bold text-primary">
                 Kup bilet
             </h6>
         </div>
         <div className="card-body">
         <div className="table-responsive">
         <div>
            <p>Odjazd: <span>{tickets.item}</span></p>
            <p>Przystanek początkowy: <span>{tickets.busStopStart}</span></p>
            <p>Przyjazd: <span>{tickets.end}</span></p>
            <p>Przystanek końcowy: <span>{tickets.busStopEnd}</span></p>
            <p>Data: <span>{tickets.date}</span></p>
            <p>Cena: <span>{tickets.price} zł</span></p>
        </div>
             </div>
     </div>
 </div>
    )
}

export default TicketsPanel
