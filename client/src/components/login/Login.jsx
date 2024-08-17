import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "./login.css"

const Login = () => {
  return (
    <section className='login'>
        <div class="loginform">
      <main>
        <header id="login">
          <h4>লগ ইন</h4>
        </header>
        <form>
          <div class="form_wrapper">
            <input className="loginName" id="input" type="text" required />
            <label for="input">ইউজার নেম</label>
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="form_wrapper">
            <input className="loginPass" id="password" type="password" required />
            <label for="password">পাসওয়ার্ড</label>
            <i class="fa-solid fa-lock"></i>
          </div>

          <div class="remember_box">
            <div class="remember">
              <input type="checkbox" />
              মনে রাখুন
            </div>
            <a href="#">পাসওয়ার্ড ভুলে গেছেন ?</a>
          </div>
          <button>লগ ইন</button>
          <div class="new_account">
           কোন একাউন্ট নেই ? <Link to="/singUP">সাইন আপ</Link>
          </div>
        </form>
      </main>
    </div>
    </section>
  )
}

export default Login