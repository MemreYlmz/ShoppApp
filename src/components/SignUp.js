import React from 'react'
import "./SignUp.css"
import { NavLink ,useNavigate} from 'react-router-dom';
import { useState } from 'react';
import { addUser } from '../api';
function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    confirmPassword: '',
    phone: '',
    mail: ''
  });
  const handleChange = (e) => { 
      setFormData({...formData, [e.target.id]: e.target.value})
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //if içinde formdata.password ve confirmPassword eşleşiyorm u kontrol et ona göre add usera new user ı at yoksa uyarı gönder 
    //kayıt başarılı olunca ana sayfaya at veya popup çıkar
    const newUser = {userName:formData.userName, password:formData.password , phone:formData.phone, mail:formData.mail} 
    
    addUser(newUser).
    then(
      setFormData({
        userName: '',
        password: '',
        confirmPassword: '',
        phone: '',
        mail: ''
      })
      
    )
    navigate("/signIn")
    
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
        <h2>Sign Up</h2>
        <form className="form"  onSubmit={handleSubmit}>
        <div className="inputBox">
            <input type="text" id='mail' required="" value={formData.mail} onChange={handleChange}/> <i>E-Mail</i>
          </div>
          <div className="inputBox">
            <input type="text" id='userName' required="" value={formData.userName} onChange={handleChange} /> <i>Username</i>
          </div>
          <div className="inputBox">
            <input type="password" id='password' required=""  value={formData.password} onChange={handleChange} /> <i>Password</i>
          </div>
          <div className="inputBox">
            <input type="password" id='confirmPassword' required="" value={formData.confirmPassword} onChange={handleChange}/> <i> Check Password</i>
          </div>
          <div className="inputBox">
            <input type="text" id='phone' required="" value={formData.phone} onChange={handleChange} /> <i> Phone Number</i>
          </div>
          <div className="links">
            {" "}
             <a href="#">SignIn</a>
          </div>
          <div className="inputBox">
            <input type="submit"  defaultValue="SignUp" />
            <NavLink  className="SignUpButton" to="/SignIn" >SignUp</NavLink>
          </div>
        </form>
      </div>
    </div>
  </section>{" "}
  </>
  )
}

export default SignUp