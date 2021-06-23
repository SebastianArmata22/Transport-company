import React, { useEffect, useState } from 'react'
import { auth, database } from '../../firebase/firebase';

const Reservations = () => {
    const [reservations, setReservations]=useState([])
    const { uid } = auth.currentUser
    useEffect(()=>{
        database.collection("reservations").doc(uid).get().then((doc) => {
            if (doc.exists) {
                setReservations(doc.data());
                console.log(doc.data(), "ww")
    
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    })
   
    return (
        <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
                Rezerwacje
            </h6>
        </div>
        <div className="card-body">
    </div>
</div>
    )
}

export default Reservations
