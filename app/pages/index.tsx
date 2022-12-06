import CtaSection from '../components/CtaSection'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'
import CardPersonalizado from '../components/CardPersonalizado/CardPersonalizado'
import ExtrasSection from '../components/ExtrasSection'
import StepsSection from '../components/StepsSection'

export default function index() {
  return (
    <Fragment>
      <CardPersonalizado></CardPersonalizado>
      <Footer></Footer>
    </Fragment>
  )
}
