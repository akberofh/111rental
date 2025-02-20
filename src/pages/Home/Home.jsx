import React from 'react'
import Header from '../../components/Header/Header'
import OneSection from '../../components/OneSection/OneSection'
import TwoSection from '../../components/TwoSection/TwoSection'
import ThreeSection from '../../components/ThreeSection/ThreeSection'
import FourSection from '../../components/FourSection/FourSection'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Header/>
        <OneSection/>
        <TwoSection/>
        <ThreeSection/>
        <FourSection/>
        <Footer/>
    </div>
  )
}

export default Home