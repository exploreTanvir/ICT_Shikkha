import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Login from '../components/login/Login';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import Registration from '../components/Registration/Ragistration';
import TopBar from '../components/topbar/TopBar';

const SingUpPage = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
      <Registration/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default SingUpPage