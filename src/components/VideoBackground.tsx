
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../utils/appstore";
import useMovieTrailer from "../hooks/useMovieTrailer";


export interface movId {
  movieId : number;
}

const VideoBackground = ({movieId}:movId) => {
  const trailerVideo = useSelector((store : RootState) => store.movies?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className="w-screen">
      <iframe className="w-screen aspect-video"
      src={"https://www.youtube.com/embed/"+ trailerVideo?.key + "?autoplay=1&mute=1"}
      title="YouTube video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin" 
        ></iframe>
    </div>
  )
}

export default VideoBackground
