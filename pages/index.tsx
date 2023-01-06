import Head from 'next/head'
import Nav from '../components/Nav'
import Background from '../components/Background'
import TitleSection from '../components/TitleSection'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div className="font-sans" >
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Wojciech Woźniak's Webdev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Sidebar />
        <Background />
        <TitleSection />
        <Nav />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
