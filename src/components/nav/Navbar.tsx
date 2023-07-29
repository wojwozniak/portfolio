import { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const btnStyle = {
    transform: active ? 'rotate(90deg)' : 'rotate(0deg)',
  };

  const activeMenuStyle = {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'top',
  };

  const navVisible = { height: 'auto'}

  const emptyStyle = {}

  return (
    <>
      <nav className='nav' style={active ? activeMenuStyle : emptyStyle}>
        <div className="logo__container">
          <h2>LOGO HERE</h2>
        </div>
        <button onClick={handleClick} className='nav__button' style={btnStyle}>
          <AiOutlineMenu size="30px" />
        </button>
        <div className="nav__main" style={active ? navVisible : emptyStyle}>
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
            <li className="nav__item">
              <a href="#about" className="nav__link">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className='nav__lang nav__main' style={active ? navVisible : emptyStyle}>
            <div className='nav__lang__content'>
              <p className='nav__lang__content__text'>Change language:</p>

              <p>flag</p>
            </div>
          </div>
      </nav>
    </>
  )
}

export default Navbar