import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { useEffect } from 'react';
import { RootState } from '../utils/appstore';


const useNowPlayingMovies = () =>{
  const nowPlayingMovies = useSelector((store:RootState) => store.movies.nowPlayingMovies)
     
  // API CALL (inside Useeffect)
  // fetch call 
  const dispatch = useDispatch();
    const getNowPlayingMovies  = async () =>{
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/now_playing?page=1",
        API_OPTIONS
      );
       const json = await data.json();
       dispatch(addNowPlayingMovies(json.results));
    };
     useEffect(() =>{
      if(!nowPlayingMovies) return;
      getNowPlayingMovies();
    
     }, []);
};

export default useNowPlayingMovies;