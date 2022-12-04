import Head from 'next/head'
import Image from 'next/image'
import CvaSection from '../components/CvaSection'
import HeroSection from '../components/HeroSection'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'

export default function index() {
  return (
    <div className=''>
      <HeroSection />
      <CvaSection />
      <Fragment>
        <Footer></Footer>
      </Fragment>
    </div>
  )
}
