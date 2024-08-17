import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import Login from '../login/Login';

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