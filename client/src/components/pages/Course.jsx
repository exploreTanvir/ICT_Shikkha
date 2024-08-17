import Course from '../../components/Course/Course';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';

const course = () => {
  return (
    <div>
          <TopBar/>
        <Nav/>
        <Course/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default course