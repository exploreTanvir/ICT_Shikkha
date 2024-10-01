import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Newsletter from "../newsletter/Newsletter";
import TopBar from "../topbar/TopBar";
import './Profile.css';

function Profile() {
  const [profileDetails, setProfileDetails] = useState({ name: '', email: '' });
  const [data, setData] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log("Token found, making request...");
      axios
        .get("http://localhost:5000/login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log("Profile data received:", response.data);
          if (response.data) {
            setProfileDetails({
              name: response.data.name,
              email: response.data.email,
            });
          }
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    } else {
      console.log("No token found in localStorage");
    }
  }, []);

  // Fetch the menu data
  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <TopBar />
      <Nav />
      <div className="app-container">
        <div className="sidebar">
          <p><strong>Name:</strong> {profileDetails.name || "Loading..."}</p>
          <p><strong>Email:</strong> {profileDetails.email || "Loading..."}</p>
          <nav className="sidebar-nav">
            <ul>
              {data.map((item, index) => (
                <li key={index}>
                  <Link to={item.url}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="profile-container">
          <h2>প্রোফাইল</h2>
          <p><strong>Name:</strong> {profileDetails.name || "Loading..."}</p>
          <p><strong>Email:</strong> {profileDetails.email || "Loading..."}</p>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Profile;
