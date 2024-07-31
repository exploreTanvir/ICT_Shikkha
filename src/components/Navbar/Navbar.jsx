import { Menu } from "../Menu"
import "./navbar.css"

const Navbar = () => {
  return (
  <section className="navs">
      <div className="container">
        <div className="row">
            <div className="col-1">
                <h1>logo</h1>
            </div>
            <div className="col-9 links d-flex align-items-center justify-content-center gap-4">
            {Menu.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a href={item.url} className={item.cName+" d-flex align-items-center gap-2 fs-5 btn2"}><i className={item.icon}></i>{item.title}</a>
                            </li>
                    )
                })}
            </div>
            <div className="col-2">
                <a href="#">log in</a>
                <a href="#">sing up</a>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Navbar