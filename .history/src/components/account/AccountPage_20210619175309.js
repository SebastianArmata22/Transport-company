import React, { useState } from 'react'
import { useHistory } from 'react-router'


const AccountPage = () => {
    const [showMenu, setShowMenu]=useState(false)
    const history=useHistory()
    const changeShowMenu = ()=>{
        setShowMenu(prev=>!prev)
    }
    const logout=()=>{
        history.push("/login")

    }
    return (
        <div>
            
        </div>
    )
}

export default AccountPage
