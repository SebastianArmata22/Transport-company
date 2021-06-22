import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { auth } from '../../firebase/firebase'
import classes from './Navbar.module.scss'
import profile from './undraw_profile.svg'
const Navbar = ({user}) => {
    const [showMenu, setShowMenu]=useState(false)
    const history=useHistory()
    const changeShowMenu = ()=>{
        setShowMenu(prev=>!prev)
    }
    const logout=()=>{

        auth.signOut().then(() => {
            history.push("/login")
          }).catch((error) => {
            console.log(error)
          });
    }

    return (
        <div className={classes.barContainer}>
        <div onClick={changeShowMenu} className={classes.profile}>
            <span className="mr-2 d-none d-lg-inline text-gray-600 small">{`${user.name} ${user.lastName}`}</span>
            <img className="img-profile rounded-circle" alt="profile" src={profile} />
        </div>
        <div style={{display: showMenu ? "block" : "none"}}>
        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in">
                <p className="dropdown-item pointer" onClick={logout}>
                    <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Wyloguj się
                </p>
            </div>
        </div>
    </div>
    )
}

export default Navbar
