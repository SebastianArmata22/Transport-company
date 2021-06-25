import React from 'react'
import NavbarHome from '../NavbarHome/NavbarHome'
import styles from './Homepage.module.sass'
import { useHistory } from 'react-router-dom'

const Homepage = () => {

    const history= useHistory()
    const goToLogin=()=>{
        history.push('/login')
    }
    return (
        <div className={styles.container}>
            <NavbarHome />
            <div className={styles.page}>
                <div className={styles.textContainer}>
                    <h1>
                        KKBus
                    </h1>
                    <h3>
                        Twój przewoźnik na trasie
                    </h3>
                    <h2>
                        Kraków - Katowice
                    </h2>
                    <br />
                    <br />
                    <p>
                        Zaloguj się w panelu klienta żeby obejrzeć rozkłady,<br /> sprawdzić cennik i zarezerwować bilet
                    </p>
                    <button className={styles.clientPanel} onClick={goToLogin}>
                        Panel klienta
                    </button>
                </div>
            <img src="/images/bus.svg" alt="bus" className={styles.image}/>
            </div>
        </div>
    )
}

export default Homepage
