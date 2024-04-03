import React from 'react'
import "./SignIn.css"
import {checkUser} from "../api"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SignIn({handleUser}) {
  const navigate = useNavigate()
  const [formCheck, setFormCheck] = useState({
    userName: '',
    password: ''
  });

  const handleChange=(e)=>{
    setFormCheck({...formCheck, [e.target.id]: e.target.value})
  }

  const handleSubmit=(e)=>{
    e.preventDefault();
    //if içinde formdata.password ve confirmPassword eşleşiyorm u kontrol et ona göre add usera new user ı at yoksa uyarı gönder 
    //kayıt başarılı olunca ana sayfaya at veya popup çıkar
    const userCheck = {userName:formCheck.userName, password:formCheck.password} 
    handleUser(userCheck.userName)
    checkUser(userCheck).
    then(
      setFormCheck({
        userName: '',
        password: ''    
      })
    )
    navigate("/")
    
   
  }

  return (
    <>
    <section>
    {" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
    <span /> <span /> <span /> <span />
    <div className="signin">
      <div className="content">
        <h2>Sign In</h2>
        <form className="form" onSubmit={handleSubmit}>
          <div className="inputBox">
            <input type="text" required="" id='userName' value={formCheck.userName} onChange={handleChange} /> <i>Username</i>
          </div>
          <div className="inputBox">
            <input type="password" required="" id='password' value={formCheck.password} onChange={handleChange} /> <i>Password</i>
          </div>
          <div className="links">
            {" "}
            <a href="#">Forgot Password</a> <a href="#">Signup</a>
          </div>
          <div className="inputBox">
            <input type="submit" defaultValue="Login" />
          </div>
        </form>
      </div>
    </div>
  </section>{" "}
  </>
  )
}

export default SignIn