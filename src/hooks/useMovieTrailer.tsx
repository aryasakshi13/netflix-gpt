import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";
import { Video } from "../utils/type";
import { RootState } from "../utils/appstore";



export interface VideoResponse {
  id: number;
  results: Video[];
}

const useMovieTrailer = (movieId: number) => {
  const trailerVideo = useSelector((store:RootState) => store.movies.trailerVideo);

  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/"
      + movieId + "/videos", API_OPTIONS);
    const json: VideoResponse = await data.json();
    console.log("move",json.results);
    const filterData = json?.results?.filter((video) => video.type === "Trailer");
    const trailer = filterData?.length
      ? filterData[0]
      : json?.results?.[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    if(trailerVideo) return;
    getMovieVideos();
  }, [])
}
export default useMovieTrailer;