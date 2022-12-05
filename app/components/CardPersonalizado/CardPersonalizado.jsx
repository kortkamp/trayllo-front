import { Fragment } from "react"
import { Open_Sans } from "@next/font/google"

import Image8 from '../../public/images/image8.png'
import Image9 from '../../public/images/image9.png'

const openSans = Open_Sans({

})
import Image from "next/image"

export default function CardPersonalizado() {
  return (
    <Fragment>
        <section className="bg-section flex flex-col justify-center p-5 h-content h-screen">
            <div className="container mx-auto w-10/12 flex flex-row justify-center">
                <div className="flex flex-col w-100 md:w-1/2 justify-center">
                    <p className="text-[3em] text-[#490177] font-extrabold mb-5 leading-snug">Personalize seus cards no Trello</p>
                    <p class="text-slate-600 mb-5">
                        Todos nossos recursos cumprem o mesmo objetivo: facilitar seu dia a dia e potencializar suas vendas. Por isso nós personalizamos o fluxo do trello de acordo com a rotina de sua equipe de vendas.
                    </p>
                    <button className="align-center p-5 text-center bg-[#490177] rounded hover:bg-[#320152] w-52 font-bold text-xl">Comece Agora</button>
                </div>
                <div className="md:flex flex-col items-center w-1/2 hidden">
                    <div className="parent translate-y-10 md:-translate-y-10 lg:-translate-y-20">
                        <Image src={Image8} className="overlay translate-x-1/3 img-responsive"/>
                        <Image src={Image9} className="overlay translate-y-40 img-responsive"/>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}
