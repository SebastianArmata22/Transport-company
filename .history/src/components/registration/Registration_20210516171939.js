import React from 'react'
import { useHistory } from 'react-router'

const Registration = () => {
    const history=useHistory()

    const login=()=>{
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
                                                <input type="text" className="form-control form-control-user"
                                                    placeholder="Imię"></input>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="text" className="form-control form-control-user"
                                                    placeholder="Nazwisko"></input>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control form-control-user"
                                                placeholder="Email"></input>
                                        </div>
                                        <div className="form-group row">
                                            <div className="col-sm-6 mb-3 mb-sm-0">
                                                <input type="password" className="form-control form-control-user"
                                                    placeholder="Hasło"></input>
                                            </div>
                                            <div className="col-sm-6">
                                                <input type="password" className="form-control form-control-user"
                                                    placeholder="Powtórz hasło"></input>
                                            </div>
                                        </div>
                                        <input type="submit" className="btn btn-primary btn-user btn-block" value="Zarejestruj">
                                        </input>
                                    </form>
                                    <div className="text-center">
                                        <span className="small" onClick={login}>Masz już konto? Zaloguj się!</span>
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
