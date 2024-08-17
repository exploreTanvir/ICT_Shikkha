import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import AllCourse from './../AllCourse/AllCourse';

const Courses = () => {
  return (
    <div>
         <TopBar/>
        <Nav/>
        <AllCourse/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Courses