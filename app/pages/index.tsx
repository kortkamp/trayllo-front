import CtaSection from '../components/CtaSection'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'
import CardPersonalizado from '../components/CardPersonalizado/CardPersonalizado'
import ExtrasSection from '../components/ExtrasSection'
import StepsSection from '../components/StepsSection'
import SectionSobre from '../components/SectionSobre/Sobre'

export default function index() {
  return (
    <div className=''>
      <HeroSection />
      <CtaSection />
      <StepsSection />
      <CardPersonalizado></CardPersonalizado>
      <ExtrasSection />
      <SectionSobre />
      <Fragment>
        <Footer></Footer>
      </Fragment>
    </div>
  )
}
