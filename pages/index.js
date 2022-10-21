import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Wojciech Woźniak's Webdev Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <nav className="">

        </nav>
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
