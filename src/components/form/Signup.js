import React, {  useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
import "../../styles/signup.css"
import { useNavigate } from 'react-router-dom';
const Signup = () => {
   const[Name ,setName] = useState('');
   const[Email,setEmail] = useState('');
   const[Password,setPassword] = useState('');
   const navigate = useNavigate();
   const handleSubmit=(event)=>{
    event.preventDefault()
       axios.post("http://localhost:3900/register/",{Name:Name,Email:Email,Password:Password})
       .then((res)=>{
        console.log(res)
        if(Name ==="" |Email ===""|| Password ===""){
          
        }
      })
       .catch((err)=>console.log(err));
      navigate('/login')
       console.log(Name);
       console.log(Email);
       console.log(Password)
   }

     
  return (
    <>
      <article className='back'>
      <div className="form-container">
      <p className="titles">Create Account</p>
      <form className="form" >
        <input type="text" className="input" onChange={(e)=>setName(e.target.value)} placeholder="Name" required/>
        <input type="Email" className="input" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required/>
        <input type="Password" className="input" onChange={(e)=>setPassword(e.target.value)} placeholder="Password" required/>
        <button to="/" type='submit' onClick={handleSubmit} className="form-btn">Signup</button>
      </form>
      <p className="sign-up-label">
        Already have an account? <Link to="/login" className="links">Log in</Link>
      </p>
      </div>
      </article>
    
    
    </>
   
  )
}

export default Signup;