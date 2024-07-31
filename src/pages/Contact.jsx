import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import TopBar from '../components/topbar/TopBar';

const Contacts = () => {
  return (
    <div>
        <TopBar/>
        <Navbar/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Contacts