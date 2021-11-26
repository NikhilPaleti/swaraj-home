import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Team from  './components/Team';
import BusinessPlan from './components/BusinessPlans';
import Home from './components/Home';
import Gallery from './components/Gallery';
import DesktopNavbar from './components/DesktopNavbar';
import Heading from './components/Heading';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className = "App">
        <Heading> </Heading>
        <DesktopNavbar> </DesktopNavbar>
        <Switch>
          <Route path="/" exact component= {Home} />
          <Route path="/ourplan" component= {BusinessPlan} />
          <Route path="/ourteam" component= {Team} />
          <Route path="/gallery" component= {Gallery} />
        </Switch>
        
        APP OPEN
        <Footer> </Footer>
      </div>
    </Router>
  );

  
}



export default App;
