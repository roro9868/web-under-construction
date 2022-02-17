import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Epist</title>
        <link rel="icon" href="/favicon2.png" />
      </Head>

      <main>
        <Header title="Coming Soon!" />
        <p className="description">
          Proliferate Knowledge to Change the World
        </p>
      </main>

      <Footer />
    </div>
  )
}
