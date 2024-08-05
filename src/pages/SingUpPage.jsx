import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import Newsletter from '../components/newsletter/Newsletter';
import Registration from '../components/Registration/Ragistration';
import TopBar from '../components/topbar/TopBar';

const SingUpPage = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
      <Registration/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default SingUpPage