import { useDispatch } from 'react-redux';
import { addtopRatedMovies} from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
const useTopRatedMovies = () =>{
    
    const dispatch = useDispatch();
    const gettopRatedMovies =  async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);
        const json = await data.json(); 
        dispatch(addtopRatedMovies(json.results));

    };
    useEffect(()=>{
       gettopRatedMovies();
    }, [])
}
export default useTopRatedMovies;