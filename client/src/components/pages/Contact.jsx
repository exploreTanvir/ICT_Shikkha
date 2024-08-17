import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';

const Contacts = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Contacts