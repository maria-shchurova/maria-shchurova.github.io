import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Dust from '../Dust';
import Landing from '../Landing'

function Home()
{
    return(
        <>
        <Landing />
        <Dust />
        <Cards />        
        </>
    );
}

export default Home;