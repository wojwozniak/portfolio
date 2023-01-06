import React from 'react'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'
import { RxDividerVertical } from 'react-icons/rx'
import { AiOutlineFilePdf } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className="fixed h-[100vh] w-[50px] z-10 flex flex-col justify-end items-center">
        <div className='mb-[20px] flex flex-col gap-5'>
            <a href=""><BsLinkedin size={24} /></a>
            <a href=""><BsTwitter size={24} /></a>
            <a href=""><BsGithub size={24} /></a>
            <a href=""><AiOutlineFilePdf size={24} /></a>
        </div>
        <RxDividerVertical size={48} />
    </div>
  )
}

export default Sidebar