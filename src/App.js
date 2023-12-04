import React from 'react';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Triptich from './components/pages/Triptich';
import Touch from './components/pages/Touch';
import Dust from './components/Dust'
import CV from './components/pages/CV';

function App() {
  return (
    <>
      <Navbar />
      <Dust />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/triptich' element={<Triptich />} />
        <Route path='/CV' element={<CV />} />
        <Route path='/touch' element={<Touch />} />
      </Routes>
     
    </>
  );
}
export default App;
