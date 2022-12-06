import CtaSection from '../components/CtaSection'
import HeroSection, {HeroPropsData} from '../components/HeroSection'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'
import ExtrasSection from '../components/ExtrasSection'
import StepsSection from '../components/StepsSection'

interface PageProps {
  pageData: {
    sectionHeroData: HeroPropsData 
  }
}

export default function index({pageData}: PageProps) {
  return (
    <div className=''>
      <HeroSection data={pageData.sectionHeroData} />
      <CtaSection />
      <StepsSection />
      <ExtrasSection />
      <Fragment>
        <Footer></Footer>
      </Fragment>
    </div>
  )
}


export async function getStaticProps():Promise<{ props:PageProps }> {
  const res = await fetch('https://trayllo.com.br/wp-json/trayllo/public/section-hero')
  const sectionHeroData = await res.json()
  return {
    props: {
      pageData: {
        sectionHeroData
      }
    },
  }
}