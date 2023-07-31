import { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import './navbar.css'
import LangMenu from './LangMenu';

type Translations = {
  HOME: string;
  ABOUT: string;
  WORKS: string;
  CONTACT: string;
  Resume: string;
};



const Navbar = ({ language, setLanguage }: { language: string, setLanguage: React.Dispatch<React.SetStateAction<string>> }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  const translationsList: { [key: string]: Translations } = {
    PL: {
      HOME: 'STRONA GŁÓWNA',
      ABOUT: 'O MNIE',
      WORKS: 'PROJEKTY',
      CONTACT: 'KONTAKT',
      Resume: 'CV',
    },
    EN: {
      HOME: 'HOME',
      ABOUT: 'ABOUT',
      WORKS: 'WORKS',
      CONTACT: 'CONTACT',
      Resume: 'Resume',
    },
    DE: {
      HOME: 'STARTSEITE',
      ABOUT: 'ÜBER MICH',
      WORKS: 'ARBEITEN',
      CONTACT: 'KONTAKT',
      Resume: 'Lebenslauf',
    },
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
              {translationsList[language]?.HOME}
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              {translationsList[language]?.ABOUT}
            </a>
          </li>
          <li className="nav__item">
            <a href="#works" className="nav__link">
              {translationsList[language]?.WORKS}
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              {translationsList[language]?.CONTACT}
            </a>
          </li>
        </ul>
        <div className='nav__right'>
          <a className='contact__text'>
            <p>{translationsList[language]?.Resume}</p>
          </a>
          <LangMenu language={language} setLanguage={setLanguage} />
        </div>
        <button onClick={handleClick} className={`nav__button ${active ? 'fade-in-out' : ''}`}>
          {active
            ? <AiOutlineClose size="30px" />
            : <AiOutlineMenu size="30px" />}
        </button>
      </nav>
    </>
  )
}

export default Navbar