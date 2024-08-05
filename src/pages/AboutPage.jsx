import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import Newsletter from '../components/newsletter/Newsletter';
import TopBar from '../components/topbar/TopBar';

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