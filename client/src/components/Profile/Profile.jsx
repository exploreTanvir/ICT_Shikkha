import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import Newsletter from "../newsletter/Newsletter";
import TopBar from "../topbar/TopBar";
import './Profile.css';

function Profile() {
  // State for storing profile information
  const [profileDetails, setProfileDetails] = useState({});
  const [data, setData] = useState([]);

  // Fetch the profile data from MongoDB via the backend
  useEffect(() => {
    const token = localStorage.getItem('token'); // Retrieve token from localStorage
    if (token) {
      axios
        .get("http://localhost:5000/login", {
          headers: {
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
        })
        .then((response) => {
          setProfileDetails(response.data); // Store fetched profile data in the state
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
        });
    }
  }, []);

  // Fetch the menu data
  useEffect(() => {
    fetch("http://localhost:5000/api/auth/menu")
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
          <p><strong>Name:</strong> {profileDetails.name}</p>
          <p><strong>Email:</strong> {profileDetails.email}</p>
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
          <p><strong>Name:</strong> {profileDetails.name}</p>
          <p><strong>Email:</strong> {profileDetails.email}</p>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Profile;
