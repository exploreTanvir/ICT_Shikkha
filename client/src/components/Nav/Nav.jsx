import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { Menu, subMenu } from "../Menu";
import "./nav.css";

const Nav = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1 d-flex navImg justify-content-end">
              <a href="https://www.ictshikkha.com"><img src={logo} className="w-100" alt="Logo" /></a>
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
                      exact={item.url === "/"} // Apply exact match only for the home route
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
                  <a className="nav-link dropdown-toggle  nav-link d-flex align-items-center gap-2 fs-5 btn2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-solid fa-layer-group"></i>
                  আরো 
                  </a>
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
                <NavLink
                  to="/login"
                  className="link fs-6 btn1 d-flex align-items-center gap-2 course me-4"
                >
                  লগ ইন
                  <i className="fa fa-arrow-right"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
