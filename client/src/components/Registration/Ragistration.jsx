import { Link } from "react-router-dom/cjs/react-router-dom.min"
import "../login/login.css"

const Registration = () => {
  return (
    <section className='registration'>
        <div className="loginform">
      <main>
        <header id="register">
          <h4>সাইন আপ</h4>
        </header>
        <form>
          <div className="form_wrapper">
            <input id="input"  className="regName" type="text" required />
            <label for="input">ইউজার নেম</label>
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="form_wrapper">
            <input id="email"  className="regEmail" type="email" required />
            <label for="email">ইমেইল</label>
            <i className="fa-solid fa-envelope"></i>
          </div>
          <div className="form_wrapper">
            <input id="password" className="regPass" type="password" required />
            <label for="password">পাসওয়ার্ড</label>
            <i className="fa-solid fa-lock"></i>
          </div>
          <div className="form_wrapper">
            <input id="repeatPassword" className="resetPass" type="password" required />
            <label for="password">আবারও পাসওয়ার্ড দিন</label>
            <i className="fa-solid fa-lock"></i>
          </div>
          <button>সাইন আপ</button>
          <div className="new_account">
          ইতিমধ্যে একটি অ্যাকাউন্ট আছে ? <Link to="/login">লগ ইন</Link>
          </div>
        </form>
      </main>
    </div>
    </section>
  )
}

export default Registration