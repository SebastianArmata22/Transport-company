import classes from './tickets.module.scss'
import React from 'react'

const TicketsPanel = ({tickets}) => {
    return (
         <div className="card shadow mb-6">
         <div className="card-header py-3">
             <h6 className="m-0 font-weight-bold text-primary">
                 Kup bilet
             </h6>
         </div>
         <div className="card-body">
         <div className="table-responsive">
             <div className={classes.ticketPanel}>
                 <div className={classes.container}>
                      <div className={classes.ticketInfo}>
             <h4>Szczegóły biletu</h4>
            <p>Odjazd: <span>{tickets.item} - {tickets.busStopStart}</span></p>
            <p>Przyjazd: <span>{tickets.end} - {tickets.busStopEnd}</span></p>
            <p>Data: <span>{tickets.date}</span></p>
            <p>Cena: <span>{tickets.price} zł</span></p>
        </div>
        </div>
        <div className={classes.container}>
        <div className={classes.ticketInfo}>
        <h4>Dane klienta</h4>
            <form className={classes.formPerson}>
                <input type="text" placeholder="imię..."></input>
                <input type="text" placeholder="nazwisko..."></input>
                <input type="email" placeholder="email..."></input>
            </form>
        </div>
        <div className={classes.ticketInfo}>
        <h4>Zapłać blikiem</h4>
            <input type="text" placeholder="kod..."></input>
        </div>
        <button className={classes.buyTicketBtn}>Zamów bilet</button>
        </div>
       
             </div>
       
             </div>
     </div>
 </div>
    )
}

export default TicketsPanel
