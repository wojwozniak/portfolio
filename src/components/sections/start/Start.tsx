import Avatar from './Avatar'
import './start.css'
import TechSphere from './TechSphere'

const Start = () => {
  return (
    <section className='start'>
      <div className='content'>
        <h1 className='white'>Hey There, I'm
          <br /><span className="lightblue"> Wojciech Woźniak</span>
        </h1>
      </div>
      <TechSphere />
      <Avatar />
      <div className='highlight-blue' />
      <div className='highlight-green' />
    </section>
  )
}

export default Start