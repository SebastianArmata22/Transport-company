import React from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { auth, database } from '../../firebase/firebase'
import Ticket from './Ticket'

const BuyTickets = () => {
    const { uid } = auth.currentUser
    const queryToBase = database.collection("tickets").doc(uid).collection('ticket')
    const [tickets] = useCollectionData (queryToBase, {idField: 'id'})
    return (
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Kupione bilety
            </h6>
        </div>
        <div className="card-body">
        <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                    <thead>
                        <tr>
                            <th>Data</th>
                            <th>Przystanek początkowy i czas</th>
                            <th>Przystanek końcowy i czas</th>
                            <th>Cena</th>
                            <th>Pokaż bilet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tickets && tickets.map(ticket=> <Ticket ticket={ticket}/>)}
                    </tbody>
                </table>
            </div>
    </div>
</div>
    )
}

export default BuyTickets
