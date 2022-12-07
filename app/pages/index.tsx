import CtaSection, { CtaPropsData } from '../components/CtaSection'
import HeroSection, {HeroPropsData} from '../components/HeroSection'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'
import CardPersonalizado from '../components/CardPersonalizado/CardPersonalizado'
import ExtrasSection from '../components/ExtrasSection'
import StepsSection from '../components/StepsSection'
import SectionSobre from '../components/SectionSobre/Sobre'

interface PageProps {
  pageData: {
    sectionHeroData: HeroPropsData 
    sectionCtaData: CtaPropsData
  }
}

export default function index({pageData}: PageProps) {
  return (
    <div className=''>
      <HeroSection data={pageData.sectionHeroData} />
      <CtaSection  data={pageData.sectionCtaData}/>
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


export async function getStaticProps():Promise<{ props:PageProps }> {
  const sectionHeroRes = await fetch('https://trayllo.com.br/wp-json/trayllo/public/section-hero')
  const sectionHeroData = await sectionHeroRes.json()

  const sectionCtaRes = await fetch('https://trayllo.com.br/wp-json/trayllo/public/section-cta')
  const sectionCtaData = await sectionCtaRes.json()
  
  return {
    props: {
      pageData: {
        sectionHeroData,
        sectionCtaData
      }
    },
  }
}