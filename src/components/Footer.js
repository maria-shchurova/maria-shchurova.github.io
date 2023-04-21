import React from 'react'
import { Button } from './Button'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer-container'>
        
          <div class='footer-logo'>
          </div>
          <small class='website-rights'>maria shchurova © 2023</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link '
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
            <Link
              class='social-icon-link '
              to='/'
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
            <Link
              class='social-icon-link '
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
  )
}

export default Footer