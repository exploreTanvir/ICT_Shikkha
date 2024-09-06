import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";


const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // New success state

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      setSuccess("Login successful! Redirecting...");
      setError("");
      setTimeout(() => {
        window.location.href = "/#/course"; 
      }, 1000);
    } catch (err) {
      setError(err.response.data.message);
      setSuccess(""); 
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      window.location.href = "/#"; 
    }, 1000);
  };

  // Check if user is logged in
  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <section className='login'>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <div className="loginform">
        <main>
          <header id="login">
            <h4>লগ ইন</h4>
          </header>
          <form onSubmit={handleSubmit}>
            <div className="form_wrapper">
              <input 
                className="loginName" 
                type="email" 
                name="email"  
                onChange={handleChange} 
                required 
              />
              <label htmlFor="input">ইমেইল</label>
              <i className="fa-solid fa-user"></i>
            </div>
            <div className="form_wrapper">
              <input 
                type="password" 
                name="password"  
                onChange={handleChange}  
                className="loginPass" 
                id="password" 
                required 
              />
              <label htmlFor="password">পাসওয়ার্ড</label>
              <i className="fa-solid fa-lock"></i>
            </div>

            <div className="remember_box">
              <div className="remember">
                <input type="checkbox" />
                মনে রাখুন
              </div>
              <a href="/">পাসওয়ার্ড ভুলে গেছেন ?</a>
            </div>
            <button type="submit">লগ ইন</button>
            <div className="new_account">
              কোন একাউন্ট নেই ? <Link to="/sign-up">সাইন আপ</Link>
            </div>
          </form>

          {/* Logout Button */}
          {isLoggedIn && (
            <button onClick={handleLogout} className="logout-button">
              লগ আউট
            </button>
          )}
        </main>
      </div>
    </section>
  )
}

export default Login;
