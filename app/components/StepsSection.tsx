import { CSSProperties, useEffect, useRef, useState } from "react";
import { useIntersection } from "../hooks/useIntersection";
import SafeArea from "./SafeArea";
import YoutubeEmbed from "./YoutubeEmbed";

export interface StepsPropsData {
  titulo: string,
  descricao: string,
  passos: 
    {
      marcador: {
        conteudo: 1,
        background_color_inativo: string,
        background_color_ativo: string
      },
      titulo: {
        texto_1: string,
        texto_2: string
      },
      descricao: string
    }[],
  video: string
  videoData: {
    id: string,
    width: number,
    height: number,
  }
}

interface Props {
  data: StepsPropsData
}

function TextSpan({children}:{children:string}){
  return (
    <span className={`font-rubik text-[16px] opacity-70 leading-7 text-gray-750`}>{children}</span>
  )
}

interface StepProps {
  step: number,
  mark?:{
    backgroundColor:string
  } 
  preTitle?:string,
  title: string,
  children: string,
  className?: string,
  style?: CSSProperties,
}

function Step({step,preTitle, title, children , className, style, mark}:StepProps){
  return (
    <div className={`flex justify-between ${className} transition-transform`} style={style}>
      <div className="rounded-full  h-10 w-10 flex items-center justify-center " style={{...mark}} >
        <span className="text-white text-[28px] font-orelega">{step}</span>
      </div>
      <div className="ml-4 flex-1">
        <div className="font-sans text-[21px]">
          <span className="font-extrabold pr-2">{preTitle}</span>
          <span>{title}</span>
        </div>
        <TextSpan>{children}</TextSpan>
      </div>
    </div>
  )
}

export default function StepsSection({data}: Props){
  const ref = useRef(null);

  const [enteredView, setEnteredView] = useState(false);

  const inViewport = useIntersection(ref, '-200px'); // Trigger if 200px is visible from the element

  useEffect(()=>{
    if (inViewport) {
      setEnteredView(true)
    }
  },[inViewport])

  return (
    <section ref={ref}>
      <SafeArea>
        <div className="mt-16 flex justify-between gap-24 overflow-hidden max-md:flex-col-reverse">
          <div>
            <div className="w-[692px] max-md:w-full rounded-md overflow-hidden">
              <YoutubeEmbed videoUrl={data.video} width={data.videoData.width} height={data.videoData.height} ></YoutubeEmbed>
            </div>
          </div>
          <div className="w-[409px] max-md:w-full flex flex-col gap-7">
            <div>
              <h2 id="integracao" className="text-primary text-xl max-md:text-lg font-extrabold font-sans uppercase leading-tight">{data.titulo}</h2>
              <TextSpan >{data.descricao}</TextSpan>
            </div>
            {data.passos.map((passo, index)=> (
              <Step 
                key={index}
                step={passo.marcador.conteudo} 
                mark={{backgroundColor: passo.marcador.background_color_ativo}}
                preTitle={passo.titulo.texto_1}
                title={passo.titulo.texto_2}
                className={enteredView ? `translate-x-0` : 'translate-x-[100vw]'}
                style={{transitionDelay: `${(index + 1) * 300 }ms`}}
              >
                  {passo.descricao}
              </Step>
            ))}
          </div>
        </div>
      </SafeArea>
    </section>)
}