import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import AI from "./components/Chapter/chapter1/AI/AI";
import Global_Village from "./components/Chapter/chapter1/GlobalVillage/GlobalVillage";
import Robotics from "./components/Chapter/chapter1/Robotics/Robotics";
import VR from "./components/Chapter/chapter1/Vr/VR";
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
import GalleryPage from "./components/pages/GalleryPage";
import Home from './components/pages/Home';
import LoginPage from "./components/pages/LoginPage";
import QuizPage from "./components/pages/QuizPage";
import SingUpPage from "./components/pages/SingUpPage";

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
                   
        </Switch>
    </Router>
     
    </div>
  )
}

export default App