import Footer from '../components/Footer/Footer';
import Login from '../components/login/Login';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import TopBar from '../components/topbar/TopBar';

const LoginPage = () => {
  return (
    <div>
         <TopBar/>
        <Navbar/>
      <Login/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default LoginPage