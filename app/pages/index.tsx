import CtaSection, { CtaPropsData } from '../components/CtaSection'
import HeroSection, {HeroPropsData} from '../components/HeroSection'
import Footer from '../components/Footer/Footer'
import { Fragment } from 'react'
import CardPersonalizado from '../components/CardPersonalizado/CardPersonalizado'
import ExtrasSection, { ExtrasPropsData } from '../components/ExtrasSection'
import StepsSection, { StepsPropsData } from '../components/StepsSection'
import SectionSobre from '../components/SectionSobre/Sobre'
import { youtube_parser } from '../utils/youtube'

interface PageProps {
  pageData: {
    sectionHeroData: HeroPropsData 
    sectionCtaData: CtaPropsData
    sectionStepsData: StepsPropsData
    sectionExtrasData: ExtrasPropsData
  }
}

export default function index({pageData}: PageProps) {
  return (
    <div className=''>
      <HeroSection data={pageData.sectionHeroData} />
      <CtaSection  data={pageData.sectionCtaData}/>
      <StepsSection data={pageData.sectionStepsData}/>
      <CardPersonalizado></CardPersonalizado>
      <ExtrasSection data={pageData.sectionExtrasData} />
      <SectionSobre />
      <Fragment>
        <Footer></Footer>
      </Fragment>
    </div>
  )
}


async function getVideoData(url:string){
  const noembedRes = await fetch(`https://noembed.com/embed?url=${url}`)
  const videoData = await noembedRes.json()

  return {
    id: youtube_parser(url) || '',
    width: videoData.width,
    height: videoData.height,
  }

}

export async function getStaticProps():Promise<{ props:PageProps }> {
  const sectionHeroRes = await fetch('https://trayllo.com.br/wp-json/trayllo/public/section-hero')
  const sectionHeroData = await sectionHeroRes.json()

  const sectionCtaRes = await fetch('https://trayllo.com.br/wp-json/trayllo/public/section-cta')
  const sectionCtaData = await sectionCtaRes.json()

  const sectionStepsRes = await fetch('https://trayllo.com.br/wp-json/trayllo/public/section-passo-a-passo')
  const sectionStepsData = await sectionStepsRes.json() as StepsPropsData

  sectionStepsData.videoData = await getVideoData(sectionStepsData.video)

  const sectionExtrasRes = await fetch('https://trayllo.com.br/wp-json/trayllo/public/section-extras')
  const sectionExtrasData = await sectionExtrasRes.json()

  sectionExtrasData.videoData = await getVideoData(sectionExtrasData.video)

  return {
    props: {
      pageData: {
        sectionHeroData,
        sectionCtaData,
        sectionStepsData,
        sectionExtrasData,
      }
    },
  }
}
