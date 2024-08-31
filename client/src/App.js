import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
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
import Adder from "./components/Chapter/chapter3/Adder/Adder";
import Boolean_Algebra from "./components/Chapter/chapter3/Boolean_Algebra/Boolean_Algebra";
import Code from "./components/Chapter/chapter3/Code/Code";
import Encoder_Decoder from "./components/Chapter/chapter3/Encoder_Decoder/Encoder_Decoder";
import LogicGate from "./components/Chapter/chapter3/LogicGate/LogicGate";
import Number_system from "./components/Chapter/chapter3/Number/Number_system";
import Register from "./components/Chapter/chapter3/Register/Register";
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
import Chapter6 from "./components/Chapter/chapter6/Chapter6";
import Chpt1Sub from "./components/chapterSub/Chpt1Sub/Chpt1Sub";
import Chpt2Sub from "./components/chapterSub/Chpt2Sub/Chpt2Sub";
import Chpt3Sub from "./components/chapterSub/Chpt3Sub/Chpt3Sub";
import Chpt4Sub from "./components/chapterSub/Chpt4Sub/Chpt4Sub";
import Chpt5Sub from "./components/chapterSub/Chpt5Sub/Chpt5Sub";
import Chpt1Audio from "./components/chptAudio/chpt1Audio/Chpt1Audio";
import Chpt2Audio from "./components/chptAudio/Chpt2Audio/Chpt2Audio";
import Chpt3Audio from "./components/chptAudio/Chpt3Audio/Chpt3Audio";
import Chpt4Audio from "./components/chptAudio/Chpt4Audio/Chpt4Audio";
import Chpt5Audio from "./components/chptAudio/Chpt5Audio/Chpt5Audio";
import Chptr6Audio from "./components/chptAudio/Chptr6Audio/Chptr6Audio";
import Privacy from "./components/FooterItem/Privacy/Privacy";
import Refund from "./components/FooterItem/Refund/Refund";
import Terms from "./components/FooterItem/Terms/Terms";
import HSC from "./components/HSC/HSC";
import AboutPage from "./components/pages/AboutPage";
import AudioBookPage from "./components/pages/AudioBookPage";
import Contacts from "./components/pages/Contact";
import CourseDetail from "./components/pages/CourseDetail";
import Courses from "./components/pages/Courses";
import EditorPage from "./components/pages/EditorPage";
import GalleryPage from "./components/pages/GalleryPage";
import Home from './components/pages/Home';
import ICTBooksPage from "./components/pages/ICTBooksPage";
import LoginPage from "./components/pages/LoginPage";
import QuizPage from "./components/pages/QuizPage";
import RoutinePage from "./components/pages/RoutinePage";
import SingUpPage from "./components/pages/SingUpPage";
import ModelTest from "./components/Sugg&Test/ModelTest/ModelTest";
import Suggestion from "./components/Sugg&Test/Suggestion/Suggestion";

const App = () => {


  const handleRightClick = (event) => {
    event.preventDefault();
    alert('Right-click is disabled!');
  };

  
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

// inspact code 
  // useEffect(() => {
  //   // Disable right-click
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });

  //   // Disable specific keyboard shortcuts
  //   document.onkeydown = (e) => {
  //     if (
  //       e.keyCode === 123 || // F12 for Developer Tools
  //       (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I for Developer Tools
  //       (e.ctrlKey && e.keyCode === 85) // Ctrl+U for View Source
  //     ) {
  //       return false;
  //     }
  //   };
    
  //   return () => {
  //     document.removeEventListener("contextmenu", () => {});
  //     document.onkeydown = null;
  //   };
  // }, []);

  return (
    <div> 
       {/* onContextMenu={handleRightClick} */}
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          
          <Route path="/course" component={Courses}/>
          <Route path="/contact" component={Contacts} />
          <Route path="/audio-book" component={AudioBookPage} />
          <Route path="/login" component={LoginPage} />
           

          <Route path="/sing-up"component={SingUpPage}/>
          <Route path="/course-detail" component={CourseDetail}/>
          <Route path="/about" component={AboutPage}/>
          <Route path="/gallery" component={GalleryPage}/>
          <Route path="/quiz" component={QuizPage} />
          <Route path="/hsc" component={HSC} />
          <Route path="/editor" component={EditorPage} />
          <Route path="/ict-books" component={ICTBooksPage} />
          <Route path="/routine" component={RoutinePage} />


          <Route path="/chapter-1" component={Chpt1Sub} />
          <Route path="/chapter-2" component={Chpt2Sub} />
          <Route path="/chapter-3" component={Chpt3Sub} />
          <Route path="/chapter-4" component={Chpt4Sub} />
          <Route path="/chapter-5" component={Chpt5Sub} />
          <Route path="/chapter-6" component={Chapter6} />
          <Route path="/suggestion" component={Suggestion} />
          <Route path="/model-test" component={ModelTest} />
         


          {/* Chapter One Start  */}
            
            <Route path="/global-village" component={Global_Village} />
          <Route path="/virtual-reality" component={VR} />
          <Route path="/artificial-intelligence" component={AI} />
          <Route path="/robotics" component={Robotics} />
          <Route path="/cryosurgery" component={CryoSurgery} />
          <Route path="/genetic-engineering" component={GeneticEngineering} />
          <Route path="/nano-technology" component={NanoTechnology} />
          <Route path="/bio-informatics" component={BioInformatics} />
          {/* Chapter one end  */}


          {/* Chapter two Start  */}
          <Route path="/communication-system" component={Communication_system} />
          <Route path="/communication-method" component={Communication_Method} />
          <Route path="/wireless" component={Wireless} />
          <Route path="/mobile-communication" component={Mobile_Communication} />
          <Route path="/computer-network" component={Computer_Network} />
          <Route path="/topology" component={Topology} />
          <Route path="/cloud-computing" component={Cloud_Computing} />
          {/* Chapter two end  */}


          {/* Chapter three Start  */}
          <Route path="/logic-gate" component={LogicGate} />
          <Route path="/numbering-system" component={Number_system} />
          <Route path="/boolean-algebra" component={Boolean_Algebra} />
          <Route path="/encoder-decoder" component={Encoder_Decoder} />
          <Route path="/adder" component={Adder} />
          <Route path="/register" component={Register} />
          <Route path="/code" component={Code} />
          
          {/* Chapter three end  */}


          {/* Chapter four start  */}    
          <Route path="/heading" component={Heading} />
          <Route path="/text-formatting"  component={TextFormetting} />
          <Route path="/sub-sup" component={SubSup} />
          <Route path="/list" component={HTMLList} />
          <Route path="/hyper-link" component={HyperLink} />
          <Route path="/img" component={HTMlImg} />
          <Route path="/table" component={Table} />        
          {/* Chapter four end  */}

          {/* Chapter five start  */}    
          <Route path="/program" component={Programming} />
          <Route path="/language" component={Language} />        
          <Route path="/translator" component={Translator} />        
                  
          {/* Chapter five end  */}




          {/* Footer Item start  */}

          <Route path="/terms&condition" component={Terms}/> 
          <Route path="/privacy-policy" component={Privacy} /> 
          <Route path="/refund" component={Refund} /> 
          {/* Footer Item end  */}




          {/* Audio chapter start  */}

          <Route path="/chapter-audio-1" component={Chpt1Audio} />
          <Route path="/chapter-audio-2" component={Chpt2Audio} />
          <Route path="/chapter-audio-3" component={Chpt3Audio} />
          <Route path="/chapter-audio-4" component={Chpt4Audio} />
          <Route path="/chapter-audio-5" component={Chpt5Audio} />
          <Route path="/chapter-audio-6" component={Chptr6Audio} />
          
           
          {/* Audio chapter end  */}
                  
        </Switch>
    </Router>
    {showScrollButton && (
        <div className='topArrow' onClick={scrollToTop}><i className="fa-solid fa-arrow-up"></i></div>
      )}
    </div>
  )
}

export default App