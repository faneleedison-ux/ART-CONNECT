import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import SignUp from './components/Login/SignUp';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Artwork from './components/Artwork/Artwork';
import About from './components/About/About';
import Creators from './components/Creators/Creators';



  
  function App() {

   
  return (
    
    <Router>
            
           <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/artwork' element={< Artwork />}></Route>
                
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/creators' element={< Creators />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
               
                 <Route exact path='/sign-up' element={< SignUp />}></Route>
          </Routes>
         
       </Router>
  );
}

export default App;