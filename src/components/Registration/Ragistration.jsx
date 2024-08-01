import "../login/login.css"

const Registration = () => {
  return (
    <section className='registration'>
        <div class="loginform">
      <main>
        <header id="register">
          <h4>CREATE ACCOUNT</h4>
        </header>
        <form>
          <div class="form_wrapper">
            <input id="input"  className="regName" type="text" required />
            <label for="input">Username</label>
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="form_wrapper">
            <input id="email"  className="regEmail" type="email" required />
            <label for="email">Email</label>
            <i class="fa-solid fa-envelope"></i>
          </div>
          <div class="form_wrapper">
            <input id="password" className="regPass" type="password" required />
            <label for="password">Password</label>
            <i class="fa-solid fa-lock"></i>
          </div>
          <div class="form_wrapper">
            <input id="repeatPassword" className="resetPass" type="password" required />
            <label for="password">Repeat Your Password</label>
            <i class="fa-solid fa-lock"></i>
          </div>
          <button>SIGN UP</button>
          <div class="new_account">
            Already have an account ? <a href="/login">Login</a>
          </div>
        </form>
      </main>
    </div>
    </section>
  )
}

export default Registration