import React from 'react';
import '../../App.css';
import touchImage from "../../../src/assets/images/Art/hands.jpg"

function Touch()
{
    return(
        <div className="touch">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // This makes the div take up the full viewport height
          }}
        >
          <img src={touchImage} alt="touch no frame" className='full-image'/>
        </div>
      </div>
    );
}

export default Touch;