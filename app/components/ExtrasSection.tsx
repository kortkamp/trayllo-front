import SafeArea from "./SafeArea";
import YoutubeEmbed from "./YoutubeEmbed";

const YT_VIDEO_ID = 'xky48zyL9iA'
//https://www.youtube.com/watch?v=xky48zyL9iA

export default function ExtrasSection(){
  return(
    <section>
      <SafeArea>
        <div className="">
          <header className="w-[558px] m-auto"><h2 className="text-primary text-xl font-extrabold text-center py-10 font-sans">O que posso fazer com essa integração?</h2></header>
          <div className="rounded-md overflow-hidden">
            <YoutubeEmbed  embedId={YT_VIDEO_ID} width='100%' height="900px"/>
          </div>
        </div>
      </SafeArea>
    </section>
  )
}
