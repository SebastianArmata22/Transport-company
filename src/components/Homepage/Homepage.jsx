import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './Homepage.module.sass'

const Homepage = () => {
    return (
        <div className={styles.container}>
            <Navbar />
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
                    <button className={styles.clientPanel}>
                        Panel klienta
                    </button>
                </div>
            <img src="/images/bus.svg" className={styles.image}/>
            </div>
        </div>
    )
}

export default Homepage
