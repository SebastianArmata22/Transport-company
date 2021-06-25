import React, { useEffect, useState } from 'react'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { database } from '../../firebase/firebase'
import Ticket from './Ticket'

const BoughtTickets = () => {
    const queryToBase = database.collection("tickets")
    const [tickets] = useCollectionData (queryToBase, {idField: 'id'})
    const [ticketsData, setTicketsData] = useState([]);

    useEffect(()=>{
        setTicketsData([])
        tickets && tickets.map(id => {
            database.collection("tickets").doc(id.id).collection("ticket").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const newObjectTic = {...doc.data(), idUser: id.id, id: doc.id}
                    setTicketsData(prevState => [...prevState, newObjectTic]);
                });
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            return console.log('done')
        })
    },[tickets])

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
                            <th>Pokaż kod qr</th>
                            <th>Usuń bilet</th>
                        </tr>
                    </thead>
                    <tbody>
                    {ticketsData!==undefined && ticketsData.map(ticket=><Ticket ticket={ticket} setTicketsData={setTicketsData} />)}
                    </tbody>
                </table>
            </div>
    </div>
</div>
    )
}

export default BoughtTickets
