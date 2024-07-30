import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Hero from './components/Hero/Hero';
import TopBar from './components/topbar/TopBar';

const App = () => {
  return (
    <div>
      <TopBar/>
      <Hero/>
    </div>
  )
}

export default App