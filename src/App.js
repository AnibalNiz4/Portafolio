import './App.css';
import ReactLogo from './Components/skillsSection/ReactLogo';
import Banner from './Components/skillsSection/banner/Banner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Footer from './Components/skillsSection/footer/Footer';
import Projects from './Components/skillsSection/projectsSection/Projects';
import Contact from './Components/skillsSection/contact/Contact';
import NavResponsive from './Components/skillsSection/navResponsive/NavResponsive';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <NavResponsive/>
          <Banner/>
          <ReactLogo/>
          <Projects/>
          <Contact/>
          <Footer/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
