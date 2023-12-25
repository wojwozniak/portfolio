const Start = () => {
  return <section id="home"
    className='h-screen w-screen bg-background-light flex justify-center relative'>
    <div className='z-5 mt-[100px] font-medium w-full pl-14 pr-14'>
      <h1 className='mt-14 color-white font-bold text-xl'>Hello, I am <br />
        <span className="text-bright-blue text-5xl">Wojciech Woźniak</span>
      </h1>
      <p className="mt-5 w-3/5">
        I am software engineer building innovative and efficient solutions for the web. Currently studying Computer Science at the University of Wrocław and working on hybrid ERP systems for <a href="https://herp.pl/" target="_blank" className="text-bright-blue">HERP</a>.
      </p>
      <button onClick={() => window.location.href = '#bg-photo'}
        className="mt-10 bg-transparent border-bright-blue border-2 text-white font-semibold py-2 px-6 rounded-sm">
        Tell me more
      </button>
    </div>
  </section>
}

export default Start