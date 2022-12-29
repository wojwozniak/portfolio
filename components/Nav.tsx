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
    <nav className="fixed right-0 h-10 text-3xl text-right flex items-center z-10">
      <ul className='flex gap-5 flex-row'>
        {
          menuItems.map((item, index) => 
          <li key={item} className="hover:cursor-pointer flex flex-row justify-end">
            <a href={"#"+item} className="h-full flex align-center gap-2 justify-end">
              <p className="nav__item__label" >{item}</p>
              <span className="material-symbols-outlined translate-y-1">remove</span> 
            </a>
          </li>)
        }
        </ul>
    </nav>
  )
}

export default Nav