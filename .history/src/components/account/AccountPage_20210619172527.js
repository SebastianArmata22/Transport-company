import React, { useState } from 'react'
import classes from './account.module.scss'
import profile from './undraw_profile.svg'

const AccountPage = () => {
    const [showMenu, setShowMenu]=useState(false)
    const changeShowMenu = ()=>{
        setShowMenu(prev=>!prev)
    }
    const logout=()=>{
        history.push("/login")

    }
    return (
        <div>
             <div className={classes.barContainer}>
            <div onClick={changeShowMenu} className={classes.profile}>
                <span className="mr-2 d-none d-lg-inline text-gray-600 small">{``}</span>
                <img className="img-profile rounded-circle" alt="profile" src={profile} />
            </div>
            <div style={{display: showMenu ? "block" : "none"}}>
                <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in">
                    <div className="dropdown-divider"></div>
                    <p className="dropdown-item pointer" onClick={logout}>
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Wyloguj się
                    </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default AccountPage
