import PropTypes from "prop-types";

interface Props {
  embedId: string
  height: string
  width: string
}

const myUrl = process.env.VERCEL_URL

const YoutubeEmbed = ({ embedId , height, width}: Props) => {
  return (
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${embedId}?origin=${myUrl}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
  )
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;