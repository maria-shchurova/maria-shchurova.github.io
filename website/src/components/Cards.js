import React from 'react'
import CardItem from './CardItem'
import "./Card.css"

//todo deal with images better
import image1 from "../../src/assets/images/GameCovers/AfterAll.png"
import image2 from "../../src/assets/images/GameCovers/BreathOfLife.png"
import image3 from "../../src/assets/images/GameCovers/ForRent.png"

function Cards() {
  return (
    <div className='cards'>
        <h1>My Games</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={image1}
                    text="After All"
                    path="https://firewalkwithme.itch.io/after-all"
                    />
                    <CardItem 
                    src={image2}
                    text="Breath Of Life"
                    path={"https://firewalkwithme.itch.io/breath-of-life"}
                    />
                    <CardItem 
                    src={image3}
                    text="For Rent"
                    path="https://firewalkwithme.itch.io/for-rent"
                    />
                </ul>           
            </div>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem 
                    src={image1}
                    text="After All"
                    path="https://firewalkwithme.itch.io/after-all"
                    />
                    <CardItem 
                    src={image2}
                    text="Breath Of Life"
                    path={"https://firewalkwithme.itch.io/breath-of-life"}
                    />
                    <CardItem 
                    src={image3}
                    text="For Rent"
                    path="https://firewalkwithme.itch.io/for-rent"
                    />
                </ul>           
            </div>
        </div>
    </div>
  )
}

export default Cards