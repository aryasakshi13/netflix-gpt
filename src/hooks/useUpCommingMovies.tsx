import { useDispatch } from 'react-redux';
import { addupCommingMovies} from "../utils/movieSlice";
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
const useUpCommingMovies = () =>{
    
    const dispatch = useDispatch();
    const getupCommingMovies =  async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", API_OPTIONS);
        const json = await data.json(); 
        dispatch(addupCommingMovies(json.results));

    };
    useEffect(()=>{
       getupCommingMovies();
    }, [])
}
export default useUpCommingMovies;