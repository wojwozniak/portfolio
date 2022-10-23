import React from 'react'

const Nav = () => {
  return (
    <nav className="absolute right-0 h-full text-right flex items-center">
        <ul className='flex gap-5 flex-col'>
            <li>start</li>
            <li>about</li>
            <li>skills</li>
            <li>work</li>
            <li>content</li>
        </ul>
    </nav>
  )
}

export default Nav