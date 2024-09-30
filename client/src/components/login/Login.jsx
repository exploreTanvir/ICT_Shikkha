import axios from 'axios';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Validation from './LoginValidation';

const Login = () => {
  const [values, setValues] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [errors, setErrors] = useState('');
  const history = useHistory();


  const handleInput = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/login', values);
      if (res.data.success) {
        alert('Login successful!');
        localStorage.setItem('isLoggedIn', true);  // Store login status
        history.push("/");
      } else {
        setError(res.data.message);
        toast(res.data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      setError('Login failed. Please try again.');
      toast('Login failed. Please try again.');
    }
  
    setErrors(Validation(values));
  };
  

  return (
    <div className="login-container d-flex justify-content-center align-items-center bg-info vh-100">
         <form action="" onSubmit={handleSubmit} className='bg-white p-3 rounded w-25'>
    <div className='mb-3'>
    <label htmlFor="email"><strong>Email</strong></label>
    <input
          type="email"
           className='form-control rounded-0'
          name="email"
          placeholder="Enter Email"
          onChange={handleInput}
          value={values.email}
          required
        />
    {errors.email && <p className='text-danger'> {errors.email}</p>}
    </div>
    <div className='mb-3'>
    <label htmlFor="password"><strong>Password</strong></label>
    <input
          type="password"
          className='form-control rounded-0'
          name="password"
          placeholder="Enter Password"
          onChange={handleInput}
          value={values.password}
          required
        />
    {errors.password && <p className='text-danger'> {errors.password}</p>}
    </div>
    <button type='submit' className='btn btn-success w-100 rounded-0'> Log in</button>
    <p>You are agree to aour terms and policies</p>
    <Link to="/signUp" className='btn btn-default border w-100 bg-light rounded-0 '>Sing-Up</Link>


    {error && <p className="error-message text-danger">{error}</p>}
    

    </form>

    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      closeOnClick
      rtl
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    </div>
  );
};

export default Login;
