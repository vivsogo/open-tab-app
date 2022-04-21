import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom' 
import { DrinkForm } from './Drinks/DrinkForm';
import {Navbar} from './Navigation/Navbar';
import { DrinkContainer } from '../containers/DrinkContainer';
import { Home } from './Home';
import { About } from './About';
import { DrinkCard } from './Drinks/DrinkCard';
import {Header} from './Navigation/Header'
import React from 'react';

function App() {
  return (
    <div className="App">
      <Router forceRefresh={true}>
        <Navbar/>
        <Header slogan="its 5 o'clock somewhere "/>
        <Switch>

          <Route path ='/drinks/new'>
            <DrinkForm/> 
          </Route>

          <Route path= '/drinks/:id'>
            <DrinkCard/>
          </Route>

          <Route path ='/drinks'>
            <DrinkContainer/>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path ='/'>
            <Home/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
 