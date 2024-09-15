import axios from 'axios';
import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../login/login.css";

const Registration = () => {

  const [formData, setFormData] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); 
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;
  
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
  
    try {
      
      await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
  
      
      setSuccess("Registration successful! Redirecting to login...");
      setError("");
  
      setTimeout(() => {
        window.location.href = "/#/login"; 
      }, 2000); 
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during registration.");
      setSuccess(""); 
    }
  };
  

  return (
    <section className='registration'>
       {error && <p style={{ color: "red" }}>{error}</p>}
       {success && <p style={{ color: "green" }}>{success}</p>}
      <div className="loginform">
        <main>
          <header id="register">
            <h4>সাইন আপ</h4>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form_wrapper">
              <input 
                type="text" 
                name="name" 
                onChange={handleChange} 
                className="regName"  
                required 
              />
              <label htmlFor="input">ইউজার নেম</label>
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="form_wrapper">
              <input 
                name="email" 
                onChange={handleChange}  
                className="regEmail" 
                type="email" 
                required 
              />
              <label htmlFor="email">ইমেইল</label>
              <i className="fa-solid fa-envelope"></i>
            </div>

            <div className="form_wrapper">
              <input 
                type="password" 
                name="password" 
                onChange={handleChange} 
                className="regPass" 
                required 
              />
              <label htmlFor="password">পাসওয়ার্ড</label>
              <i className="fa-solid fa-lock"></i>
            </div>

            <div className="form_wrapper">
              <input 
                type="password" 
                name="confirmPassword" 
                onChange={handleChange} 
                className="resetPass" 
                required 
              />
              <label htmlFor="repeatPassword">আবারও পাসওয়ার্ড দিন</label>
              <i className="fa-solid fa-lock"></i>
            </div>

            <button type="submit">সাইন আপ</button>

            
           

            <div className="new_account">
              ইতিমধ্যে একটি অ্যাকাউন্ট আছে ? <Link to="/login"><u>লগ ইন</u> করুন</Link>
            </div>
          </form>
        </main>
      </div>
    </section>
  )
}

export default Registration;
