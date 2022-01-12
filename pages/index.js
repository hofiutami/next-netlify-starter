import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hofifa Mulya Utami</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my website" />
        <p className="description">
          Get started by to know me <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
