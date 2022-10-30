import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav.jsx'
import Background from '../components/Background'
import TitleSection from '../components/TitleSection'
import SectionIndicator from '../components/SectionIndicator'
import AboutSection from '../components/AboutSection'

export default function Home() {
  return (
    <div className="font-sans">
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Wojciech Woźniak's Webdev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav />
        <SectionIndicator />
        <div id='sections' className='snap-y snap-mandatory overflow-scroll h-[200vh]'>
          <Background />
          <TitleSection />
          <AboutSection />
        </div>
        
      </main>

      <footer className="">
        <p>Created by wojwozniak using Next.js</p>
      </footer>
    </div>
  )
}
