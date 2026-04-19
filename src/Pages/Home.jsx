import React from 'react'
import Header from '../Component/HeaderPart/Header'

import HeroSection from '../Component/HeroSection/HeroSection'
import OfferBanner from '../OfferBanner/OfferBanner'
import Features from '../Features/Features'
import SignupForm from '../Signupform/SignupForm'
import Footer from '../Footer/Footer'








function Home() {
  return (
    <div>
<Header />
<HeroSection/>
<OfferBanner />
<Features />
<SignupForm />
<Footer />



    </div>
  )
}

export default Home