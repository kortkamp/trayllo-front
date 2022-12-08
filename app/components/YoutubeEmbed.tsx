import dynamic from "next/dynamic";
import { OnProgressProps } from "react-player/base";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

interface Props {
  videoUrl: string
  height: number
  width: number
  onProgress?: (state:OnProgressProps)=> void
}

// const myUrl = process.env.VERCEL_URL

const YoutubeEmbed = ({ videoUrl , height, width , onProgress }: Props) => {

  console.log(height, width)

  const aspectRatio = (100*height/width).toFixed(2) + '%'
  
  return (
    <div className={`w-full relative`} style={{ width: 'auto', height:'auto'}}>
      <ReactPlayer 
        url={videoUrl} 
        onProgress={onProgress} 
        className={'react-player'} 
        width='100%' 
        height='100%' 
        style={{paddingTop: aspectRatio}}
      />
    </div>
  )
};

export default YoutubeEmbed;