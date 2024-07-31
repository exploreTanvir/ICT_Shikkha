import Course from '../components/Course/Course';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import TopBar from '../components/topbar/TopBar';

const Courses = () => {
  return (
    <div>
         <TopBar/>
        <Navbar/>
        <Course/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Courses