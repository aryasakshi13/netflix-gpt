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
    console.log("movie list render")
    console.log("movie List in Secondary",movies);
  return (
    <div className="px-6">
        <h1 className="text-2xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
         <div className="flex">
        {movies?.map((movie)=> (
             <MovieCard key={movie.id} posterPath={movie?.poster_path}/>
        ))}
      </div>
      
       
      </div>
    </div>
  )
}

export default MovieList
