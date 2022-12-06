import { Fragment } from "react";
import { Open_Sans } from "@next/font/google";

import Image8 from "../../public/images/image8.png";
import Image9 from "../../public/images/image9.png";

const openSans = Open_Sans({});
import Image from "next/image";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function CardPersonalizado() {
  return (
    <Fragment>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1}>
        <section className="bg-section flex flex-col justify-center h-content h-screen">
          <div className="container mx-auto w-10/12 flex flex-row justify-center">
            <div className="flex flex-col w-100 md:w-1/2 justify-center">
              <p className="text-[3em] text-[#490177] font-extrabold mb-5 leading-snug">
                Personalize seus cards no Trello
              </p>
              <p class="text-slate-600 mb-5 md:w-5/6">
                Todos nossos recursos cumprem o mesmo objetivo: facilitar seu
                dia a dia e potencializar suas vendas. Por isso nós
                personalizamos o fluxo do trello de acordo com a rotina de sua
                equipe de vendas.
              </p>
              <button className="text-white align-center p-5 text-center bg-[#490177] rounded hover:bg-[#320152] w-52 font-bold text-lg">
                Comece Agora
              </button>
            </div>
            <div className="md:flex flex-col items-center w-1/2 hidden">
              <div className="parent translate-y-10 md:-translate-y-20  lg:-translate-y-20">
                <MouseParallaxChild factorX={0.3} factorY={0.5}  className="z-0 w-5/6 lg:w-auto">
                  <Image
                    src={Image8}
                    className="overlay translate-y-52 translate-x-32 img-responsive"
                  />
                </MouseParallaxChild>
                <MouseParallaxChild factorX={0.7} factorY={0.8} className="z-10 w-5/6 lg:w-auto lg:-translate-y-10">
                  <Image
                    src={Image9}
                    className="overlay img-responsive"
                  />
                </MouseParallaxChild>
              </div>
            </div>
          </div>
        </section>
      </MouseParallaxContainer>
    </Fragment>
  );
}
