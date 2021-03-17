import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Apod from './pages/Apod/Apod';
import Desenvolvedores from './pages/Desenvolvedores/Desenvolvedores';
import './css/styleAll.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={Apod} />
        <Route path="/Desenvolvedores" exact={true} component={Desenvolvedores} />
      </Switch>
    </ BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
