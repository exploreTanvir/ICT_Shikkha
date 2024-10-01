import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { profile } from './../Menu';
import "./nav.css";

const Nav = () => {
  const [data, setData] = useState([]);
  const [datatwo, setDataTwo] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.log(err));
    
    fetch("http://localhost:5000/submenu")
      .then(res => res.json())
      .then(data => setDataTwo(data))
      .catch(err => console.log(err));

    // Check login status
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Clear login status from localStorage
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);  // Update state to reflect logout
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-1 d-flex navImg justify-content-end">
            <a href="https://www.ictshikkha.com">
              <img src={logo} className="w-100" alt="Logo" />
            </a>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars-staggered"></i>
          </button>
          <div className="collapse navbar-collapse col-lg-11" id="navbarSupportedContent">
            <ul className="navbar-nav col-lg-11 d-flex gap-4 justify-content-center">
              {data.map((item, index) => (
                <li className="nav-item" key={index}>
                  <NavLink
                    to={item.url}
                    exact={item.url === "/"}
                    className={({ isActive }) =>
                      `${item.cName} nav-link d-flex align-items-center gap-2 fs-5 btn2 ${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    <i className={item.icon}></i>
                    {item.title}
                  </NavLink>
                </li>
              ))}
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle nav-link d-flex align-items-center gap-2 fs-5 btn2"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa-solid fa-layer-group"></i>
                  আরো
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  {datatwo.map((item, index) => (
                    <li className="nav-item" key={index}>
                      <NavLink
                        to={item.url}
                        className={({ isActive }) =>
                          `${item.cName} nav-link d-flex align-items-center gap-2 justify-content-center fs-5 btn2 ${
                            isActive ? "active" : ""
                          }`
                        }
                      >
                        <i className={item.icon}></i>
                        {item.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>

            <div className="col-lg-1 btnGRP d-flex justify-content-end">
              {isLoggedIn ? (
                 <li className="nav-item dropdown list-unstyled">
                 <Link
                   className="nav-link dropdown-toggle nav-link d-flex align-items-center gap-2 fs-5 btn2"
                   href="#"
                   id="navbarDropdown"
                   role="button"
                   data-bs-toggle="dropdown"
                   aria-expanded="false"
                 >
                   <i className="fa fa-user"></i>
                    
                 </Link>
                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                   {profile.map((item, index) => (
                     <li className="nav-item" key={index}>
                       <NavLink
                         to={item.url}
                         className={({ isActive }) =>
                           `${item.cName} nav-link d-flex align-items-center gap-2 justify-content-center fs-5 btn2 ${
                             isActive ? "active" : ""
                           }`
                         }
                       >
                         <i className={item.icon}></i>
                         {item.title}
                       </NavLink>
                     </li>
                   ))}
                    <button 
                      className="dropdown-item d-flex align-items-center gap-2 justify-content-center fs-5 btn2" 
                      onClick={handleLogout}
                    >
                      <i className="fa-solid fa-arrow-right-from-bracket"></i>
                      লগ আউট
                    </button>
                 </ul>
               </li>
              ) : (
                <NavLink to="/login" className="link fs-6 btn1 d-flex align-items-center gap-2 course me-4">
                  লগ ইন
                  <i className="fa fa-arrow-right"></i>
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
