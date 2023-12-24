const Start = () => {
  return <section id="home"
    className='h-screen w-screen bg-background-light flex justify-center relative'>
    <div className='z-5 mt-[100px] font-medium w-full pl-14 pr-14'>
      <h2 className="mt-14 text-xl font-medium">
        Hello!
      </h2>
      <h1 className='color-white font-bold text-2xl'>My name is <br />
        <span className="text-bright-blue text-4xl">Wojciech Woźniak</span>
      </h1>
      <p className="mt-5 w-3/5">I am fullstack developer Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse metus nibh, sollicitudin vel porttitor vitae, mollis eget felis. Nunc pharetra pretium justo in suscipit. Mauris tempor purus interdum, vestibulum tortor ac, efficitur ipsum. </p>
      <button onClick={() => window.location.href = '#bg-photo'}
        className="mt-10 bg-transparent border-bright-blue border-2 text-white font-semibold py-2 px-6 rounded-sm">
        Tell me more
      </button>
    </div>
  </section>
}

export default Start