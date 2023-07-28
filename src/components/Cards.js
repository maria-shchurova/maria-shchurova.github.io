import React from 'react'
import CardItem from './CardItem'
import "./Card.css"

//todo deal with images better
import image1 from "../../src/assets/images/GameCovers/AfterAll.png"
import image2 from "../../src/assets/images/GameCovers/BreathOfLife.png"
import image3 from "../../src/assets/images/GameCovers/ForRent.jpg"

function Cards() {
  return (
    <div className='cards'>
        <h1>My Games</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={image1}
                    title="After All"
                    info="A point and click adventure game about going through a breakup."
                    path="https://firewalkwithme.itch.io/after-all"
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
                <ul className='cards__items'>
                    <CardItem 
                    src={image1}
                    title="After All"
                    info="A point and click adventure game about going through a breakup."
                    path="https://firewalkwithme.itch.io/after-all"
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
    </div>
  )
}

export default Cards