
import { useSelector } from 'react-redux'
import { RootState } from '../utils/appstore'
import MovieList from "./MovieList";

const GPTMovieSuggestion = () => {
    const{movieResults, movieNames} = useSelector((store: RootState) => store.gpt);
     if (!movieNames || !movieResults) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
        <div>
           {movieNames.map((movieName:string, index:number) => <MovieList key={movieName} title = {movieName} movies= {movieResults[index]}/>)}
        </div>
         
    </div>
  )
}

export default GPTMovieSuggestion
