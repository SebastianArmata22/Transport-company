import React from 'react'
import QRCode from "react-qr-code";
import classes from './tickets.module.scss'

const TicketQr = ({ticket, setShowCode}) => {
    return (
        <div className={classes.qr}>
            <QRCode value={ticket.id} />
        </div>
    )
}

export default TicketQr
