
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies copy';
import useUpCommingMovies from '../hooks/useUpCommingMovies';
import { useSelector } from 'react-redux';
import { RootState } from '../utils/appstore';
import GptSearch from './GptSearch';

const Browse = () => {
  const  showGptSearch = useSelector((store: RootState) => store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();
  return (
    <div>
      <Header/>
      {
        showGptSearch ? <GptSearch/> : 
        <>
        <MainContainer/>
      <SecondaryContainer/>
        </>
      }
      
    </div>
  )
}

export default Browse
