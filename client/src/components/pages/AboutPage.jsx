import About from '../About/About';
import Footer from '../Footer/Footer';
import Nav from '../Nav/Nav';
import Newsletter from '../newsletter/Newsletter';
import TopBar from '../topbar/TopBar';

const AboutPage = () => {
  return (
    <div>
         <TopBar/>
        <Nav/>
        <About/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default AboutPage