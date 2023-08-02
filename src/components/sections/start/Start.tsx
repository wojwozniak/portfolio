import Avatar from './Avatar'
import './start.css'

const Start = () => {
  return (
    <section className='start'>
      <div className='content'>
        <h1 className='white'>Hey There, I'm
          <br /><span className="lightblue"> Wojciech Woźniak </span>
        </h1>
        <p>Unlocking the potential of code through innovation and creativity.</p>
      </div>
      <Avatar />
      <div className='highlight-blue' />
      <div className='highlight-green' />
    </section>
  )
}

export default Start