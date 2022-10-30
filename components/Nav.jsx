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
    <nav className="fixed right-10 h-full text-3xl text-right flex items-center">
      <ul className='flex gap-5 flex-col'>
        {
          menuItems.map((item) => 
          <li key={item} className="hover:cursor-pointer flex flex-row justify-end">
            <a href="#title" className="h-full flex align-center gap-2 justify-end">
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