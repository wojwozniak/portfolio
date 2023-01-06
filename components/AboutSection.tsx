import React from 'react'

const AboutSection = () => {
  return (
    <section id="about" className="h-[200vh] snap-start">
      <div className="relative top-40 left-20 flex flex-col gap-3 w-[80vw]">
        <h1 className="text-3xl">
        Hi, I'm Wojciech!
        </h1>
        <p className='text-xl w-[60%]'>I am fullstack developer from Poland. I am studying Computer Science on University of Wroclaw. I love creating things from the scratch. I also play chess quite a lot.</p>
      </div>
    </section>
  )
}

export default AboutSection