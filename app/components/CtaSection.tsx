import AppButton from "./AppButton";
import SafeArea from "./SafeArea";

export default function CtaSection(){
  return (
    <section>
      <SafeArea>
        <div className="bg-black rounded-md flex justify-between items-center h-36 mt-20 relative ">
          <div className="flex items-center max-md:hidden">
            <div className="w-[447px] max-md:w-[100px] bg-white h-1"></div>
            <div className="bg-white h-5 w-5 rounded-full"></div>
          </div>
          <div className="flex flex-col max-md:pl-4 opacity-70">
            <span className="text-primary-light text-md font-bold">
              Aproveite agora uma oferta exclusiva
            </span>
            <span className="text-white text-md font-bold">
              15% off lorem ipsum
            </span>
          </div>
          <div className="mr-14 max-md:mr-4 animate-[zoomIn_2s_ease-in-out_1] z-10"><AppButton variant="secondary" >Eu Quero</AppButton></div>
          <div className="relative h-full">
            <div className="strip1 h-full w-10 bg-blue-500 absolute right-14"></div>
            <div className="strip2 h-full w-4 bg-blue-500 absolute right-8"></div>
          </div>
        </div>
      </SafeArea>
    </section>
  )
}