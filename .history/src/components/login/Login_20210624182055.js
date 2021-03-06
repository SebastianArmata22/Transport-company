import React, {  useState } from 'react'
import {useHistory } from 'react-router-dom'
import { auth, database } from '../../firebase/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';

const Login = () => {
    const history=useHistory()
    const [userIsLogged]=useAuthState(auth)
    const [login, setLogin]=useState('')
    const [password, setPassword]=useState('')
    const changeLogin=(event)=>{
        setLogin(event.target.value)
    }
    const changePassword=(event)=>{
        setPassword(event.target.value)
    }
    const loginSubmit=(event)=>{
        event.preventDefault()
        auth.signInWithEmailAndPassword(login, password)
            .then((userCredential) => {
                 var user = userCredential.user;
                 if(user)
                 history.push('/admin')
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });

    }
    const registration=()=>{
        history.push("/registration")
    }
    if(userIsLogged){
        database.collection("users").doc(`${auth.currentUser.uid}`).get().then((doc) => {
            if (doc.exists) {
                if(doc.data().type===1)
                history.push('/account')
                else{
                    console.log(doc.data())
                    history.push('./admin')
                }
            } else {
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });

    }

    return (
        <div className="bg-gradient-primary height-100vh">
        <div className="container">
            <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div className="col-lg-6">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Witamy z powrotem!</h1>
                                    </div>
                                    <form className="user" onSubmit={loginSubmit}>
                                        <div className="form-group">
                                            <input type="email" value={login} onChange={changeLogin} className="form-control form-control-user"
                                                placeholder="Wprowad?? email..." ></input>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" value={password} onChange={changePassword} className="form-control form-control-user"
                                                placeholder="Has??o..." ></input>
                                        </div>
                                        <input type="submit" className="btn btn-primary btn-user btn-block" value="Zaloguj">
                                        </input>
                                    </form>
                                    <div className="text-center">
                                        <span onClick={registration} className="small click">Stw??rz konto!</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    </div>
    </div>
    )
}

export default Login
