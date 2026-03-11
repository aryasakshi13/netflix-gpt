import React from 'react'
import Header from './Header';
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';

const Browse = () => {
  // API CALL (inside Useeffect)
  // fetch call 
  const dispatch = useDispatch();
    const getNowPlayingMovies  = async () =>{
      const data = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?",
        API_OPTIONS
      );
       const json = await data.json();
       console.log(json.genres);
       dispatch(addNowPlayingMovies(json.genres));
    };
     useEffect(() =>{
     getNowPlayingMovies();
    
     }, [])

  return (
    <div>
      <Header/>
    </div>
  )
}

export default Browse
