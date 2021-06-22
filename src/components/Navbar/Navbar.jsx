import React, {useState} from 'react'
import styles from './Navbar.module.sass'
import './hamburger/hamburgers.scss'

const Navbar = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)

    return (
        <div className={styles.container}>
            <div className={styles.header}>
            <div className={styles.title}>
                <a href="/">KKBus</a>
            </div>
            <div className={styles.navbarItems}>
                <div className={styles.navbarItem}>
                    <a href="/">Rozkłady</a>
                </div>
                <div className={styles.navbarItem}>
                    <a href="/contact">Kontakt</a>
                </div>
                {/* <div className={styles.navbarItemLogin}>
                    <a href="/">Panel klienta</a>
                </div> */}
                <button className={styles.navbarItemLogin}>
                    Panel klienta
                </button>
                <div className={styles.hamburger}>
                    <button className={isMenuOpen ? "hamburger hamburger--elastic is-active" : "hamburger"} type="button" onClick={() => setMenuOpen(!isMenuOpen)}>
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </div>
        </div>
        {isMenuOpen && 
        <div className={styles.menuList}>
                    <div className={styles.responsiveNavbarItem}>
                        <a href="/">Rozkłady</a>
                    </div>
                    <div className={styles.responsiveNavbarItem}>
                        <a href="/contact">Kontakt</a>
                    </div>
                    <div className={styles.responsiveNavbarItem}>
                        <a href="/">Panel klienta</a>
                    </div>
        </div>}
        </div>
         
    )
}

export default Navbar
