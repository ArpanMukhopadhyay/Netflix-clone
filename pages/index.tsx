import Image from 'next/image'
import { Inter } from 'next/font/google'
import {NextPage} from 'next'
import Head from 'next/head'
import Header from '../components/Header'

// const inter = Inter({ subsets: ['latin'] })

const Home : NextPage = () =>{
  return(
    <div className='flex min-h-screen flex-col py-2'>
      <Head>
        <title>Home - Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        {/* Banner */}
        <section>
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
          {/* Row */}
        </section>
      </main>
    </div>
  )
}

export default Home