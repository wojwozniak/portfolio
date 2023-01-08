import React from 'react'
import Lottie from "lottie-react"
import Idea from '../public/idea.json'

const AboutSection = () => {

  const style = {
    height: 300
  };

  return (
    <section id="about" className="h-[200vh] snap-start">
      <div className="relative top-40 left-20 flex flex-col gap-3 w-[80vw]">
        <h1 className="text-3xl">
        Hi, I'm Wojciech!
        </h1>
        <p className='text-xl w-[60%]'>I am fullstack developer from Poland. I am studying Computer Science on University of Wroclaw. I love creating things from the scratch. I also play chess quite a lot.</p>
      </div>
      <Lottie style={style} animationData={Idea} loop={true} />
    </section>
  )
}

export default AboutSection