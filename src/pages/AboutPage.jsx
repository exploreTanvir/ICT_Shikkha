import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/newsletter/Newsletter';
import TopBar from '../components/topbar/TopBar';

const AboutPage = () => {
  return (
    <div>
         <TopBar/>
        <Navbar/>
        <About/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default AboutPage