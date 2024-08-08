import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import Registration from './../Registration/Ragistration';

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