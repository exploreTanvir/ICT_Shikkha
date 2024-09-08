import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import logo from "../../assets/logo.png";
import { Menu, profile, subMenu } from "../Menu";
import "./nav.css";

const Nav = () => {
  const isLoggedIn = !!localStorage.getItem("token"); // Check if user is logged in

  const handleLogout = () => {
    localStorage.removeItem("token");
    setTimeout(() => {
      window.location.href = "/#/login"; 
    }, 1000);
  };

  return (
    <>
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
                {Menu.map((item, index) => (
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
                    {subMenu.map((item, index) => (
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
                     <button onClick={handleLogout} className="dropdown-item d-flex align-items-center gap-2 justify-content-center fs-5 btn2 ">
                     <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        লগ আউট
                      </button>
                  </ul>
                </li>
                ) : (
                  <NavLink
                    to="/login"
                    className="link fs-6 btn1 d-flex align-items-center gap-2 course me-4"
                  >
                    লগ ইন
                    <i className="fa fa-arrow-right"></i>
                  </NavLink>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;