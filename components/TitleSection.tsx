import React from 'react'

const TitleSection = () => {
  return (
    <section id="start" className="h-[100vh] snap-start bg-red-900">
      <div className="relative top-40 left-20 flex flex-col gap-3">
        <h1 className="text-5xl">
        Wojciech Woźniak
        </h1>
        <span className="text-3xl material-symbols-outlined h-2">
          maximize
        </span>
        <h2 className='text-xl'>web developer & software engineer</h2>
      </div>
    </section>
  )
}

export default TitleSection