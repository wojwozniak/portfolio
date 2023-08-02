import Start from './start/Start'
import './sections.css'
import About from './about/About'
import Projects from './projects/Projects'

const Sections = () => {
  return (
    <div className='sections'>
      <Start />
      <About />
      <Projects />
    </div>
  )
}

export default Sections