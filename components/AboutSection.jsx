import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="h-screen snap-start">
      <div className="relative top-40 left-20 flex flex-col gap-3 w-[80vw]">
        <h1 className="text-3xl">
        Hi, I'm Wojciech!
        </h1>
        <p className='text-xl w-[60%]'>I am full stack web developer and computer science student at University of Wroclaw. I love creating things from scratch - that’s why I started my software development journey. Apart of that, I am also a passionate chess & guitar player</p>
      </div>
    </section>
  )
}

export default AboutSection