import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Triptich from './components/pages/Triptich';
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
      </Routes>
     
    </>
  );
}
export default App;
