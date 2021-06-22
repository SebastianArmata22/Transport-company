import React from 'react'
import styles from './Contactpage.module.sass'
import NavbarHome from '../NavbarHome/NavbarHome'
import GoogleMapReact from 'google-map-react'
import MapContainer from './MapContainer/MapContainer'

const Contactpage = () => {
    return (
        <div className={styles.container}>
            <NavbarHome />
            <div className={styles.page}>
                <div className={styles.leftContainer}>
                    <h1>KKbus</h1>
                    <h2>Kraków</h2>
                    <h3>Al. Jana Pawła 2 23</h3>
                    <br />
                    <p>email: kkbus@poczta.pl</p>
                    <p>tel. 123 123 123</p>
                </div>
                <div className={styles.rightContainer}>
                    <MapContainer />
                </div>
            </div>
        </div>
    )
}

export default Contactpage
