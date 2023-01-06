import Head from 'next/head'
import Nav from '../components/Nav'
import Background from '../components/Background'
import TitleSection from '../components/TitleSection'
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
        <Background />
        <TitleSection />
        <Nav />
      </main>
      <Footer />
    </div>
  )
}
