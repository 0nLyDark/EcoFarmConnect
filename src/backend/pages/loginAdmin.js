import "../assets/css/style-login.css"

import React from "react";
function LoginAdmin(){

    return(
        <>
        <div className="loginAdmin">
            <div className="d-flex justify-content-center align-items-center background" >
                <div className="frame">
                    <h2 className="text-center mb-4">Admin</h2>
                    <form >
                        <label for="username">Username:</label><br/>
                        <input type="text" id="username" name="username" className="form-control" placeholder="Username or Email" /><br/>
                        <label for="password">Password:</label><br/>
                        <input type="password" id="password" name="password" className="form-control" placeholder="Password"/><br/>
                        <div className="text-center">
                            <button className="btn w-100 fs-5" >Login</button>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
        </>
    )
}

export default LoginAdmin;


