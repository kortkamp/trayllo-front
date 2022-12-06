import Image from 'next/image'
import AppButton from '../components/AppButton'
import Header from '../components/Header'
import SafeArea from '../components/SafeArea'

export default function HeroSection(){

  return (
    <section className='hero h-[734px] max-md:h-[550px] bg-[url("/hero-background.png")] mix-blend-multiply max-md:mix-blend-normal relative'>
        <div className='bg-primary absolute inset-0 -z-20 mix-blend-multiply'>
        </div>
        <div className='absolute left-0 top-0 z-10'>
          <Image src="/corner-circle-top.svg" alt="circles" width={296/3} height={292/3} />
        </div>
        <div className='absolute -left-4 -bottom-40 z-10 rotate-6'>
          <Image src="/corner-circle-bottom.svg" alt="circles" width={383/2} height={383/2} />
        </div>

        <SafeArea  className='relative'>
            <Header />
            <div className='pt-32 max-md:pt-20 w-[495px] font-sans max-md:w-auto max-md:flex flex-col items-center'>
              <div className='animate-[slideIn1_0.5s_ease-in-out_1]'>
                <h1 className='text-white text-2xl leading-tight'>Integração Trello e Tray Commerce</h1>
                <p className={`font-rubik text-white text-[21px] pt-2 leading-6`}>Nada de perder o controle do seu e-commerce com processos complicados e sistemas confusos que só burocratizam a sua rotina.</p>
              </div>
              <AppButton variant='secondary' className='mt-4 animate-[slideIn2_1.5s_ease-in-out_1]'>Teste Agora</AppButton>
            </div>
            <div className='absolute -right-32 top-10 -z-10 overflow-hidden max-md:inset-0'>
              <Image src="/computador.png" alt="Computador" width={969} height={772} className='animate-[slideIn3_2.5s_ease-in-out_1] max-md:opacity-30' />
            </div>
        </SafeArea>
      </section>
  )
}