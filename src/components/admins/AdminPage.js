import React, {useState} from 'react'
import Navbar from '../Navbar/Navbar'
import Schedule from '../workSchedule/Schedule';
import classes from './account.module.scss'

const AdminPage = () => {
    const [buttonId, setButtonId] = useState('');

    const user={
        name: 'Arkadiusz',
        lastName: 'Horwat',
        id: 1
    }

    const onClickEvent = event => {
        setButtonId(event.target.id);
    }

    return (
        <div className={classes.container}>
            <nav>
                <Navbar user={user}/>
            </nav>
            <main>
                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">
                        {
                        user.id === 1 ? 
                        <div>
                            <button id='grafik' onClick={onClickEvent}>Grafik</button>
                            <button id='samochody' onClick={onClickEvent}>Samochody</button>
                            <button id='pracownicy' onClick={onClickEvent}>Pracownicy</button>
                            <button id='przejazdy' onClick={onClickEvent}>Przejazdy</button>
                            <button id='raporty' onClick={onClickEvent}>Raporty</button>
                        </div> : ''
                        }
                        </h6>
                    </div>
                    <div className="card-body">
                        {
                        buttonId === 'grafik' && <Schedule />
                        }
                        {
                        buttonId === 'samochody' && 'samochody'
                        }
                        {
                        buttonId === 'pracownicy' && 'pracownicy'
                        }
                        {
                        buttonId === 'przejazdy' && 'przejazdy'
                        }
                        {
                        buttonId === 'raporty' && 'raporty'
                        }
                    </div>
                </div>
            </main>
        </div>
    )
}

export default AdminPage;
