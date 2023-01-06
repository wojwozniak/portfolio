import React from 'react'
import { useCallback, useEffect, useState, useRef } from 'react'
import { useDetectScroll } from "@smakss/react-scroll-direction";

const Nav = () => {
  const menuItems = [
    'start',
    'about',
    'skills',
    'work',
    'contact'
  ];

  const [currentY, setScrollY] = useState(0);
  const [scrollDir] = useDetectScroll({});

  const ref = useRef<HTMLDivElement>();
  
  
  const onScroll = useCallback(event => {
    const { pageYOffset, scrollY } = window;
    setScrollY(window.pageYOffset);
    updateNav(pageYOffset);
  }, [scrollDir]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    }
  }, [scrollDir]);

  function updateNav (scrollY:number) {
    console.log(scrollY," ", scrollDir);
    if (scrollY < window.innerHeight || scrollDir == 'down') {
      ref.current.style.position = 'relative';
    } else {
      ref.current.style.position = 'fixed';
      ref.current.style.top = '0';
    }
  }
  
  return (
    <nav className="w-full text-3xl text-right z-10 bg-red-900" ref={ref}>
      <ul className='flex justify-center gap-5 flex-row'>
        {
          menuItems.map((item, index) => 
          <li key={item} className="hover:cursor-pointer flex flex-row justify-end">
            <a href={"#"+item} className="h-full z-20 flex align-center gap-2 justify-end">
              <p className="nav__item__label" >{item}</p> 
            </a>
          </li>)
        }
        </ul>
    </nav>
  )
}

export default Nav