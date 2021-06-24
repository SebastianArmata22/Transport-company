import React from 'react'
import QRCode from "react-qr-code";

const TicketQr = ({ticket, setShowCode}) => {
    return (
        <div className={classes.qr}>
            <QRCode value={ticket.id} />
        </div>
    )
}

export default TicketQr
