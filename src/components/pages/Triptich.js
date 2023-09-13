import React from 'react';
import '../../App.css';
import triptichImage1 from "../../../src/assets/images/Art/choked.png"
import triptichImage2 from "../../../src/assets/images/Art/befreie mich.png"
import triptichImage3 from "../../../src/assets/images/Art/breaking the stone.png"

import PaintingCardItem from "../../../src/components/PaintingCardItem"
import "../../../src/components/Card.css"

import progressCover1 from "../../../src/assets/images/Art/process/choke1.jpg"
import progressCover2 from "../../../src/assets/images/Art/process/key1.jpg"
import progressCover3 from "../../../src/assets/images/Art/process/stone1.jpg"

function Triptich()
{
    return(
        <div className="triptich">
        <div className='painting-cards__container'>
            <div className='painting-cards__wrapper'>
                <ul className='cards__items'>
                    <PaintingCardItem 
                    src={triptichImage1}
                    title="under construstion"
                    info="click to see progress shots"
                    path="/"
                    />
                    <PaintingCardItem 
                    src={triptichImage2}
                    title="under construstion"
                    info="click to see progress shots"
                    path="/"
                    />
                    <PaintingCardItem 
                    src={triptichImage3}
                    title="under construstion"
                    info="click to see progress shots"
                    path={"/"}
                    />
                </ul>           
            </div>
      </div>
      </div>
    );
}

export default Triptich;