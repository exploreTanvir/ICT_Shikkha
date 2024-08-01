import logo from "../../assets/logo.png"
import { Menu } from "../Menu"
import "./navbar.css"

const Navbar = () => {
  return (
  <section className="navs">
      <div className="container-fluid">
        <div className="row">
            <div className="col-2 d-flex  justify-content-end">
                <img src={logo} className="w-50" alt="" />
            </div>
            <div className="col-8 links d-flex align-items-center justify-content-center gap-4">
            {Menu.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a href={item.url} className={item.cName+" d-flex align-items-center gap-2 fs-5 btn2" }><i className={item.icon}></i>{item.title}</a>
                            </li>
                    )
                })}
            </div>
            <div className="col-2 d-flex align-items-center ">
            <a href="/singUp" className='course btn1  d-flex align-items-center gap-2 fs-6 course me-4 '>Sing up<i class="fa fa-arrow-right"></i></a>
            <a href="/login" className='fs-6 btn2  d-flex align-items-center gap-2 course me-4'>Log in<i class="fa fa-arrow-right "></i></a>
            </div>
        </div>
    </div>
  </section>

  )
}

export default Navbar