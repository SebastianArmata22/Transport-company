import React from 'react'
import QRCode from "react-qr-code";
import classes from '../buyTickets/tickets.module.scss'

const TicketQr = ({ticket, setShowCode}) => {
    const exit=()=>{
        setShowCode(false)
    }
    return (
        <div className={classes.qr}>
            <p onClick={exit}>x</p>
            <QRCode value={ticket.id} />
        </div>
    )
}

export default TicketQr
