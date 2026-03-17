import { useDispatch, useSelector } from 'react-redux';
import { addtopRatedMovies} from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { RootState } from '../utils/appstore';
const useTopRatedMovies = () =>{
    const topRatedMovies = useSelector((store:RootState) => store.movies.topRatedMovies);
    
    const dispatch = useDispatch();
    const gettopRatedMovies =  async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", API_OPTIONS);
        const json = await data.json(); 
        dispatch(addtopRatedMovies(json.results));

    };
    useEffect(()=>{
        if(!topRatedMovies) return;
     gettopRatedMovies();
    }, [])
}
export default useTopRatedMovies;