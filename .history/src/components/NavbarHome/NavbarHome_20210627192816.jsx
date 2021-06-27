import React, {useState} from 'react'
import styles from './NavbarHome.module.sass'
import './hamburger/hamburgers.scss'
import { useHistory } from 'react-router-dom'

const NavbarHome = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const history= useHistory()
    const goToLogin=()=>{
        history.push('/login')
    }
    const goToTimeTable=()=>{
        history.push('/timeTable')
    }
    return (
        <div className={styles.container} title='navbarHome'>
            <div className={styles.header}>
            <div className={styles.title}>
                <a href="/">KKBus</a>
            </div>
            <div className={styles.navbarItems}>
                <div className={styles.navbarItem}>
                    <a href="/timeTable">Rozkłady</a>
                </div>
                <div className={styles.navbarItem}>
                    <p href="/contact" onClick={goToTimeTable}>Kontakt</p>
                </div>
                {/* <div className={styles.navbarItemLogin}>
                    <a href="/">Panel klienta</a>
                </div> */}
                <button className={styles.navbarItemLogin} onClick={goToLogin}>
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

export default NavbarHome
