import { useEffect, useRef, useState } from "react";
import { useIntersection } from "../hooks/useIntersection";
import SafeArea from "./SafeArea";
import YoutubeEmbed from "./YoutubeEmbed";

const YT_VIDEO_ID = 'xky48zyL9iA'


function TextSpan({children}:{children:string}){
  return (
    <span className={`font-rubik text-[16px] opacity-70 leading-7 text-gray-750`}>{children}</span>
  )
}

interface StepProps {
  step: number,
  title: string,
  children: string,
  className?: string,
}

function Step({step, title, children , className}:StepProps){
  return (
    <div className={`flex justify-between ${className} transition-transform`}>
      <div className="rounded-full bg-primary h-10 w-10 flex items-center justify-center ">
        <span className="text-white text-[28px] font-orelega">{step}</span>
      </div>
      <div className="ml-4 flex-1">
        <div className="font-sans text-[21px]">
          <span className="font-extrabold pr-2">Passo {step}</span>
          <span>{title}</span>
        </div>
        <TextSpan>{children}</TextSpan>
      </div>
    </div>
  )
}


export default function StepsSection(){

  const ref = useRef(null);

  const [enteredView, setEnteredView] = useState(false);

  const inViewport = useIntersection(ref, '-400px'); // Trigger if 200px is visible from the element

  useEffect(()=>{
    if (inViewport) {
      setEnteredView(true)
    }
  },[inViewport])

  return (
    <section ref={ref}>
      <SafeArea>
        <div className="mt-16 flex justify-between gap-24 overflow-hidden">
          <div className="w-[692px] h-[600px] rounded-md overflow-hidden">
            <YoutubeEmbed embedId={YT_VIDEO_ID} height='100%' width="100%"></YoutubeEmbed>
          </div>
          <div className="w-[409px] flex flex-col gap-7">
            <div>
              <h2 className="text-primary text-xl font-extrabold font-sans uppercase leading-tight">Veja como é fácil integrar</h2>
              <TextSpan >É muito simples! Siga estes passos e em breve estará a usufruir de todas as vantagens.</TextSpan>
            </div>
            <Step step={1} title="Conectar sua loja" className={enteredView ? `translate-x-0 ` : 'translate-x-[100vw]'}>Digite a URL da sua Loja Tray Commerce e clique no botão para conectar</Step>
            <Step step={2} title="Conectar o trello" className={enteredView ? `translate-x-0  delay-300` : 'translate-x-[100vw]'}>Autorize o acesso ao seu Trello e em seguida selecione o Board e a Lista onde seus cartões serão adicionados.</Step>
            <Step step={3} title="Pronto" className={enteredView ? `translate-x-0  delay-[600ms]` : 'translate-x-[100vw]'}>Você já está pronto para começar e organizar suas vendas de forma prática e rápida</Step>
          </div>
        </div>
      </SafeArea>
    </section>)
}