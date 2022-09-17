import React, {useState} from "react";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import "./loginform.css"

function LoginForm(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    async function loginData(){
        if(email == "" && password == ""){
            toast("Email & Password Required!");
           return false;
       }
        if(email == ""){
             toast("Email Required!");
            return false;
        }
        else if(password == ""){
            toast("Password Required!");
           return false;
       }
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var formdata = new FormData();
        formdata.append("email", email);
        formdata.append("password", password);

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: formdata,
        redirect: 'follow'
        };

fetch("https://staging.hospyta.com/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => {
    const obj = JSON.parse(result)
    if(obj.status == "success"){
        // toast("Login Successfully!");
        console.log(obj)
    }
    else{
        toast("Username or Password Invalid!");
           return false;
    }
  })
  .catch(error => console.log('error', error));
        
    }

    return (
        <div className="cover">
            <h1>Login</h1>
            <input id="inputField" type="text" placeholder="username" onChange={(e) => setEmail(e.target.value)} className="form-control" required="true" />
            <input id="inputField"  type="password" placeholder="password"  onChange={(e) => setPassword(e.target.value)} className="form-control" required="true" />

            <div className="login-btn" onClick={loginData}>Login</div>

            <div><ToastContainer /></div>
        </div>
    )
}

export default LoginForm