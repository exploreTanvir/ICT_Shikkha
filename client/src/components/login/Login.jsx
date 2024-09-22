import { useState } from "react";
import { Link } from 'react-router-dom';
import "./login.css";
import "./LoginValidation";
import Validation from "./LoginValidation";

const Login = () => {

  const [values,setValues]=useState({
    email:'',
    password:''
  })


  const [errors,setErrors]=useState({})

  const handleInput=(e)=>{
    setValues(prev=>({...prev,[e.target.name]:[e.target.value]}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values))

    
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
    <div className='bg-white p-3 rounded w-25'>
    <h2>Log-In</h2>
    <form action="" onSubmit={handleSubmit}>
    <div className='mb-3'>
    <label htmlFor="email"><strong>Email</strong></label>
    <input type="email" placeholder='Enter Email' name='email'
    onChange= {handleInput} className='form-control rounded-0'/>
    {errors.email && <p className='text-danger'> {errors.email}</p>}
    </div>
    <div className='mb-3'>
    <label htmlFor="password"><strong>Password</strong></label>
    <input type="password" placeholder='Enter Password' name='password' onChange={handleInput} className='form-control rounded-0'/>
    {errors.password && <p className='text-danger'> {errors.password}</p>}
    </div>
    <button type='submit' className='btn btn-success w-100 rounded-0'> Log in</button>
    <p>You are agree to aour terms and policies</p>
    <Link to="/sign-up" className='btn btn-default border w-100 bg-light rounded-0 '>Sing-Up</Link>
    </form>
    </div>
    </div>
  );
};

export default Login;
