import AppButton from "./AppButton";
import SafeArea from "./SafeArea";

export default function CtaSection(){
  return (
    <section>
      <SafeArea>
        <div className="bg-black rounded-md flex justify-evenly items-center h-36 mt-20 relative">
          <div className="flex items-center absolute left-0">
            <div className="w-[447px] bg-white h-1"></div>
            <div className="bg-white h-5 w-5 rounded-full"></div>
          </div>
          <div className="flex flex-col ml-96 pl-10">
            <span className="text-primary-light text-md">
              Aproveite agora uma oferta exclusiva
            </span>
            <span className="text-white text-md">
              15% off lorem ipsum
            </span>
          </div>
          <div className="mr-10"><AppButton variant="secondary" >Eu Quero</AppButton></div>
          <div className="strip1 h-full w-10 bg-blue-500 absolute right-14"></div>
          <div className="strip2 h-full w-4 bg-blue-500 absolute right-8"></div>
        </div>
      </SafeArea>
    </section>
  )
}