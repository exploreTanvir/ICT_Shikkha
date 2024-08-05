import Contact from '../components/Contact/Contact';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';
import Newsletter from '../components/newsletter/Newsletter';
import Review from '../components/review/Review';
import Skill from '../components/Skill/Skill';
import TopBar from '../components/topbar/TopBar';

const Home = () => {
  return (
    <div>
        <TopBar/>
        <Nav/>
      <Hero/>
      <Faq/>
      <Review/>
      <Skill/>
      <Contact/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home