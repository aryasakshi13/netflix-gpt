
import { useSelector } from "react-redux"
import MovieList from "./MovieList"
import { RootState } from "../utils/appstore"
const SecondaryContainer = () => {
  const movies = useSelector((store: RootState) => store.movies)
  return (
    // movies.nowPlayingMovies && (
    // <div className="bg-black">
    //   {/* <div className=" -mt-20 md:-mt-52 pl-2 md:pl-12 relative z-20"> */}
    //   <div className=" pt-32 mt-0 pb-8 md:-mt-52 pl-4 md:pl-12 relative z-10">
    //   <MovieList title={"Now Playing"} movies= {movies.nowPlayingMovies}/>
    //   <MovieList title={"Popular"} movies= {movies.PopularMovies}/>
    //   <MovieList title={"Top Rated"} movies= {movies.topRatedMovies}/>
    //   <MovieList title={"Upcomming"} movies= {movies.upCommingMovies}/>
    //   </div>
    // </div>
    // )
     <div className="bg-black">
      <div className="pt-32 mt-0 pb-8 md:-mt-52 pl-4 md:pl-12 relative z-10">

        {movies.nowPlayingMovies && (
          <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        )}

        {movies.PopularMovies && (
          <MovieList title="Popular" movies={movies.PopularMovies} />
        )}

        {movies.topRatedMovies && (
          <MovieList title="Top Rated" movies={movies.topRatedMovies} />
        )}

        {movies.upCommingMovies && (
          <MovieList title="Upcoming" movies={movies.upCommingMovies} />
        )}

      </div>
    </div>
  );
};

export default SecondaryContainer
