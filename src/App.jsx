import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Services from './Components/Services';
import Company from './Components/Company';
import Contacts from './Components/Contacts';






const App = () => {
  return (
    <div className='App'>
      
      < Navbar/> 
      < Hero/> 
      < Services/> 
      < Company/>
      <Contacts/>

    </div>
  )
}

export default App
