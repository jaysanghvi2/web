//import logo from './logo.svg';
import React from 'react';
import { Route,Routes } from 'react-router-dom';

import Gallery from './gallery/Gallery';
import Home from './home/Home';
import SignUp from './other/SignUp';
import About from './about/About'
import Hom from './Home';
import Jbar from './other/Jbar';

function App() {
  return (

    <>
    
<Jbar />
  <Routes>
 <Route path="/"  element={<Home/>} />
 <Route path='/Gallery' element={<Gallery />}  />
 <Route path='/About' element={<About />} />
 <Route path='/SignUp' element={<SignUp />} />
 </Routes>

    </> 
  );
}

export default App;

