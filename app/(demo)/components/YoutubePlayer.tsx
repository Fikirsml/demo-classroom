import YouTube, {YouTubeProps} from 'react-youtube'


interface YouTubePlayerProps{
    videoId:string
}

function YoutubePlayer({videoId}:YouTubePlayerProps) {
const opt:YouTubeProps['opts']={
    width:"100%",
    height:"100%",
    playervars:{
    autoplay:0
    },
}


  return (
    <div className="w-full aspect-video">
        <YouTube
        videoId={videoId}
        opts={opt}
        className="w-full h-full"
        iframeClassName="w-full h-full rounded-lg"

        />
      
    </div>
  )
}

export default YoutubePlayer
