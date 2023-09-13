import React from 'react';
import '../../App.css';
import triptichImage from "../../../src/assets/images/Art/triptich.png"

function Triptich()
{
    return(
        <div className="triptich">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // This makes the div take up the full viewport height
          }}
        >
          <img src={triptichImage} alt="full triptich" className='full-image'/>
        </div>
      </div>
    );
}

export default Triptich;