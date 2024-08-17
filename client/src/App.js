import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AI from "./components/Chapter/chapter1/AI/AI";
import BioInformatics from "./components/Chapter/chapter1/BioInformatics/Bio_Informatics";
import CryoSurgery from "./components/Chapter/chapter1/CryoSurgery/CryoSurgery";
import GeneticEngineering from "./components/Chapter/chapter1/GeneticEnginnering/GeneTicEngineering";
import Global_Village from "./components/Chapter/chapter1/GlobalVillage/GlobalVillage";
import NanoTechnology from "./components/Chapter/chapter1/NanoTechnology/NanoTechnology";
import Robotics from "./components/Chapter/chapter1/Robotics/Robotics";
import VR from "./components/Chapter/chapter1/Vr/VR";
import Cloud_Computing from "./components/Chapter/chapter2/Cloud_Computing/Cloud_Computing";
import Communication_Method from "./components/Chapter/chapter2/ComMethod/Cmmunnicatio_Method";
import Communication_system from "./components/Chapter/chapter2/Communication_System/Communication_system";
import Computer_Network from "./components/Chapter/chapter2/Computer_Network/Computer_Network";
import Mobile_Communication from "./components/Chapter/chapter2/Mobile/Mobile_Communication";
import Topology from "./components/Chapter/chapter2/Topology/Topology";
import Wireless from "./components/Chapter/chapter2/Wireless/Wireless";
import LogicGate from "./components/Chapter/chapter3/LogicGate/LogicGate";
import Heading from "./components/Chapter/chapter4/Heading/Heading";
import HTMlImg from "./components/Chapter/chapter4/HTMLImg/HTMlImg";
import HTMLList from "./components/Chapter/chapter4/HTMLList/HTMLList";
import HyperLink from "./components/Chapter/chapter4/HyperLink/HyperLink";
import SubSup from "./components/Chapter/chapter4/SubSup/SubSup";
import Table from "./components/Chapter/chapter4/Table/Table";
import TextFormetting from "./components/Chapter/chapter4/TextFormetting/TextFormetting";
import Language from "./components/Chapter/chapter5/Language/Language";
import Programming from "./components/Chapter/chapter5/Programming/Programming";
import Translator from "./components/Chapter/chapter5/Translator/Translator";
import Chpt1Sub from "./components/chapterSub/Chpt1Sub/Chpt1Sub";
import Chpt2Sub from "./components/chapterSub/Chpt2Sub/Chpt2Sub";
import Chpt3Sub from "./components/chapterSub/Chpt3Sub/Chpt3Sub";
import Chpt4Sub from "./components/chapterSub/Chpt4Sub/Chpt4Sub";
import Chpt5Sub from "./components/chapterSub/Chpt5Sub/Chpt5Sub";
import HSC from "./components/HSC/HSC";
import AboutPage from "./components/pages/AboutPage";
import Contacts from "./components/pages/Contact";
import CourseDetail from "./components/pages/CourseDetail";
import Courses from "./components/pages/Courses";
import EditorPage from "./components/pages/EditorPage";
import GalleryPage from "./components/pages/GalleryPage";
import Home from './components/pages/Home';
import LoginPage from "./components/pages/LoginPage";
import QuizPage from "./components/pages/QuizPage";
import SingUpPage from "./components/pages/SingUpPage";

const App = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Show button when scrolled 200px down
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/course">
            <Courses />
          </Route>
          <Route path="/contact">
            <Contacts />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <Route path="/sing-up">
            <SingUpPage />
          </Route>
          <Route path="/course-detail">
            <CourseDetail />
          </Route>
          <Route path="/about">
            <AboutPage/>
          </Route>
          <Route path="/gallery">
            <GalleryPage />
          </Route>
          <Route path="/quiz" >
            <QuizPage />
          </Route>
          <Route path="/hsc" >
            <HSC />
          </Route>
          <Route path="/editor" >
            <EditorPage />
          </Route>
          <Route path="/chapter-1" >
            <Chpt1Sub />
          </Route>
          <Route path="/chapter-2" >
            <Chpt2Sub />
          </Route>
          <Route path="/chapter-3" >
            <Chpt3Sub />
          </Route>
          <Route path="/chapter-4" >
            <Chpt4Sub />
          </Route>
          <Route path="/chapter-5" >
            <Chpt5Sub />
          </Route>


          {/* Chapter One Start  */}
          <Route path="/global-village" >
            <Global_Village/>
          </Route>
          <Route path="/virtual-reality" >
            <VR/>
          </Route>
          <Route path="/artificial-intelligence" >
            <AI/>
          </Route>
          <Route path="/robotics" >
            <Robotics/>
            </Route>
          <Route path="/cryosurgery" >
            <CryoSurgery/>
          </Route>
          <Route path="/genetic-engineering" >
            <GeneticEngineering/>
          </Route>
          <Route path="/nano-technology" >
            <NanoTechnology/>
          </Route>
          <Route path="/bio-informatics" >
            <BioInformatics/>
          </Route>

          {/* Chapter one end  */}


          {/* Chapter two Start  */}
          <Route path="/communication-system" >
            <Communication_system/>
          </Route>
          <Route path="/communication-method" >
            <Communication_Method/>
          </Route>
          <Route path="/wireless" >
            <Wireless/>
          </Route>
          <Route path="/mobile-communication" >
            <Mobile_Communication/>
          </Route>
          <Route path="/computer-network" >
            <Computer_Network/>
          </Route>
          <Route path="/topology" >
            <Topology/>
          </Route>
          <Route path="/cloud-computing" >
            <Cloud_Computing/>
          </Route>
          {/* Chapter two end  */}


          {/* Chapter three Start  */}
          <Route path="/logic-gate" >
            <LogicGate/>
          </Route>
          
          {/* Chapter three end  */}


          {/* Chapter four start  */}    
          <Route path="/heading" >
            <Heading/>
          </Route>
          <Route path="/text-formatting" >
            <TextFormetting/>
          </Route>
          <Route path="/sub-sup" >
            <SubSup/>
          </Route>
          <Route path="/list" >
            <HTMLList/>
          </Route>
          <Route path="/hyper-link" >
            <HyperLink/>
          </Route>
          <Route path="/img" >
            <HTMlImg/>
          </Route>
          <Route path="/table" >
            <Table/>
          </Route>         
          {/* Chapter four end  */}

          {/* Chapter five start  */}    
          <Route path="/program" >
            <Programming/>
          </Route>
          <Route path="/language" >
            <Language/>
          </Route>         
          <Route path="/translator" >
            <Translator/>
          </Route>         
          {/* Chapter five end  */}
                   
        </Switch>
    </Router>
    {showScrollButton && (
        <div className='topArrow' onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i></div>
      )}
    </div>
  )
}

export default App