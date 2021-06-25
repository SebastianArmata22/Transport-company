import React from 'react';
import AdminReservations from '../adminReservations/AdminReservations';
import BoughtTickets from '../AdminTickets/BoughtTickets';

function Journeys() {
    return (
        <div title='journeys'>
            <AdminReservations />
            <BoughtTickets />
        </div>
    )
}

export default Journeys
