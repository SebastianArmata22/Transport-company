import React, { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
import { Link, useHistory } from 'react-router-dom'
import classes from './login.module.scss'

const Login = () => {
    const history=useHistory()
    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')

    const changeLogin=(event)=>{
        setLogin(event.target.value)
    }
    const changePassword=(event)=>{
        setPassword(event.target.value)
    }
    const loginSubmit=()=>{
        history.push(`/${user.permissions}/locations`)

    }

    return (
        <div className={classes.container}>
            <div className={classes.loginContainer}>
                <Link to="/" className={classes.exit}>
                    <FaTimes />
                </Link>
                <h2>Zaloguj się</h2>
                <form onSubmit={loginSubmit}>
                    <input type="email" placeholder="email" value={login} onChange={changeLogin}></input>
                    <input type="password" placeholder="hasło" value={password} onChange={changePassword}></input>
                    <input type="submit" value="Zaloguj"></input>
                </form>
                <div className={classes.linkContainer}>
                    <Link to="/registration" className={classes.link}>Stwórz konto</Link>
                </div>
            </div>
        </div>
    )
}

export default Login
