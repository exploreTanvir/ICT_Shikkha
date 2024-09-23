import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import Validation from "./singUpValidation";

const Registration = () => {
  const [values, setValues] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [errors, setErrors] = useState('');

  const history = useHistory();

  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/signup', values);
      if (res.data.success) {
        alert('Registration successful!');
        history.push("/login");
      } else {
        setError(res.data.message);
      }
    } catch (err) {
      console.error("Signup error:", err);
      setError('Registration failed. Please try again.');
    }

    setErrors(Validation(values))
  };

  
  return (
    <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
    <div className='bg-white p-3 rounded w-25'>
    <h2>Sign-Up</h2>
    <form action="" onSubmit={handleSubmit}>
    <div className='mb-3'>
    <label htmlFor="name"><strong>Name</strong></label>
    
     <input
          type="text"
          name="name"
          placeholder="Enter Name"
          onChange={handleInput}
          value={values.name}
          className='form-control rounded-0'
          required
        />
    {errors.name && <p className='text-danger'> {errors.name}</p>}

    <label htmlFor="email"><strong>Email</strong></label>
  
     <input
          type="email"
          name="email"
          placeholder="Enter Email"
          onChange={handleInput}
          value={values.email}
          className='form-control rounded-0'
          required
        />
    {errors.email && <p className='text-danger'> {errors.email}</p>}
    </div>
    <div className='mb-3'>
    <label htmlFor="password"><strong>Password</strong></label>
    <input
          type="password"
          name="password"
          placeholder="Enter Password"
          onChange={handleInput}
          value={values.password}
          className='form-control rounded-0'
          required
        />
  
    {errors.password && <p className='text-danger'> {errors.password}</p>}
    </div>
    <button type='submit' className='btn btn-success w-100 rounded-0'> Sing-Up</button>
    <p>You are agree to aour terms and policies</p>
    <Link to="/login" className='btn btn-default border w-100 bg-light rounded-0 '>Log-In</Link>

    {error && <p className="error-message text-danger">{error}</p>}
    </form>
    </div>
    </div>
  )
}

export default Registration;