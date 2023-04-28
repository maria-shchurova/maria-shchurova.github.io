import React from 'react'
import { Link } from 'react-router-dom'

function CardItem(props) {
  return (
    <>
    <li className='cards__item'>
        <Link className='cards__item__link' to={props.path}>
            <figure className='cards__item__pic-wrap'>
                <img src={props.src} alt="someImage" className='cards__item__img'></img>
                <div className='gradient'></div>
                <div className='card-body'>
                  <h1 className='card-title'>{props.title}</h1>
                  <p className='card-info'>{props.info}</p>
                </div>
            </figure>
        </Link>
    </li>
    </>
  )
}

export default CardItem