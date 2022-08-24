import Head from 'next/head'

import NavBar from '../components/NavBar'
import Intro from '../components/Intro'
import Testmonials from '../components/TestmonialCarousel/Testmonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col text-Dark-Blue">
      <Head>
        <title>Manage</title>
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view."
        />
        <meta name="keywords" content="manage software teams" />
        <link rel="shortcut icon" href="/images/logo.svg" type="image/x-icon" />
      </Head>

      <NavBar />
      <Intro />
      <Testmonials />
      <Footer />
    </div>
  )
}

export default Home
