import Avatar from './Avatar'
import './start.css'

const Start = () => {
  return (
    <section className='start'>
      <div className='content'>
        <h1 id='start__title' className='white'>Hey There, I'm
          <br /><span className="lightblue"> Wojciech Woźniak </span>
        </h1>
        <p id="start__subtitle">Unlocking the potential of code through innovation and creativity.</p>
      </div>
      <Avatar />
      <div id="highlight--1" className='highlight-blue-medium' />
      <div id="highlight--2" className='highlight-green-big' />
    </section>
  )
}

export default Start