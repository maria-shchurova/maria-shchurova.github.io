import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
    <li className='painting-cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <figure className='painting-cards__item__pic-wrap'>
                <img src={props.src} alt="someImage" className='cards__item__img'></img>
            </figure>
        </Link>
    </li>
    </>
  )
}

export default CardItem