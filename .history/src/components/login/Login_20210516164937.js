import React, { useContext, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
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

    }

    return (
        <div className="bg-gradient-primary">
        <div class="container">
            <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                            <div class="col-lg-6">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Witamy z powrotem!</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input type="email" class="form-control form-control-user"
                                                id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Wprowadź email..." />
                                        </div>
                                        <div class="form-group">
                                            <input type="password" class="form-control form-control-user"
                                                id="exampleInputPassword" placeholder="Password" />
                                        </div>
                                        <a href="index.html" class="btn btn-primary btn-user btn-block">
                                            Zaloguj
                                        </a>
                                    </form>
                                    <div class="text-center">
                                        <a class="small" href="forgot-password.html">Zapomniałeś/aś hasło?</a>
                                    </div>
                                    <div class="text-center">
                                        <a class="small" href="register.html">Stwórz konto!</a>
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
