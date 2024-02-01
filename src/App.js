import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route} from "react-router-dom";
import './App.css';
import Home from './components/pages/Home';
import Triptich from './components/pages/Triptich';
import Touch from './components/pages/Touch';
import Dust from './components/Dust'
import CV from './components/pages/CV';
import Journals from './components/pages/Journals';

function App() {
  const [visitCount, setCount] = useState(0);

  useEffect(() => {
    const storedVisitors = localStorage.getItem("uniqueVisitors");
    const uniqueVisitors = storedVisitors ? JSON.parse(storedVisitors) : [];

    fetch("https://api64.ipify.org?format=json")
      .then((response) => response.json())
      .then((data) => {
        const currentIP = data.ip;

        // Check if the current IP is in the list of unique visitors
        if (!uniqueVisitors.includes(currentIP)) {
          // If not, increment the count and update the list
          setCount((prevCount) => prevCount + 1);
          localStorage.setItem(
            "uniqueVisitors",
            JSON.stringify([...uniqueVisitors, currentIP])
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching IP:", error);
      });
  }, []); 

  return (
    <>
      <Navbar visitCount={visitCount} />
      <Dust />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/triptich' element={<Triptich />} />
        <Route path='/CV' element={<CV />} />
        <Route path='/Journals' element={<Journals />} />
        <Route path='/touch' element={<Touch />} />
      </Routes>
    </>
  );
}
export default App;
