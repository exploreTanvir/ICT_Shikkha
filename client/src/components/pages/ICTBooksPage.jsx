import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import IctBooks from '../ICTBooks/IctBooks';

const ICTBooksPage = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
        <IctBooks/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default ICTBooksPage