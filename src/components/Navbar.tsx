import { MouseEvent, useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useTranslation } from 'react-i18next';
import LangMenu from '../ui/LangMenu';
import Logos from '../ui/Logos';

const Navbar = () => {
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


  const menuItems = [
    { name: 'HOME', link: '#home' },
    { name: 'ABOUT', link: '#about' },
    { name: 'EXPERIENCE', link: '#experience' },
    { name: 'PROJECTS', link: '#projects' },
    { name: 'CONTACT', link: '#contact' },
  ]

  const handleMenuClick = (event: MouseEvent<HTMLLIElement, globalThis.MouseEvent>, link: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(link);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: offsetTop - 60,
        behavior: 'smooth'
      });
    }
    if (active) setActive(false);
  }


  return (
    <nav
      style={{
        background:
          prevScrollPosition !== 0 || langMenuOpen || active
            ? '#000D15'
            : 'transparent',
        borderBottom: prevScrollPosition !== 0 || langMenuOpen || active ? '1px solid #fff' : '1px solid transparent',
        transition: 'all 0.3s ease-in-out',
      }}
      className={
        active
          ? 'bg-background fixed top-0 left-0 h-25 w-screen transition-all z-10 flex flex-col h-full opacity-100 !pt-2.5 !pb-2.5'
          : (langMenuOpen
            ? 'h-[60px] opacity-95 fixed top-0 left-0 h-2 w-screen pl-2.5 pr-2.5 transition-all z-10 flex flex-row justify-between items-center border-b border-white'
            : 'h-[60px] opacity-95 fixed top-0 left-0 h-2 w-screen pl-2.5 pr-2.5 transition-all z-10 flex flex-row justify-between items-center border-b border-transparent'
          )}>

      <h2 className="fixed top-[18px] lg:top-[14px] left-5 font-light text-[18px]">
        wojwozniak
      </h2>

      <ul className={
        active
          ? '!bg-background lg:h-auto lg:overflow-visible overflow-hidden lg:flex mt-[70px] lg:flex-row lg:w-4/5 lg:mt-0 lg:justify-center lg:items-center lg:gap-10 active'
          : '!bg-transparent overflow-hidden mt-25 h-0 lg:h-auto lg:overflow-visible lg:flex lg:flex-row lg:w-full lg:mt-0 lg:justify-center lg:items-center lg:gap-4'
      }>
        {menuItems.map((item, index) => {
          return <li key={index}
            onClick={(e) => handleMenuClick(e, item.link)}
            className="border-[1px] border-t-white lg:border-t-0 border-b-0 border-l-0 border-r-0 ml-7 mr-11 lg:ml-0 lg:mr-11">
            <a href={item.link}
              className="no-underline text-l text-base w-full flex hover:underline h-[50px] flex-row justify-start ml-1 items-center"
            >
              {t(item.name)}
            </a>
          </li>
        })}
      </ul>

      {active ? <Logos type="bottom-center" /> : ''}

      <LangMenu passLangMenuState={setLangMenuOpen} navBarOpen={active} />

      <button onClick={handleClick}
        className=
        {`z-20 fixed right-5 top-4 bg-transparent border-none outline-none text-white lg:hidden transition-all duration-500
            ${active
            ? 'fade-in-out'
            : ''} `}>
        {active
          ? <AiOutlineClose size="30px" />
          : <AiOutlineMenu size="30px" />
        }
      </button>

    </nav>
  );
};

export default Navbar;