import React, {useState} from 'react'
import styles from './NavbarHome.module.sass'
import './hamburger/hamburgers.scss'
import { Link, useHistory } from 'react-router-dom'

const NavbarHome = () => {

    const [isMenuOpen, setMenuOpen] = useState(false)
    const history= useHistory()
    const goToLogin=()=>{
        history.push('/login')
    }

    return (
        <div className={styles.container} title='navbarHome'>
            <div className={styles.header}>
            <div className={styles.title}>
                <a href="/">KKBus</a>
            </div>
            <div className={styles.navbarItems}>
                <div className={styles.navbarItem}>
                    <Link to="/timeTable">Rozkłady</Link>
                </div>
                <div className={styles.navbarItem}>
                    <Link to="/contact">Kontakt</Link>
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
                        <Link to="/timeTable">Rozkłady</Link>
                    </div>
                    <div className={styles.responsiveNavbarItem}>
                        <Link to="/contact">Kontakt</Link>
                    </div>
                    <div className={styles.responsiveNavbarItem}>
                        <Link to="/">Panel klienta</Link>
                    </div>
        </div>}
        </div>
         
    )
}

export default NavbarHome