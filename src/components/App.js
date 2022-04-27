import './App.css';
import { Route, Routes} from 'react-router-dom' 
import { DrinkForm } from './Drinks/DrinkForm';
import { DrinkCard } from './Drinks/DrinkCard';
import { DrinkContainer } from '../containers/DrinkContainer';
import {Navbar} from './Navigation/Navbar';
import {Header} from './Navigation/Header';
import { Home } from './Home';
import { About } from './About';
import React from 'react';


function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Header slogan="its 5 o'clock somewhere "/>
        <Routes>

         <Route element={<DrinkForm/>} path='/drinks/new'/>

         <Route element={<DrinkCard/>} path='/drinks/:id' />
         <Route element={<DrinkContainer/>} path='/drinks'/>

         <Route element={<About/>} path='/about'/>

         <Route element={<Home/>} path='/'/>

      </Routes>
          
    
    </div>
  );
}

export default App;
 