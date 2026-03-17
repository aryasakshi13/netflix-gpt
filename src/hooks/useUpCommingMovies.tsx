import { useDispatch, useSelector } from 'react-redux';
import { addupCommingMovies} from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { RootState } from '../utils/appstore';
const useUpCommingMovies = () =>{
    const upCommingMovie = useSelector((store:RootState)=> store.movies.upCommingMovies);
    const dispatch = useDispatch();
    const getupCommingMovies =  async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS);
        const json = await data.json(); 
        dispatch(addupCommingMovies(json.results));

    };
    useEffect(()=>{
        if(!upCommingMovie)return;
      getupCommingMovies();
    }, [])
}
export default useUpCommingMovies;