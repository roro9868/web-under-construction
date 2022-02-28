import Head from 'next/head'
import Link from 'next/link'
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
        <h3 className="description"> 
          Proliferate Knowledge to Change the World
        </h3>
        <br/>
        <Link href="https://docsbeta.epist.xyz/">
          <a>Documentation <i>(under construction)</i></a>
        </Link>
      </main>

      <Footer />
    </div>
  )
}
