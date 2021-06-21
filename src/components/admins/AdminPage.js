import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Schedule from '../workSchedule/Schedule';
import classes from './account.module.scss'

const AdminPage = () => {
    const user={
        name: 'Arkadiusz',
        lastName: 'Horwat'
    }

    return (
        <div className={classes.container}>
            <nav>
                <Navbar user={user}/>
            </nav>
            <main>
                <Schedule />
            </main>

        </div>
    )
}

export default AdminPage;
