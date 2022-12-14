import React from 'react'
import { useCallback, useEffect, useState, useRef } from 'react'
import { useDetectScroll } from "@smakss/react-scroll-direction";

const Nav = () => {
  const menuItems = [
    'start',
    'about',
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

  function updateNav(scrollY:number) {
    ref.current.style.transition = "all .5s ease-in-out";
    ref.current.style.position = 'fixed';
    console.log(scrollY," ", scrollDir);  
    if (scrollDir == 'down') {
      ref.current.style.top = '-60px';
    } else {
      ref.current.style.top = '0';
    }
    if (scrollY != 0 && scrollDir == 'up') {
      ref.current.style.boxShadow = '0 10px 30px black';
      ref.current.style.backgroundColor = 'black';
    } else {
      ref.current.style.boxShadow = '0 0 0 transparent';
      ref.current.style.backgroundColor = 'transparent';
    }
  }
  
  return (
    <nav className="w-full text-3xl text-right h-[60px] z-10 fixed flex justify-end items-center pr-[20px]" ref={ref}>
      <ul className='flex justify-center gap-5 flex-row'>
        {
          menuItems.map((item, index) => 
          <li key={item} className="hover:cursor-pointer flex flex-row justify-end">
            <a href={"#"+item} className="h-full z-20 flex align-center gap-2 justify-end">
              <p className="nav__item__label" >{item}</p> 
            </a>
          </li>
          )
        }
        </ul>
    </nav>
  )
}

export default Nav