import React from 'react'
import { useEffect, useRef } from 'react';

const Nav = () => {
    const menuItems = [
      'start',
      'about',
      'skills',
      'work',
      'contact'
  ];

  const handleScroll = () => {
    const pos = window.scrollY;
    if(pos!=0) {
      labelRef.current.style.display = 'none';
    } else {
      labelRef.current.style.display = 'flex';
    }
  }

  const labelRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);
  
  
  return (
    <nav className="fixed right-10 h-full text-3xl text-right flex items-center z-10">
      <ul className='flex gap-5 flex-col'>
        {
          menuItems.map((item) => 
          <li key={item} className="hover:cursor-pointer flex flex-row justify-end">
            <a href={"#"+item} className="h-full flex align-center gap-2 justify-end">
              <p className="nav__item__label" ref={labelRef}>{item}</p>
              <span className="material-symbols-outlined translate-y-1">remove</span> 
            </a>
          </li>)
        }
        </ul>
    </nav>
  )
}

export default Nav