import Start from './start/Start'
import './sections.css'
import About from './about/About'
import Projects from './projects/Projects'
import Contact from './contact/Contact'

const Sections = () => {
  return (
    <div className='sections'>
      <Start />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Sections