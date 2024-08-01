import AllCourse from '../components/AllCourse/AllCourse';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import TopBar from '../components/topbar/TopBar';

const Courses = () => {
  return (
    <div>
         <TopBar/>
        <Navbar/>
        <AllCourse/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Courses