import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { auth } from '../../firebase/firebase'

const Registration = () => {
    const history=useHistory()
    const [user, setUser]=useState({
        name: "",
        lastName: "",
        email: "",
        password: "",
        repeatPassword: "",
        type: 1
    })

    const changeUser=(event)=>{
        const {name, value}=event.target
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    const login=()=>{
        if(user.password===user.repeatPassword){
            auth.createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
              const user = userCredential.user;
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
            });
        }
        history.push("/login")
    }

    return (
            <div className="bg-gradient-primary height-100vh">
            <div className="container">
                <div className="card o-hidden border-0 shadow-lg my-5">
                    <div className="card-body p-0">
                        <div className="row">
                            <div className="col-lg-5 d-none d-lg-block bg-register-image"></div>
                            <div className="col-lg-7">
                                <div className="p-5">
                                    <div className="text-center">
                                        <h1 className="h4 text-gray-900 mb-4">Stwórz konto!</h1>
                                    </div>
                                    <form className="user">
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input name="name" type="text" className="form-control form-control-user"
                                                    placeholder="Imię" value={user.name} onChange={changeUser}></input>
                                            </div>
                                            <div className="col-sm-6">
                                                <input name="lastName" type="text" className="form-control form-control-user"
                                                    placeholder="Nazwisko" value={user.lastName} onChange={changeUser}></input>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input name="email" type="email" className="form-control form-control-user"
                                                placeholder="Email" value={user.email} onChange={changeUser}></input>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input name="password" type="password" className="form-control form-control-user"
                                                    placeholder="Hasło" value={user.password} onChange={changeUser}></input>
                                            </div>
                                            <div className="col-sm-6">
                                                <input name="repeatPassword" type="password" className="form-control form-control-user"
                                                    placeholder="Powtórz hasło" value={user.repeatPassword} onChange={changeUser}></input>
                                            </div>
                                        </div>
                                        <input type="submit" className="btn btn-primary btn-user btn-block" value="Zarejestruj">
                                        </input>
                                    </form>
                                    <div className="text-center">
                                        <span className="small click" onClick={login}>Masz już konto? Zaloguj się!</span>
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

export default Registration
