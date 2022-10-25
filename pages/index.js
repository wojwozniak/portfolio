import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Nav from '../components/Nav.jsx'
import Background from '../components/Background'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Wojciech Woźniak's Webdev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Nav />
        <Background />
        <section id="front">
          <h1 className="text-2xl">
            Wojciech Woźniak
          </h1>
        </section>
      </main>

      <footer className="">

      </footer>
    </div>
  )
}
