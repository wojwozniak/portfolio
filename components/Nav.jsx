import React from 'react'
import { FontAwesomeIcon } from 'react-fontawesome'

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
          menuItems.map((item) => <li className="after:content-['-'] after:m-1.5" key={item}><a href="#">{item}</a></li>)
        }
        </ul>
    </nav>
  )
}

export default Nav