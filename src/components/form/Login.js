import {React,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "../../styles/login.css";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const Login = () => {
  const[Email,setEmail] = useState('');
  const[Password,setPassword] = useState('');
  const navigate = useNavigate();
   // error msg shown //
     const[loginstatus ,setloginstatus] = useState('');
     const[loginholder ,setloginholder] = useState('message')
       const handleLogin=(e)=>{
          e.preventDefault();
            axios.post('http://localhost:3900/login',{Email:Email,Password:Password})
            .then(res=>{console.log(res)
              if(res.data.message || Email === "" || Password ===""){
                navigate('/')
                setloginstatus('credentials dont exist')
              }else{
                navigate('/')
              }}
            )
            .catch(err=>console.log(err));
           
       
      }
      useEffect(()=>{
           if(loginstatus !== ""){
            setloginholder('show-message')
           setTimeout(()=>{
                setloginholder('message')
           },2000)
           }
      },[loginstatus])

       const Submit=(e)=>{
        e.preventDefault();
            setEmail('')
           setPassword('')
       }

  return (
     <>
     <article className='back'>
     <div className="form-container ">
      <p className="titles">Welcome back</p>
      <span  className={loginholder}> {loginstatus} </span><br/>
      <form className="form" onSubmit={Submit}>
        <input type="Email" className="input" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" required/>
        <input type="Password" className="input" onChange={(e=>setPassword(e.target.value))} placeholder="Password" required/>
        <button to="/dashboard" onClick={handleLogin} className="form-btn">Log in</button>
      </form>
      <p className="sign-up-label">
        Don't have an account? <Link to="/signup" className="links">Register</Link>
      </p>
      </div>
     </article>
      
     
     {/* <h1>Hello</h1>
     <Link to="/dashboard" type='submit' className='btn btn-primary'>Login</Link><br></br>
     <Link to="/register">Register</Link>
      */}
     </>
  )
}

export default Login