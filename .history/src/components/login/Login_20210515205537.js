import React, { useState } from 'react'
import { getUser } from '../axios/axios'
import CodeScreen from '../codeScreen/CodeScreen'
import classes from './login.module.scss'

const Login = () => {
    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')
    const [isCode, setIsCode]=useState(false)
    const [text, setText]=useState("")
    const changeLogin=(event)=>{
        setLogin(event.target.value)
    }
    const changePassword=(event)=>{
        setPassword(event.target.value)
    }
    const changeIsCode=async (e)=>{
        e.preventDefault()
        const status= await getUser(login, password)
        if(status==='1')
        {
            setIsCode(true)

        }
        else{
            setText("Błędny login lub hasło")
        }
    }

    return (
        <div className={classes.container}>
            {isCode?<CodeScreen login={login}/>: <div className={classes.loginContainer}>
                <h2>Zaloguj się</h2>
                <form onSubmit={changeIsCode}>
                    <input type="text" placeholder="login" value={login} onChange={changeLogin}></input>
                    <input type="password" placeholder="hasło" value={password} onChange={changePassword}></input>
                    <input type="submit" value="Zaloguj"></input>
                </form>
                <p className={classes.text}>{text}</p>

            </div>}
        </div>
    )
}

export default Login
