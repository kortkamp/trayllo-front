import { Fragment } from "react"
import { Open_Sans } from "@next/font/google"

const openSans = Open_Sans({

})
import Image from "next/image"

export default function CardPersonalizado() {
  return (
    <Fragment>
        <section className="bg-section flex flex-col justify-center p-10 transition-transform">
            <div className="container mx-auto w-9/12 flex flex-row justify-center border-2 h-96">
                <div className="flex flex-col w-100 md:w-1/2 justify-center">
                    <p className="text-[3em] text-[#490177] font-extrabold mb-5 leading-snug">Personalize seus cards no Trello</p>
                    <p class="text-slate-600 mb-5">
                        Todos nossos recursos cumprem o mesmo objetivo: facilitar seu dia a dia e potencializar suas vendas. Por isso nós personalizamos o fluxo do trello de acordo com a rotina de sua equipe de vendas.
                    </p>
                    <button className="align-center p-5 text-center bg-[#490177] rounded hover:bg-[#320152] w-52 font-bold text-xl">Comece Agora</button>
                </div>
                <div className="md:flex flex-col items-center w-1/2 hidden">
                    <div className="relative">
                        <div className="absolute">
                            <div className="border-2 h-100">teste</div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute">
                            <div className="border-2 h-100 translate-y-2">teste2</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>
  )
}
