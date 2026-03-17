import MovieCard from "./MovieCard"
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

interface MovieListProps {
  title: string;
  movies: Movie[];
}

const MovieList = ({title, movies}: MovieListProps) => {
  return (
    <div className=" px-4 md:px-6">
        <h1 className=" text-lg md:text-2xl py-3 md:py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide scroll-smooth">
         <div className="flex gap-2 md:gap-4">
        {movies?.map((movie)=> (
             <MovieCard key={movie.id} posterPath={movie?.poster_path}/>
        ))}
      </div>
      
       
      </div>
    </div>
  )
}

export default MovieList;
