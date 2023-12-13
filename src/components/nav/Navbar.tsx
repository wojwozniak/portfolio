import { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import LangMenu from './LangMenu';
import './navbar.css'


const Navbar = () => {
  /* Translation */
  const { t } = useTranslation();

  /* Navbar for small screens */
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  /* Language menu and disabling other menu when opening */
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  useEffect(() => {
    if (langMenuOpen) {
      setActive(false);
    }
  }, [langMenuOpen]);

  /* Navbar background change on scroll */
  const [prevScrollPosition, setPrevScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;

      setPrevScrollPosition(currentPosition);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPosition]);


  return (
    <>
      <nav
        style={{
          background: prevScrollPosition !== 0 || langMenuOpen ? '#000D15' : 'transparent',
        }}
        className={active ? 'nav active' : 'nav'}
      >
        <div className="nav__logo">
          <h2>LOGO HERE</h2>
        </div>
        <ul id="nav__main" className={active ? 'nav__main active' : 'nav__main'}>
          <li className="nav__item">
            <a href="#home" className="nav__link">
              {t('HOME')}
            </a>
          </li>
          <li className="nav__item">
            <a href="#about" className="nav__link">
              {t('ABOUT')}
            </a>
          </li>
          <li className="nav__item">
            <a href="#works" className="nav__link">
              {t('WORKS')}
            </a>
          </li>
          <li className="nav__item">
            <a href="#contact" className="nav__link">
              {t('CONTACT')}
            </a>
          </li>
        </ul>
        <div className="nav__right">
          <LangMenu passLangMenuState={setLangMenuOpen} navBarOpen={active} />
        </div>
        <button onClick={handleClick} className={`nav__button ${active ? 'fade-in-out' : ''}`}>
          {active ? <AiOutlineClose size="30px" /> : <AiOutlineMenu size="30px" />}
        </button>
      </nav>
    </>
  );
};

export default Navbar;