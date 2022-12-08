import SafeArea from "./SafeArea";
import YoutubeEmbed from "./YoutubeEmbed";

export interface ExtrasPropsData {
  titulo: string,
  video: string,
  videoData: {
    id: string,
    width: number,
    height: number,
  }
}

interface Props {
  data: ExtrasPropsData
}

export default function ExtrasSection({data}:Props){

  return(
    <section>
      <SafeArea>
        <div className="">
          <header className="w-[558px] max-md:w-full m-auto">
            <h2 id='extras' className="text-primary text-xl max-md:text-lg font-extrabold text-center py-10 font-sans">
              {data.titulo}
            </h2>
          </header>
          <div className="rounded-md overflow-hidden">
            <YoutubeEmbed videoUrl={data.video} width={data.videoData.width} height={data.videoData.height}/>
          </div>
        </div>
      </SafeArea>
    </section>
  )
}