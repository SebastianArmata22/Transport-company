import React, { useEffect, useState } from 'react'
import { database } from '../../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import AdminReservation from './AdminReservation';

const AdminReservations = () => {
    const queryToBase = database.collection("reservations")
    const [reservations] = useCollectionData (queryToBase, {idField: 'id'})
    const [reservationsData, setreservationsData] = useState([]); 

    useEffect(()=>{
        setreservationsData([])
        reservations && reservations.map(id => {
            database.collection("reservations").doc(id.id).collection("reservation").get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    const newObjectRes = {...doc.data(), idUser: id.id, id: doc.id}
                    setreservationsData(prevState => [...prevState, newObjectRes]);
                });
            }).catch((error) => {
                console.log("Error getting document:", error);
            });
            return console.log('done')
        })
    },[reservations])

    

    return (
        <div className="card shadow mb-4" title='admin-reservations'>
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Rezerwacje
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
                            <th>Anuluj rezerwacje</th>
                        </tr>
                    </thead>
                    <tbody>
                    {reservationsData!==undefined && reservationsData.map(reservation=><AdminReservation reservation={reservation} setreservationsData={setreservationsData} />)}
                    </tbody>
                </table>
            </div>
    </div>
</div>
    )
}

export default AdminReservations
