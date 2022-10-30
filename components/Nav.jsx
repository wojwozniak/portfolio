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
    <nav className="fixed right-10 h-full text-2xl text-right flex items-center">
      <ul className='flex gap-5 flex-col'>
        {
          menuItems.map((item) => 
          <li key={item} className="hover:cursor-pointer flex flex-row gap-5 justify-end">
            <a href="#title" className="h-full flex align-center justify-end">
            {item}
            <span className="material-symbols-outlined translate-y-1">remove</span> 
            </a>
          </li>)
        }
        </ul>
    </nav>
  )
}

export default Nav