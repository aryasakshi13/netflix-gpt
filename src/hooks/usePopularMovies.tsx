import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { RootState } from '../utils/appstore';
const usePopularMovies = () =>{
    const popularMovies = useSelector((store:RootState) => store.movies.PopularMovies)
    
    const dispatch = useDispatch();
    const getPopularMovies =  async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);
        const json = await data.json(); 
        dispatch(addPopularMovies(json.results));

    };
    useEffect(()=>{
        if (!popularMovies) return;
     getPopularMovies();
    }, [])
}
export default usePopularMovies;