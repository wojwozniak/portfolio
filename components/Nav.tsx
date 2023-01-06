import React from 'react'

const Nav = () => {
    const menuItems = [
      'start',
      'about',
      'skills',
      'work',
      'contact'
    ];
  
  return (
    <nav className="right-0 bottom-0 w-full h-[5vh] text-3xl text-right z-10 bg-red-900">
      <ul className='flex justify-center gap-5 flex-row'>
        {
          menuItems.map((item, index) => 
          <li key={item} className="hover:cursor-pointer flex flex-row justify-end">
            <a href={"#"+item} className="h-full flex align-center gap-2 justify-end">
              <p className="nav__item__label" >{item}</p> 
            </a>
          </li>)
        }
        </ul>
    </nav>
  )
}

export default Nav