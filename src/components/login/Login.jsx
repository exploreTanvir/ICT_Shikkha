import "./login.css"

const Login = () => {
  return (
    <section className='login'>
        <div class="loginform">
      <main>
        <header id="login">
          <h4>Login</h4>
        </header>
        <form>
          <div class="form_wrapper">
            <input className="loginName" id="input" type="text" required />
            <label for="input">Username</label>
            <i class="fa-solid fa-user"></i>
          </div>
          <div class="form_wrapper">
            <input className="loginPass" id="password" type="password" required />
            <label for="password">Password</label>
            <i class="fa-solid fa-lock"></i>
          </div>

          <div class="remember_box">
            <div class="remember">
              <input type="checkbox" />
              Remember me
            </div>
            <a href="#">Forgot Password ?</a>
          </div>
          <button>LOGIN</button>
          <div class="new_account">
            Don't have account ? <a href="/singUP">Sign up</a>
          </div>
        </form>
      </main>
    </div>
    </section>
  )
}

export default Login