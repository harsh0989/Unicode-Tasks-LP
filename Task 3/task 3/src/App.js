import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './About';
import './App.css';
import Navbarcomp from './components/Navbarcomp';
import Signin from './Signin';
import Signup from './Signup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Terms from './Terms';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbarcomp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/sign-up" component={Signup} />
          <Route exact path="/auth/login" component={Signin} />
          <Route exact path="/terms" component={Terms} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
