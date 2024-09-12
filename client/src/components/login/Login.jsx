import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!validateEmail(formData.email)) {
      setError("অনুগ্রহ করে সঠিক ইমেইল প্রদান করুন");
      setSuccess("");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);
      setSuccess("Login successful! Redirecting...");
      setError("");
      setTimeout(() => {
        window.location.href = "/#/"; 
      }, 1000);
    } catch (err) {
      setError(err.response.data.message);
      setSuccess("");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      window.location.href = "/#/"; 
    }, 1000);
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <section className='login'>
      {error && <p className="text-center" style={{ color: "red" }}>{error}</p>}
      {success && <p className="text-center" style={{ color: "green" }}>{success}</p>}
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
              <a href="/"><u>পাসওয়ার্ড ভুলে গেছেন ?</u></a>
            </div>
            <button type="submit">লগ ইন</button>
            
            <div className="new_account">
              কোন একাউন্ট নেই ? <Link to="/sign-up"><u>সাইন আপ</u> করুণ</Link>
            </div>
          </form>

          {isLoggedIn && (
            <button onClick={handleLogout} className="logout-button">
              লগ আউট
            </button>
          )}
        </main>
      </div>
    </section>
  );
};

export default Login;
