import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./login.css"

const Login = () => {
  return (
    <section className='login'>
        <div className="loginform">
      <main>
        <header id="login">
          <h4>লগ ইন</h4>
        </header>
        <form>
          <div className="form_wrapper">
            <input className="loginName" id="input" type="text" required />
            <label for="input">ইউজার নেম</label>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="form_wrapper">
            <input className="loginPass" id="password" type="password" required />
            <label for="password">পাসওয়ার্ড</label>
            <i className="fa-solid fa-lock"></i>
          </div>

          <div className="remember_box">
            <div className="remember">
              <input type="checkbox" />
              মনে রাখুন
            </div>
            <a href="#">পাসওয়ার্ড ভুলে গেছেন ?</a>
          </div>
          <button>লগ ইন</button>
          <div className="new_account">
           কোন একাউন্ট নেই ? <Link to="/singUP">সাইন আপ</Link>
          </div>
        </form>
      </main>
    </div>
    </section>
  )
}

export default Login