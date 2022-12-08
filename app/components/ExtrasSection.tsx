import SafeArea from "./SafeArea";
import YoutubeEmbed from "./YoutubeEmbed";

const VIDEO_WIDTH = 895
const VIDEO_HEIGHT = 559
const videoUrl= 'https://www.youtube.com/watch?v=xky48zyL9iA'

export default function ExtrasSection(){

  return(
    <section>
      <SafeArea>
        <div className="">
          <header className="w-[558px] max-md:w-full m-auto"><h2 id='extras' className="text-primary text-xl max-md:text-lg font-extrabold text-center py-10 font-sans">O que posso fazer com essa integração?</h2></header>
          <div className="rounded-md overflow-hidden">
            <YoutubeEmbed videoUrl={videoUrl} width={VIDEO_WIDTH} height={VIDEO_HEIGHT}/>
          </div>
        </div>
      </SafeArea>
    </section>
  )
}