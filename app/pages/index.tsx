import Head from 'next/head'
import Image from 'next/image'
import CtaSection from '../components/CtaSection'
import HeroSection from '../components/HeroSection'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'

export default function index() {
  return (
    <div className=''>
      <HeroSection />
      <CtaSection />
      <Fragment>
        <Footer></Footer>
      </Fragment>
    </div>
  )
}
