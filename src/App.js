import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import AboutPage from "./pages/AboutPage";
import Contacts from "./pages/Contact";
import CourseDetail from "./pages/CourseDetail";
import Courses from "./pages/Courses";
import GalleryPage from "./pages/GalleryPage";
import Home from './pages/Home';
import LoginPage from "./pages/LoginPage";
import QuizPage from "./pages/QuizPage";
import SingUpPage from "./pages/SingUpPage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/course">
            <Courses />
          </Route>
          <Route exact path="/contact">
            <Contacts />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/singUp">
            <SingUpPage />
          </Route>
          <Route exact path="/course">
            <Courses />
          </Route>
          <Route exact path="/course/ict">
            <CourseDetail />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route exact path="/gallery">
            <GalleryPage />
          </Route>
          <Route exact path="/quiz">
            <QuizPage />
          </Route>
                   
        </Switch>
    </Router>
     
    </div>
  )
}

export default App