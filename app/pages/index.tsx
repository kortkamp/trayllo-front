import CtaSection from '../components/CtaSection'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'
import ExtrasSection from '../components/ExtrasSection'
import StepsSection from '../components/StepsSection'

export default function index() {
  return (
    <div className=''>
      <HeroSection />
      <CtaSection />
      <StepsSection />
      <ExtrasSection />
      <Fragment>
        <Footer></Footer>
      </Fragment>
    </div>
  )
}
