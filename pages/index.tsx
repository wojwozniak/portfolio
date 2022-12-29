import Head from 'next/head'
import Nav from '../components/Nav'
import Background from '../components/Background'
import TitleSection from '../components/TitleSection'
import AboutSection from '../components/AboutSection'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="font-sans" >
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Wojciech Woźniak's Webdev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Background />
        <div id='sections' className='overflow-y-scroll overflow-x-hidden h-[fit-content] w-full'>
          <TitleSection />
          <AboutSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
