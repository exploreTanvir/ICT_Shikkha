import Footer from '../components/Footer/Footer';
import Login from '../components/login/Login';
import Nav from '../components/Nav/Nav';
import Newsletter from '../components/newsletter/Newsletter';
import TopBar from '../components/topbar/TopBar';

const LoginPage = () => {
  return (
    <div>
         <TopBar/>
        <Nav/>
      <Login/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default LoginPage