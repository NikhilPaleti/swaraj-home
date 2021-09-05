import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Team from  './components/Team';
import BusinessPlan from './components/BusinessPlans';
import Home from './components/Home';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className = "App">
      <Router>
        <Switch>
          <Route path="/" exact component= {Home}> </Route>
          <Route path="/ourplan" component= {BusinessPlan}> </Route>
          <Route path="/ourteam" component= {Team}> </Route>
          <Route path="/gallery" component= {Gallery}> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
