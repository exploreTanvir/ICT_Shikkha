import logo from "../../assets/logo.png"
import { Menu } from "../Menu"
import "./nav.css"

const Nav = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
      <div className="row">
      <div className="col-2 d-flex navImg justify-content-end">
                <img src={logo} className="w-50" alt="" />
            </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <div className="toggle"> <i class="fa-solid fa-bars-staggered"></i></div>
    </button>
    <div className="collapse navbar-collapse col-10 d-flex align-items-center" id="navbarSupportedContent">
      <ul className="navbar-nav col-9 d-flex gap-4 justify-content-center">
      {Menu.map((item,index)=>{
                    return(
                        <li className="nav-item" key={index}>
                            <a href={item.url} className={item.cName+" nav-link d-flex align-items-center gap-2 fs-5 btn2" }><i className={item.icon}></i>{item.title}</a>
                            </li>
                    )
                })}
      </ul>
      <div className="col-3 btnGRP d-flex align-items-center justify-content-end">
            <a href="/singUp" className='course btn1  d-flex align-items-center gap-2 fs-6 course me-4 '>Sing up<i className="fa fa-arrow-right"></i></a>
            <a href="/login" className='fs-6 btn1 d-flex align-items-center gap-2 course me-4'>Log in<i className="fa fa-arrow-right "></i></a>
            </div>
    </div>
      </div>
  </div>
</nav></>
  )
}

export default Nav