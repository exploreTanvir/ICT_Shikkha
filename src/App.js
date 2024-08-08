import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

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
                   
        </Switch>
    </Router>
     
    </div>
  )
}

export default App