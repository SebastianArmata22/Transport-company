import classes from './tickets.module.scss'
import React, { useState } from 'react'
import { auth, database } from '../../firebase/firebase'
import { NotificationManager } from 'react-notifications'

const TicketsPanel = ({tickets, user, setShowShopping,setUserData}) => {
    const { uid } = auth.currentUser
    const [userData, setUser]=useState({
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        points: user.points
    })
    const [price, setPrice]=useState(tickets.price)
    const [blik, setBlik]=useState("")
    const changeUserData=(e)=>{
        const {name, value}=e.target
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const discount=()=>{
        if(parseFloat(tickets.price)-parseFloat(price)!==user.points/10)
         setPrice(prevState=>Math.round((prevState-user.points/10)*100)/100)
    }

    const buyTicket=async()=>{
        if(blik!==""){
            await database.collection('tickets').doc(uid).collection('ticket').add({
                start: tickets.item,
                end: tickets.end,
                busStopStart: tickets.busStopStart,
                busStopEnd: tickets.busStopEnd,
                date: tickets.date,
                price: price,
                name: userData.name,
                lastName: userData.lastName,
                email: userData.email
            }).then(async () => {
                NotificationManager.success('Zakupiono bilet')
                setShowShopping(false)
                await database.collection("users").doc(uid).update({
                    points: Math.round(tickets.price/10)+ userData.points
                })
                setUserData(prevState => ({
                    ...prevState,
                    points: Math.round(tickets.price/10)+ userData.points
                }))
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
            await database.collection('tickets').doc(uid).set({
                uid: uid
            })
        }
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
            <p>Cena: <span>{price} zł</span></p>
        </div>
        <div className={classes.ticketInfo}>
        <h4>Rabat</h4>
             
            <button className={classes.buyTicketBtn} onClick={discount}>Wykorzystaj punkty</button>
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
            <input type="text" placeholder="kod..." value={blik} onChange={(e)=>setBlik(e.target.value)}></input>
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
