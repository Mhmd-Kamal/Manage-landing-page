import Head from 'next/head'
import Image from 'next/image'

import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import Testmonials from '../components/TestmonialCarousel/Testmonials'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col text-Dark-Blue">
      <NavBar />
      <Intro />
      <Testmonials/>
    </div>
  )
}

export default Home
