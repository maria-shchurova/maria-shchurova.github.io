import React from 'react'
import CardItem from './CardItem'
import "./Card.css"

//todo deal with images better
import image9 from "../../src/assets/images/links/github.png"
import image10 from "../../src/assets/images/links/linked.png"
import image11 from "../../src/assets/images/links/cv.png"


import image1 from "../../src/assets/images/GameCovers/AfterAll.png"
import image2 from "../../src/assets/images/GameCovers/BreathOfLife.png"
import image3 from "../../src/assets/images/GameCovers/ForRent.jpg"
import image8 from "../../src/assets/images/GameCovers/Elkridge.png"

import image7 from "../../src/assets/images/Art/framed.jpg"

import imageDevolution from "../../src/assets/images/Art/Devolution.jpg"
import imageSketchfab from "../../src/assets/images/Art/Lighthouse render.png"

function Cards() {
  return (
    <div className='cards'>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <h1>Links</h1>
                <ul className='cards__items'>
                    <CardItem 
                    src={image9}
                    title="GitHub"
                    info=" "
                    path="https://github.com/maria-shchurova"
                    />
                    <CardItem 
                    src={image10}
                    title="LinkedIn"
                    info=" "
                    path="https://www.linkedin.com/in/maria-shchurova-754a001a3/"
                    />
                    <CardItem 
                    src={image11}
                    title="CV"
                    info="last update: 04.2023"
                    path="/CV"
                    />
                </ul>           
            </div>
            
        </div>

        <div className='cards__container'>
            <div className='cards__wrapper'>
            <h1>Game Projects</h1>
                <ul className='cards__items'>
                    <CardItem 
                    src={image1}
                    title="After All"
                    info="A point and click adventure game about going through a breakup."
                    path="https://firewalkwithme.itch.io/after-all"
                    />
                    <CardItem 
                    src={image8}
                    title="Elkridge"
                    info="Prototype of a life simulator with AI-powered characters."
                    path="https://firewalkwithme.itch.io/elkridge"
                    />
                    <CardItem 
                    src={image2}
                    title="Breath Of Life"
                    info="Simulation experiment. Prodedurally growng plants overtake abandoned buildings."
                    path={"https://firewalkwithme.itch.io/breath-of-life"}
                    />
                    <CardItem 
                    src={image3}
                    title="For Rent"
                    info="First-person horror game about a rented soviet flat."
                    path="https://firewalkwithme.itch.io/for-rent"
                    />
                </ul>           
            </div>            
        </div>
        <div className='cards__container'>
            <div className='cards__wrapper'>
            <h1>Other Projects</h1>
                <ul className='cards__items'>
                    <CardItem 
                    src={imageDevolution}
                    title="DEVolution 7"
                    info="Website for Devolution #7 exhibition at A.MAZE 2023"
                    path="https://csongorb.github.io/devolution7/"
                    />
                    <CardItem 
                    src={image7}
                    title="Paintings"
                    info="Once in a blue moon..."
                    path="/triptich"
                    />
                    <CardItem 
                    src={imageSketchfab}
                    title="Sketchfab profile"
                    info="my milestones in 3D modelling"
                    path="https://sketchfab.com/mary.shchurova"
                    />
                </ul>           
            </div>            
        </div>
    </div>
  )
}

export default Cards