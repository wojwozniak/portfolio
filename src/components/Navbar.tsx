import React from 'react'
import Button from './Button'

const Navbar = () => {
  return (
    <>
      <nav className="nav">
        <div className="logo__container">
          <h2>LOGO HERE</h2>
        </div>

        <div className="nav__main">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link">
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#works" className="nav__link">
                Works
              </a>
            </li>
            <li className="nav__item">
              <a href="#experience" className="nav__link">
                Experience
              </a>
            </li>
          </ul>
          <div>
            <p>+48 123 456 789</p>
            <div>flag</div>
          </div>
        </div>

        <Button />
      </nav>
    </>
  )
}

export default Navbar