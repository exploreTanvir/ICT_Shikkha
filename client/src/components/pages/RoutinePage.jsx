import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import Routine from './../Routine/Routine';

const RoutinePage = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
      <Routine/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default RoutinePage