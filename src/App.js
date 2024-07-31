import {
  Route,
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";

import Home from './pages/Home';
import Courses from "./pages/Courses";
import Contacts from "./pages/Contact";

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
          
          
          
        </Switch>
    </Router>
     
    </div>
  )
}

export default App