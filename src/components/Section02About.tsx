const About = () => {
  return (
    <section id="about" className='w-screen bg-transparent z-2 relative pt-18'>
      <div className='bg-background-light pt-10 w-full h-auto flex flex-col pl-14 pr-14 pb-20'>
        <h2 className="text-4xl">
          About me
        </h2>
        <p className="font-light z-5 mt-5">
          Hello! I am Wojciech Woźniak. I am a software engineer specializing in web development.
        </p>
        <p className="font-light z-5 mt-5">
          My professional journey started few years back, when I first stumbled upon basic HTML&CSS course. Soon after I started building my first websites.
        </p>
        <p className="font-light z-5 mt-5">
          Since then I started studying Computer Science and have worked on many projects, both commercial and not.
        </p>
        <p className="font-light z-5 mt-5">
          In free time I enjoy playing chess and hiking.
        </p>
      </div>
    </section>
  )
}

export default About