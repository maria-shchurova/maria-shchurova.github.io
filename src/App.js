import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Triptich from './components/pages/Triptich';
import Touch from './components/pages/Touch';
import Dust from './components/Dust'

function App() {
  return (
    <>
      <Navbar />
      <Dust />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/triptich' element={<Triptich />} />
        <Route path='/touch' element={<Touch />} />
      </Routes>
     
    </>
  );
}
export default App;
