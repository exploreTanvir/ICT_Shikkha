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
import LogicGate from "./components/Chapter/chapter3/LogicGate/LogicGate";

const App = () => {
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
          <Route path="/singUp">
            <SingUpPage />
          </Route>
          <Route path="/courseDetail">
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
          <Route path="/HSC" >
            <HSC />
          </Route>
          <Route path="/editor" >
            <EditorPage />
          </Route>
          <Route path="/chapter1" >
            <Chpt1Sub />
          </Route>
          <Route path="/chapter2" >
            <Chpt2Sub />
          </Route>
          <Route path="/chapter3" >
            <Chpt3Sub />
          </Route>
          <Route path="/chapter4" >
            <Chpt4Sub />
          </Route>
          <Route path="/chapter5" >
            <Chpt5Sub />
          </Route>


          {/* Chapter One Start  */}
          <Route path="/Global_village" >
            <Global_Village/>
          </Route>
          <Route path="/virtual_reality" >
            <VR/>
          </Route>
          <Route path="/AI" >
            <AI/>
          </Route>
          <Route path="/Robotics" >
            <Robotics/>
            </Route>
          <Route path="/Cryosurgery" >
            <CryoSurgery/>
          </Route>
          <Route path="/Genetic_Engineering" >
            <GeneticEngineering/>
          </Route>
          <Route path="/Nano_Technology" >
            <NanoTechnology/>
          </Route>
          <Route path="/Bio_Informatics" >
            <BioInformatics/>
          </Route>

          {/* Chapter one end  */}


          {/* Chapter two Start  */}
          <Route path="/Communication_system" >
            <Communication_system/>
          </Route>
          <Route path="/Communication_method" >
            <Communication_Method/>
          </Route>
          <Route path="/Wireless" >
            <Wireless/>
          </Route>
          <Route path="/Mobile_Communication" >
            <Mobile_Communication/>
          </Route>
          <Route path="/Computer_Network" >
            <Computer_Network/>
          </Route>
          <Route path="/Topology" >
            <Topology/>
          </Route>
          <Route path="/Cloud_Computing" >
            <Cloud_Computing/>
          </Route>
          {/* Chapter two end  */}


          {/* Chapter three Start  */}
          <Route path="/Logic_Gate" >
            <LogicGate/>
          </Route>
          
          {/* Chapter three end  */}


          {/* Chapter four start  */}    
          <Route path="/Heading" >
            <Heading/>
          </Route>
          <Route path="/Text_Formatting" >
            <TextFormetting/>
          </Route>
          <Route path="/Sub_Sup" >
            <SubSup/>
          </Route>
          <Route path="/List" >
            <HTMLList/>
          </Route>
          <Route path="/HyperLink" >
            <HyperLink/>
          </Route>
          <Route path="/Img" >
            <HTMlImg/>
          </Route>
          <Route path="/Table" >
            <Table/>
          </Route>         
          {/* Chapter four end  */}

          {/* Chapter five start  */}    
          <Route path="/Program" >
            <Programming/>
          </Route>
          <Route path="/Language" >
            <Language/>
          </Route>         
          <Route path="/Translator" >
            <Translator/>
          </Route>         
          {/* Chapter five end  */}
                   
        </Switch>
    </Router>
     
    </div>
  )
}

export default App