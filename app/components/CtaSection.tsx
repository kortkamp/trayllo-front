import AppLink from "./AppLink";
import SafeArea from "./SafeArea";


export interface CtaPropsData {
  conteudo: [
    {
      texto: string,
      cor: string
    },
    {
      texto: string,
      cor: string,
    }
  ],
  cta: {
    background_color: string,
    texto: string,
    color:string,
    link: string,
    target: string,
  }
}

interface Props {
  data: CtaPropsData
}

export default function CtaSection({ data }:Props){
  return (
    <section>
      <SafeArea>
        <div className="bg-black rounded-md flex justify-between items-center h-36 mt-20 relative ">
          <div className="flex items-center max-md:hidden">
            <div className="w-[447px] max-md:w-[100px] bg-white h-1"></div>
            <div className="bg-white h-5 w-5 rounded-full"></div>
          </div>
            <div className="flex flex-col max-md:pl-4 opacity-70">
              {data.conteudo.map(conteudo => (
                  <span className="text-primary-light text-md font-bold" style={{color:conteudo.cor}}>
                    {conteudo.texto}
                  </span>
              ))}
            </div>
          <div className="mr-14 max-md:mr-4 animate-[zoomIn_2s_ease-in-out_1] z-10">
              <AppLink 
                href={data.cta.link} 
                variant={data.cta.target as any} 
                size={'sm'} 
                className='w-40' 
                // style={{color: data.cta.color, backgroundColor:data.cta.background_color}}
              >
                {data.cta.texto}
              </AppLink>  
          </div>
          <div className="relative h-full">
            <div className="strip1 h-full w-10 bg-blue-500 absolute right-14"></div>
            <div className="strip2 h-full w-4 bg-blue-500 absolute right-8"></div>
          </div>
        </div>
      </SafeArea>
    </section>
  )
}