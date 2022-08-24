import Head from 'next/head'

import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import Testmonials from '../components/TestmonialCarousel/Testmonials'
import Footer from '../components/Footer'

const Home = () => {
  ;<Head>
    <title>Manage</title>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."
    />
    <meta name="keywords" content="manage software teams" />
  </Head>
  return (
    <div className="flex min-h-screen flex-col text-Dark-Blue">
      <NavBar />
      <Intro />
      <Testmonials />
      <Footer />
    </div>
  )
}

export default Home
