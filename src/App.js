import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from './components/Contact/Contact';
import Faq from './components/Faq/Faq';
import Footer from './components/Footer/Footer';
import Hero from './components/Hero/Hero';
import Skill from './components/Skill/Skill';
import TopBar from './components/topbar/TopBar';

const App = () => {
  return (
    <div>
      <TopBar/>
      <Hero/>
      <Faq/>
      <Skill/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App