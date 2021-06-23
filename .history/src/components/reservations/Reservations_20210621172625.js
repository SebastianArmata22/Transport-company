import React from 'react'
import { auth, database } from '../../firebase/firebase';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const Reservations = () => {
    const { uid } = auth.currentUser
    const queryToBase = database.collection("reservations").doc(uid).collection('reservation')
    const [reservations] = useCollectionData (queryToBase)

    return (
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Rezerwacje
            </h6>
        </div>
        <div className="card-body">
            {reservations!==undefined &&  reservations.map(reservation=><p>{reservation}</p>)}
    </div>
</div>
    )
}

export default Reservations
