import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import Course from '../Course/Course';

const CourseDetail = () => {
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

export default CourseDetail