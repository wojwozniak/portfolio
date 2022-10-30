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
    <nav className="absolute right-0 h-full text-right flex items-center">
      <ul className='flex gap-5 flex-col'>
        {
          menuItems.map((item) => 
          <li key={item} className="hover:cursor-pointer">
            <a href="#title" className="h-full flex align-center justify-end">
            {item}
            <span className="material-symbols-outlined">remove</span> 
            </a>
          </li>)
        }
        </ul>
    </nav>
  )
}

export default Nav