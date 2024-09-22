import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../login/login.css";
import Validation from "./singUpValidation";

const Registration = () => {

  const [values,setValues]=useState({
    name:'',
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
    <h2>Sign-Up</h2>
    <form action="" onSubmit={handleSubmit}>
    <div className='mb-3'>
    <label htmlFor="name"><strong>Name</strong></label>
    <input type="text" placeholder='Enter Name' name='name'
    onChange= {handleInput} className='form-control rounded-0'/>
    {errors.name && <p className='text-danger'> {errors.name}</p>}

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
    <button type='submit' className='btn btn-success w-100 rounded-0'> Sing-Up</button>
    <p>You are agree to aour terms and policies</p>
    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 '>Log-In</Link>
    </form>
    </div>
    </div>
  )
}

export default Registration;
