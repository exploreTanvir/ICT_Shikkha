import axios from "axios"; // Import Axios for making HTTP requests
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../Footer/Footer";
import { Menu } from "../Menu";
import Nav from "../Nav/Nav";
import Newsletter from "../newsletter/Newsletter";
import TopBar from "../topbar/TopBar";
import './Profile.css';

function Profile() {
  // State for storing profile information
  const [profileDetails, setProfileDetails] = useState([]);

  // Fetch the profile data from MongoDB via the backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/profile") // Replace with your backend URL
      .then((response) => {
        setProfileDetails(response.data); // Store fetched data in the state
      })
      .catch((error) => {
        console.error("Error fetching profile data:", error);
      });
  }, []);

  return (
    <>
      <TopBar />
      <Nav />
      <div className="app-container">
        <div className="sidebar">
          {profileDetails.map((item,index)=>{
            return(
                <>
                <p>{item.name}</p>
                <p>{item.email}</p>
                </>
            )
          })}
          <nav className="sidebar-nav">
            <ul>
              {Menu.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.url}>{item.title}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
        <div className="profile-container">
          <h2>প্রোফাইল</h2>
          {profileDetails.map((item,index)=>{
            return(
                <>
                <p>{item.name}</p>
                <p>{item.email}</p>
                </>
            )
          })}
        </div>
      </div>
      <Newsletter />
      <Footer />
    </>
  );
}

export default Profile;
