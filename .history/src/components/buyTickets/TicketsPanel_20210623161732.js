import classes from './tickets.module.scss'
import React, { useState } from 'react'
import { auth, database } from '../../firebase/firebase'

const TicketsPanel = ({tickets, user}) => {
    const { uid } = auth.currentUser
    const [userData, setUser]=useState({
        name: user.name,
        lastName: user.lastName,
        email: user.email
    })
    const [blik, setBlik]=useState("")
    const changeUserData=(e)=>{
        const {name, value}=e.target
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const buyTicket=async()=>{
        await database.collection('tickets').doc(uid).collection('ticket').add({
            start: tickets.item,
            end: tickets.end,
            busStopStart: tickets.busStopStart,
            busStopEnd: tickets.busStopEnd,
            date: tickets.date,
            price: tickets.price,
            name: userData.name,
            lastName: userData.lastName,
            email: userData.email
        })
        await database.collection('tickets').doc(uid).set({
            uid: uid
        })
    }
    return (
         <div className="card shadow mb-4">
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
        <div className={classes.ticketInfo}>
        <h4>Rabat</h4>
            <div className={classes.infoPanel}>
             <p>1 punkt = 0,10zł</p>
            </div>
             <input type="number" placeholder="Wpisz ilość punktów, 1 punkt = 0,10zł"></input>
             <br></br>
            <button className={classes.buyTicketBtn}>Wykorzystaj punkty</button>
        </div>
        </div>
        <div className={classes.container}>
        <div className={classes.ticketInfo}>
        <h4>Dane klienta</h4>
            <form className={classes.formPerson}>
                <input name="name" type="text" placeholder="imię..." value={userData.name} onChange={changeUserData}></input>
                <input name="lastName" type="text" placeholder="nazwisko..." value={userData.lastName} onChange={changeUserData}></input>
                <input name="email" type="email" placeholder="email..." value={userData.email} onChange={changeUserData}></input>
            </form>
        </div>
        <div className={classes.ticketInfo}>
        <h4>Zapłać blikiem</h4>
            <input type="number" placeholder="kod..."></input>
        </div>
        <button className={classes.buyTicketBtn} onClick={buyTicket}>Zamów bilet</button>
        </div>
       
             </div>
       
             </div>
     </div>
 </div>
    )
}

export default TicketsPanel
