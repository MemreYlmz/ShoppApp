import React from 'react'
import "../styles/SignIn.css"
import {checkUser} from "../../api"
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userCheck = { userName: formCheck.userName, password: formCheck.password };
    
    try {
      const userData = await checkUser(userCheck);
      
      if (userData) {
        handleUser(userData.userName);
        setFormCheck({ userName: '', password: '' });
        navigate('/userHome');
      } else {
        console.log('Kullanıcı bulunamadı');
        // Kullanıcıya hata mesajı gösterilebilir
      }
    } catch (error) {
      console.error('Giriş işlemi hatası:', error);
      // Hata durumunda gerekli işlemler yapılabilir
    }
  };

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