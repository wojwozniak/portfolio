import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import './navbar.css'
import LangMenu from './LangMenu';

const Navbar = ({language, setLanguage} : {language: string, setLanguage: React.Dispatch<React.SetStateAction<string>>} ) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className={active ? 'nav active' : 'nav'} >
        <div className="nav__logo">
          <h2>LOGO HERE</h2>
        </div>
        <ul className={active ? 'nav__main active' : 'nav__main'}>
          <li className="nav__item">
            <a href="#home" className="nav__link">
              HOME
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              ABOUT
            </a>
          </li>
          <li className="nav__item">
            <a href="#works" className="nav__link">
              WORKS
            </a>
          </li>
          <li className="nav__item">
            <a href="#experience" className="nav__link">
              EXPERIENCE
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              CONTACT
            </a>
          </li>
        </ul>
        <LangMenu language={language} setLanguage={setLanguage} />
        <button onClick={handleClick} className={`nav__button ${active ? 'fade-in-out' : ''}`}>
          { active
          ? <AiOutlineClose size="30px" />
          : <AiOutlineMenu size="30px" /> }
        </button>
      </nav>
    </>
  )
}

export default Navbar