import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Newsletter from '../../components/newsletter/Newsletter';
import TopBar from '../../components/topbar/TopBar';
import Faq from './../Faq/Faq';
import Hero from './../Hero/Hero';
import Review from './../review/Review';
import Skill from './../Skill/Skill';

const Home = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
      <Hero/>
      <Skill/>
 
      <Faq/>
      <Review/>
      
     
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home