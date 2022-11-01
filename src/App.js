import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './routes/Home';
import Training from './routes/Training';
import Pricing from './routes/Pricing';
import Contact from './routes/Contact';
function App() {
  return (
    <>
     <Routes>
         <Route path='/' element={<Home/>}></Route>
         <Route path='/pricing' element={<Pricing/>}></Route>
         <Route path='/training' element={<Training/>}></Route>
         <Route path='/Contact' element={<Contact/>}></Route>
     </Routes>
    </>
  );
}

export default App;
