
import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import { RootState } from "../utils/appstore"
const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies)
  return (
    movies.nowPlayingMovies && (
    <div className="bg-black">
      <div className="-mt-52 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies= {movies.nowPlayingMovies}/>
      <MovieList title={"Popular"} movies= {movies.PopularMovies}/>
      <MovieList title={"Top Rated"} movies= {movies.topRatedMovies}/>
      <MovieList title={"Upcomming"} movies= {movies.upCommingMovies}/>
      </div>
    </div>
    )
  );
};

export default SecondaryContainer
