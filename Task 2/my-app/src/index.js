import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import Fullflight from './components/Fullflight';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route> */}
        <Route path="/flight/:id">
          <Fullflight />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);



