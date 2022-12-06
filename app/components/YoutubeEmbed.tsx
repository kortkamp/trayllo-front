import PropTypes from "prop-types";

interface Props {
  embedId: string
  height: number
  width: number
}

const myUrl = process.env.VERCEL_URL

const YoutubeEmbed = ({ embedId , height, width }: Props) => {

  const aspectRatio = (100*height/width).toFixed(1) + '%'
  
  return (
    <div className={`w-full relative`} style={{paddingBottom:aspectRatio}}>
      <iframe
        width='100%'
        height='100%'
        src={`https://www.youtube.com/embed/${embedId}?origin=${myUrl}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
        className="w-full h-full absolute "
      />
    </div>
  )
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;