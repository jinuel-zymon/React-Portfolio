import Header from '@/components/parts/Header'
import React from 'react'
import HomeBanner from './HomeBanner'
import HomeAbout from './HomeAbout'
import HomeWork from './HomeWork'
import HomeContact from './HomeContact'

const Home = () => {
  return (
    <div>
      <Header/>
      <HomeBanner/>
      <HomeAbout/>
      <HomeWork/>
      <HomeContact/>
    </div>
  )
}

export default Home